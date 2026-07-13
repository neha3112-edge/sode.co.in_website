const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "app", "iiitb");

const header = fs.existsSync(path.join(basePath, "components", "header.php")) 
  ? fs.readFileSync(path.join(basePath, "components", "header.php"), "utf-8") : "";
const index = fs.existsSync(path.join(basePath, "index.php"))
  ? fs.readFileSync(path.join(basePath, "index.php"), "utf-8") : "";
const footer = fs.existsSync(path.join(basePath, "components", "footer.php"))
  ? fs.readFileSync(path.join(basePath, "components", "footer.php"), "utf-8") : "";
const popup = fs.existsSync(path.join(basePath, "components", "popup.php"))
  ? fs.readFileSync(path.join(basePath, "components", "popup.php"), "utf-8") : "";

// Merge them just like PHP includes
let html = index
  .replace("<?php include __DIR__ . '/components/header.php';?>", header)
  .replace("<?php include __DIR__ . '/components/header.php'; ?>", header)
  .replace("<?php include __DIR__ . '/components/footer.php';?>", footer)
  .replace("<?php\ninclude __DIR__ . '/components/footer.php';\n?>", footer)
  .replace("<?php include __DIR__ . '/components/popup.php'; ?>", popup);

// Remove remaining PHP tags
html = html.replace(/<\?php[\s\S]*?\?>/gi, "");
// Remove php echo
html = html.replace(/<\?=\s*([^?>]+)\s*\?>/gi, "");

// Convert class to className
html = html.replace(/class=/gi, "className=");

// Convert for to htmlFor
html = html.replace(/for=/gi, "htmlFor=");

// Convert inline styles
// Matches style="something: value; something-else: value"
html = html.replace(/style="([^"]*)"/g, (match, styleString) => {
  const styles = styleString.split(";").filter(s => s.trim() !== "");
  const styleObj = {};
  styles.forEach(s => {
    let [key, value] = s.split(":");
    if (key && value) {
      key = key.trim();
      // CamelCase conversion
      key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[key] = value.trim().replace(/'/g, '"');
    }
  });
  return `style={${JSON.stringify(styleObj)}}`;
});

// Self-closing tags fix
const selfClosing = ["img", "input", "br", "hr", "meta", "link", "source"];
selfClosing.forEach(tag => {
  const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, "gi");
  html = html.replace(regex, `<${tag}$1 />`);
});

// Fix unclosed tags or attributes with no values (like required, checked)
// This is a naive fix for JSX boolean attributes
html = html.replace(/\srequired(\s|>|\/)/gi, " required={true}$1");
html = html.replace(/\schecked(\s|>|\/)/gi, " checked={true}$1");

// Fix some event handlers
html = html.replace(/onclick=/gi, "onClick=");
html = html.replace(/onsubmit=/gi, "onSubmit=");
html = html.replace(/onchange=/gi, "onChange=");

// Convert HTML comments to JSX comments
html = html.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");
html = html.replace(/onclick=/gi, "onClick=");
html = html.replace(/onsubmit=/gi, "onSubmit=");
html = html.replace(/onchange=/gi, "onChange=");

// Comment out scripts (since they can't be rendered as raw strings in JSX without {})
// Let's use dangerouslySetInnerHTML for scripts to avoid parser errors
html = html.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (match, scriptContent, offset, fullText) => {
  // If it has src, convert it to a self-closing or empty script
  if (match.includes("src=")) {
    return match.replace(/>[\s\S]*?<\/script>/i, "></script>");
  }
  return `<script dangerouslySetInnerHTML={{ __html: \`${scriptContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }}></script>`;
});


const jsx = `"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import "./iiitb.css";

export default function IIITBPage() {
  return (
    <>
      ${html}
    </>
  );
}
`;

fs.writeFileSync(path.join(__dirname, "app", "iiitb", "page.tsx"), jsx);
console.log("Converted successfully!");
