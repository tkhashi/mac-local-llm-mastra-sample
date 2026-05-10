import { Agent } from "@mastra/core/agent";
import { createOllama } from "ollama-ai-provider-v2";
import { nowTool } from "../tools/now-tool";

const ollama = createOllama({
  baseURL: process.env.OLLAMA_BASE_URL || "http://localhost:11434/api",
});

export const chatAgent = new Agent({
  id: "chatAgent",
  name: "Local Chat Agent",
  instructions: `あなたはローカルで動作する日本語アシスタントです。
- 回答は簡潔に、必要なら箇条書きで。
- 不確かなことは「分かりません」と素直に答えます。
- コードは TypeScript を優先します。
- 時刻を聞かれたときは now ツールを呼び出して回答に含めます。`,
  model: ollama(process.env.OLLAMA_MODEL || "gemma4:e4b"),
  tools: { nowTool },
});
