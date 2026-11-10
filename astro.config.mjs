import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://imshuheb.in",
  // The dev toolbar's audit re-fetches every image and re-runs on page changes,
  // which made the dev tab sluggish. It is dev-only and not needed here.
  devToolbar: { enabled: false },
});
