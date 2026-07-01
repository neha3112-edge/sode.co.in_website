import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sode.co.in/sode";
  
  // Base routes to start with
  const routes = [""];
  
  try {
    const appDirectory = path.join(process.cwd(), "app");
    
    const scanDir = (dir: string, currentRoute = "") => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip API folders, special next folders (_components, etc.), or dot folders
          if (item === "api" || item.startsWith("_") || item.startsWith(".")) {
            continue;
          }
          // Route groups (e.g. "(marketing)") are traversed, but their names are not added to URL
          const nextRoute = item.startsWith("(") && item.endsWith(")") 
            ? currentRoute 
            : `${currentRoute}/${item}`;
            
          scanDir(fullPath, nextRoute);
        } else if (item.startsWith("page.")) {
          // If we find a page file inside a subfolder, add it to routes
          if (currentRoute && !routes.includes(currentRoute)) {
            // Ignore dynamic routing folders like [id]
            if (!currentRoute.includes("[") && !currentRoute.includes("]")) {
              routes.push(currentRoute);
            }
          }
        }
      }
    };
    
    scanDir(appDirectory);
  } catch (error) {
    console.error("Error reading app directory for sitemap:", error);
  }

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
