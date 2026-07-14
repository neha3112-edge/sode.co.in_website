import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sode.co.in";

  // Start with homepage only.
  // Baaki static routes app folder scan karke automatically add hongi.
  const routes: string[] = [""];

  try {
    const appDirectory = path.join(process.cwd(), "app");

    const scanDir = (dir: string, currentRoute = "") => {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          // API, private Next.js folders aur dot folders skip karo.
          if (item === "api" || item.startsWith("_") || item.startsWith(".")) {
            continue;
          }

          // Route groups jaise (marketing) URL me include nahi hote.
          const nextRoute =
            item.startsWith("(") && item.endsWith(")")
              ? currentRoute
              : `${currentRoute}/${item}`;

          scanDir(fullPath, nextRoute);
        } else if (item.startsWith("page.")) {
          // Root page already routes me present hai.
          if (!currentRoute) {
            continue;
          }

          // Dynamic routes jaise [id] sitemap me automatically add nahi karne.
          const isDynamicRoute =
            currentRoute.includes("[") || currentRoute.includes("]");

          if (!isDynamicRoute && !routes.includes(currentRoute)) {
            routes.push(currentRoute);
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
    priority: route === "" ? 1 : 0.7,
  }));
}
