import { apiOrigin, localApiOrigin, pathPrefix } from "@whiskey/utils";

/** Shared by the website and OBS; never accepts a URL from query parameters. */
export function nowListeningEndpoint() {
  const local =
    process.env.LOCAL === "true" || process.env.NODE_ENV === "development";
  const stack =
    process.env.NEXT_PUBLIC_STACK ??
    process.env.STACK ??
    (local ? "dev" : "prod");
  return `${local ? localApiOrigin() : apiOrigin()}${pathPrefix(stack)}/roon/now-listening`;
}
