import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// PORT/BASE_PATH are injected by the Replit runtime. Outside that runtime
// (local builds, `pnpm -r run build` from the workspace root) they are absent,
// so fall back to defaults rather than failing the build. Explicitly set
// values still win, and invalid ones are still rejected.
const DEFAULT_PORT = 8080;
// Relative base: the built site works from any folder on the host
// (e.g. aurahealz.com/ or aurahealz.com/v1/) without rebuilding.
const DEFAULT_BASE_PATH = "./";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : DEFAULT_PORT;

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || DEFAULT_BASE_PATH;

/**
 * The contact form posts to send-mail.php, which only runs on the PHP host
 * (IONOS). The dev server would return the file's source instead, so the form
 * always failed locally. This stub answers that one request during `vite dev`
 * and prints the message in the terminal. It is not part of the build.
 */
const contactFormDevStub = {
  name: "contact-form-dev-stub",
  apply: "serve" as const,
  configureServer(server: { middlewares: { use: (fn: (req: any, res: any, next: () => void) => void) => void } }) {
    server.middlewares.use((req, res, next) => {
      if (req.method !== "POST" || !req.url?.split("?")[0].endsWith("/send-mail.php")) {
        return next();
      }
      let body = "";
      req.on("data", (chunk: Buffer) => (body += chunk));
      req.on("end", () => {
        console.log("\n[dev] Contact form submission (not actually emailed):\n" + body + "\n");
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify({ ok: true, dev: true }));
      });
    });
  },
};

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    contactFormDevStub,
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
