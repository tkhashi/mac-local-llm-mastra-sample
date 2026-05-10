import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const nowTool = createTool({
  id: "now",
  description: "現在の日時を ISO 8601 形式で返します。",
  inputSchema: z.object({}),
  outputSchema: z.object({ now: z.string() }),
  execute: async () => ({ now: new Date().toISOString() }),
});
