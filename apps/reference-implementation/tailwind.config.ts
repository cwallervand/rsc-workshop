import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  presets: [sharedConfig],
  content: ["./src/**/*.tsx"],
} satisfies Config;

export default config;
