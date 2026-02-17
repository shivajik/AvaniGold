import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  presets: [vercelPreset()],
  future: {
    unstable_optimizeDeps: true,
  },
} satisfies Config;
