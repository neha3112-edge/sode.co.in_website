import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function MicrosoftCopilot() {
  return (
    <section
      id="microsoft-copilot"
      className="bg-[#062534] py-10 text-white sm:py-12 lg:py-0"
    >
      <Container>
        <div className="grid min-h-[365px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0">
          {/* =============================================================
              Left Content
          ============================================================== */}

          <div className="order-2 py-2 text-center lg:order-1 lg:py-10 lg:pr-10 lg:text-left">
            <h2 className="text-[26px] font-normal leading-[1.15] tracking-[-0.02em] text-white sm:text-[29px] lg:text-[30px]">
              Get 1 Month FREE Microsoft Copilot Pro with
              <br className="hidden lg:block" /> Rushford DBA
            </h2>

            <p className="mx-auto mt-7 max-w-[570px] text-[14px] font-normal leading-[1.32] text-white/95 sm:text-[15px] lg:mx-0">
              Get 1 month of FREE Microsoft Copilot Pro with the DBA at Rushford
              Business School. Access AI tools like Word, Excel, PowerPoint,
              Teams, and Business Chat to boost productivity, improve insights,
              and apply learning instantly. Offer exclusively available for DBA
              aspirants.
            </p>
          </div>

          {/* =============================================================
              Right Copilot Image
          ============================================================== */}

          <div className="order-1 flex min-h-[280px] items-center justify-center border-t border-black/25 lg:order-2 lg:min-h-[365px] lg:border-l lg:border-t-0">
            <div className="relative h-[280px] w-full max-w-[590px] sm:h-[320px] lg:h-[365px] lg:max-w-none">
              <Image
                src={getAssetPath(
                  "/assets/img/microsoft-365-copilot-rushford.webp",
                )}
                alt="Microsoft 365 Copilot tools including Word, Outlook, Excel, PowerPoint, Teams and Business Chat"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
