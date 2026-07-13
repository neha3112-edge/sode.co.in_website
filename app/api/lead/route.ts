/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

// Helper function to extract UTM parameters from a URL string (including query params after hashes)
function extractUTMParams(urlStr: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!urlStr) return params;

  try {
    // 1. Extract using regex (highly robust for query params inside hash/fragments)
    const regex = /[?&](utm_[a-zA-Z0-9_-]+)=([^&#\s]*)/g;
    let match;
    while ((match = regex.exec(urlStr)) !== null) {
      try {
        const key = decodeURIComponent(match[1]);
        const val = decodeURIComponent(match[2]);
        params[key] = val;
      } catch (e) {
        params[match[1]] = match[2];
      }
    }

    // 2. Extract using standard URL parser as a fallback/additional source
    const absoluteUrlStr = urlStr.startsWith('http') ? urlStr : `http://localhost${urlStr}`;
    const url = new URL(absoluteUrlStr);

    url.searchParams.forEach((value, key) => {
      if (key.startsWith('utm_') && !params[key]) {
        params[key] = value;
      }
    });

    if (url.hash && url.hash.includes('?')) {
      const hashQueryPart = url.hash.split('?')[1];
      const hashSearchParams = new URLSearchParams(hashQueryPart);
      hashSearchParams.forEach((value, key) => {
        if (key.startsWith('utm_') && !params[key]) {
          params[key] = value;
        }
      });
    }
  } catch (error) {
    console.error("Error parsing URL params:", error);
  }

  return params;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      course,
      state,
      form_name,
      source,
      sub_source,
      utm_source,
      utm_medium,
      utm_term,
      utm_campaign,
      utm_content,
      page_url,
    } = body;

    const cleanPhone = phone.replace(/\D/g, "");

    // Format phone with '+' prefix (e.g., +91XXXXXXXXXX)
    let phoneWithPlus = cleanPhone;
    if (cleanPhone.length === 10) {
      phoneWithPlus = `+91${cleanPhone}`;
    } else if (!phoneWithPlus.startsWith("+")) {
      phoneWithPlus = `+${phoneWithPlus}`;
    }

    // Extract IP address from request headers
    const userIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip")?.trim() ||
      "";

    // Extract UTM parameters from the page_url
    const urlParams = page_url ? extractUTMParams(page_url) : {};
    console.log("Extracted UTM parameters from page_url:", urlParams);

    // Prioritize URL-extracted parameters over request body fallbacks
    const finalUtmSource = urlParams["utm_source"] || utm_source || "Organic";
    const finalUtmMedium = urlParams["utm_medium"] || utm_medium || "SODE CO IN Organic";
    const finalUtmCampaign = urlParams["utm_campaign"] || utm_campaign || "";
    const finalUtmTerm = urlParams["utm_term"] || utm_term || "";
    const finalUtmContent = urlParams["utm_content"] || utm_content || "";

    const finalPayload = {
      full_name: name,
      name: name,
      email: email,
      phone: cleanPhone,
      course: course,
      state,
      // ✅ dynamic form name
      form_name: form_name || "Default Form",
      // ✅ dynamic source
      source: source || "SODE",
      sub_source: sub_source || "",
      utm_source: finalUtmSource,
      utm_medium: finalUtmMedium,
      utm_term: finalUtmTerm,
      utm_campaign: finalUtmCampaign,
      utm_content: finalUtmContent,
      // ✅ page tracking
      page_url: page_url || "Unknown",
      ip_address: userIp,
    };

    // 1. Submit to Primary CRM API
    const primaryCrmUrl = process.env.PRIMARY_CRM_URL;
    const primaryCrmApiKey = process.env.PRIMARY_CRM_API_KEY;

    if (primaryCrmUrl && primaryCrmApiKey) {
      try {
        console.log("Submitting lead to Primary CRM...");
        const crmResponse = await fetch(
          primaryCrmUrl,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": primaryCrmApiKey,
            },
            body: JSON.stringify(finalPayload),
          }
        );
        if (!crmResponse.ok) {
          console.error("Primary CRM API error response:", await crmResponse.text());
        } else {
          console.log("Lead successfully submitted to Primary CRM");
        }
      } catch (crmErr) {
        console.error("Failed to send lead to Primary CRM:", crmErr);
      }
    } else {
      console.warn("Primary CRM settings are not configured in environment variables.");
    }

    // 2. Submit to Secondary CRM API (mysode CRM)
    const secondaryCrmUrl = process.env.SECONDARY_CRM_URL;
    const secondaryCrmApiKey = process.env.SECONDARY_CRM_API_KEY;

    if (secondaryCrmUrl) {
      try {
        console.log("Submitting lead to Secondary CRM...");
        const secondaryCrmResponse = await fetch(
          secondaryCrmUrl,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(secondaryCrmApiKey ? { "x-api-key": secondaryCrmApiKey } : {}),
            },
            body: JSON.stringify(finalPayload),
          }
        );
        if (!secondaryCrmResponse.ok) {
          console.error("Secondary CRM API error response:", await secondaryCrmResponse.text());
        } else {
          console.log("Lead successfully submitted to Secondary CRM");
        }
      } catch (secondaryCrmErr) {
        console.error("Failed to send lead to Secondary CRM:", secondaryCrmErr);
      }
    } else {
      console.warn("Secondary CRM settings are not configured.");
    }

    // 3. Submit to Gallabox Webhook API
    const gallaboxWebhookUrl = process.env.GALLABOX_WEBHOOK_URL;

    if (gallaboxWebhookUrl && gallaboxWebhookUrl !== "your_gallabox_webhook_url_here") {
      try {
        console.log("Submitting lead to Gallabox Webhook...");
        const gallaboxResponse = await fetch(
          gallaboxWebhookUrl,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              phone: phoneWithPlus,
              email: email || "",
              course: course || "MBA",
              state: state || "",
              source: source || "SODE",
              tags: ["Success"],
              utm_source: finalUtmSource,
              utm_medium: finalUtmMedium,
              utm_campaign: finalUtmCampaign,
              utm_term: finalUtmTerm,
              utm_content: finalUtmContent,
            }),
          }
        );

        if (!gallaboxResponse.ok) {
          const errMsg = await gallaboxResponse.text();
          console.error("Gallabox Webhook API Error Response:", errMsg);
        } else {
          console.log("Lead successfully submitted to Gallabox Webhook");
        }
      } catch (gallaErr) {
        console.error("Failed to send lead to Gallabox Webhook:", gallaErr);
      }
    } else {
      console.log("Gallabox Webhook URL is not configured. Skipping Gallabox API submission.");
    }

    // 4. Submit to Brevo API
    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListIdStr = process.env.BREVO_LIST_ID;

    if (brevoApiKey && brevoApiKey !== "your_brevo_api_key_here") {
      try {
        console.log("Submitting lead to Brevo...");
        const brevoListId = parseInt(brevoListIdStr || "217", 10) || 217;

        const brevoResponse = await fetch(
          "https://api.brevo.com/v3/contacts",
          {
            method: "POST",
            headers: {
              "api-key": brevoApiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email || undefined,
              listIds: [brevoListId],
              attributes: {
                FULLNAME: name,
                SMS: phoneWithPlus,
                MOBILE: phoneWithPlus,
                COURSES: course || "MBA",
                STATES: state || "",
                UTM_SOURCE: finalUtmSource,
                UTM_CAMPAIGN: finalUtmCampaign,
                UTM_MEDIUM: finalUtmMedium,
                UTM_TERM: finalUtmTerm,
                SOURCE: source || "SODE",
              },
              updateEnabled: true,
            }),
          }
        );

        if (!brevoResponse.ok) {
          const errMsg = await brevoResponse.text();
          console.error("Brevo API Error Response:", errMsg);
        } else {
          console.log("Lead successfully submitted to Brevo");
        }
      } catch (brevoErr) {
        console.error("Failed to send lead to Brevo:", brevoErr);
      }
    } else {
      console.log("Brevo API Key is not configured. Skipping Brevo API submission.");
    }

    // 5. Submit to Google Sheets (specifically for IIITB Leads)
    if (finalPayload.source === "IIITB LP" || finalPayload.form_name?.includes("IIITB") || finalPayload.form_name?.includes("Coupon Form") || finalPayload.form_name?.includes("Compare University Form")) {
      try {
        console.log("Submitting lead to IIITB Google Sheets Script...");
        const gsheetResponse = await fetch(
          "https://script.google.com/macros/s/AKfycbwCXWFhWQAxt0tR-JOK-6cGBK4MjkiDGSYsxUlcVWjlpJeqJKv5V6a0fm7i9EZFeTV7hw/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalPayload),
          }
        );
        if (!gsheetResponse.ok) {
          console.error("IIITB Google Sheets error response:", await gsheetResponse.text());
        } else {
          console.log("Lead successfully submitted to IIITB Google Sheets Script");
        }
      } catch (gsheetErr) {
        console.error("Failed to send lead to IIITB Google Sheets Script:", gsheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Data submitted successfully",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    );
  }
}