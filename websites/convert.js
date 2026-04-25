const fs = require('fs');
const path = require('path');

const templates = ['Template-41', 'Template-42', 'Template-43', 'Template-44', 'Template-45', 'Template-46', 'Template-47', 'Template-48', 'Template-49', 'Template-50'];
const baseDir = __dirname;

for (const template of templates) {
  const tplDir = path.join(baseDir, template);
  console.log(`Processing ${template}...`);

  // 1. package.json
  const pkgPath = path.join(tplDir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    if (pkg.dependencies) {
      delete pkg.dependencies['@cloudflare/vite-plugin'];
      delete pkg.dependencies['@tanstack/react-start'];
    }
    if (pkg.devDependencies) {
      delete pkg.devDependencies['@lovable.dev/vite-tanstack-config'];
    }
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  }

  // 2. vite.config.ts
  const viteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});`;
  fs.writeFileSync(path.join(tplDir, 'vite.config.ts'), viteConfig);

  // 3. index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${template}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
  fs.writeFileSync(path.join(tplDir, 'index.html'), indexHtml);

  // 4. src/main.tsx
  const mainTsx = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './styles.css'

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)`;
  fs.writeFileSync(path.join(tplDir, 'src', 'main.tsx'), mainTsx);

  // 5. src/routes/__root.tsx
  const rootTsxPath = path.join(tplDir, 'src', 'routes', '__root.tsx');
  if (fs.existsSync(rootTsxPath)) {
    let rootCode = fs.readFileSync(rootTsxPath, 'utf8');
    // Remove HeadContent and Scripts from import
    rootCode = rootCode.replace(/HeadContent\s*,?/, '');
    rootCode = rootCode.replace(/Scripts\s*,?/, '');
    // Clean up empty commas in import
    rootCode = rootCode.replace(/,\s*}/g, '}');
    rootCode = rootCode.replace(/{\s*,/g, '{');
    // Remove shellComponent config
    rootCode = rootCode.replace(/shellComponent:\s*RootShell,/g, '');
    // Remove RootShell function
    rootCode = rootCode.replace(/function\s+RootShell[\s\S]*?<\/html>\s*\);\s*\}/, '');
    fs.writeFileSync(rootTsxPath, rootCode);
  }

  // 6. Delete unnecessary files
  const filesToDelete = ['wrangler.jsonc', 'bunfig.toml', 'src/router.tsx'];
  for (const file of filesToDelete) {
    const filePath = path.join(tplDir, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  const wrDir = path.join(tplDir, '.wrangler');
  if (fs.existsSync(wrDir)) {
    fs.rmSync(wrDir, { recursive: true, force: true });
  }

  console.log(`Finished ${template}`);
}
