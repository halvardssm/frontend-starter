import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    cacheDir: resolve(__dirname, ".vite"),
    publicDir: resolve(__dirname, "public"),
    envDir: resolve(__dirname),
    define: {
      // Makes the version available in the app.
      __APP_VERSION__: JSON.stringify(env.npm_package_version),
    },
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      // Put the Sentry vite plugin after all other plugins
      sentryVitePlugin({
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,

        // Specify the directory containing build artifacts
        include: "./dist",

        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and needs the `project:releases` and `org:read` scopes
        authToken: env.SENTRY_AUTH_TOKEN,
        // Optionally uncomment the line below to override automatic release name detection
        // release: env.RELEASE,
      }),
    ],
  };
});
