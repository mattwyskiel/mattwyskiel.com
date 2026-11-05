import { plugin } from "bun";

// Next.js turns a static image import into `{ src, width, height }`. Bun
// imports it as a path string, so tests load images the way Next.js does.
// Size is not read from the file; tests check alt text, not layout.
plugin({
  name: "next-static-images",
  setup(build) {
    build.onLoad({ filter: /\.(avif|gif|jpe?g|png|webp)$/ }, (args) => ({
      exports: { default: { src: args.path, width: 1, height: 1 } },
      loader: "object",
    }));
  },
});
