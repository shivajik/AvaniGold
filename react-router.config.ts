import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  presets: [
    vercelPreset({
      config: {
        runtime: "nodejs",
      },
    }),
  ],
  future: {
    unstable_optimizeDeps: true,
  },
} satisfies Config;
