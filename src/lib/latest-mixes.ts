import { cacheLife } from "next/cache";
import { aListOrigin, type Mix, selectLatestMixes } from "./mixes";

/**
 * Latest published mixes. Mixes change a few times a year, so the list is
 * cached for hours instead of scanning A-List on every visit. A failed
 * request shows no mixes until the next refresh.
 */
export async function getLatestMixes(limit: number): Promise<Mix[]> {
  "use cache";
  cacheLife("hours");

  const origin = aListOrigin();
  try {
    const response = await fetch(`${origin}/api/entries`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return [];
    return selectLatestMixes(await response.json(), origin, limit);
  } catch {
    return [];
  }
}
