# mac-local-llm-mastra-sample

Sample app accompanying the Zenn book [MacBook Pro M シリーズで始める ローカル LLM ハンズオン](https://zenn.dev) — chapter 9 (Mastra + Next.js + AI SDK UI).

A Next.js chat app that streams responses from a locally-running Ollama model via a Mastra agent.

## Prerequisites

- Node.js 20+
- [Ollama](https://ollama.com) installed and running (`curl http://localhost:11434` returns `Ollama is running`)
- A pulled model, e.g. `ollama pull gemma4:e4b`

## Setup

```bash
git clone https://github.com/tkhashi/mac-local-llm-mastra-sample.git
cd mac-local-llm-mastra-sample
npm install
cp .env.example .env  # then edit if needed
npm run dev
```

Open <http://localhost:3000/chat> and start chatting.

## Environment

`.env`:

```
OLLAMA_BASE_URL=http://localhost:11434/api
OLLAMA_MODEL=gemma4:e4b
```

To use a different model, change `OLLAMA_MODEL` to anything in `ollama list` (e.g. `gemma4:e2b`, `qwen3.6:27b`).

## What's inside

| Path | Role |
|---|---|
| `src/mastra/agents/chat-agent.ts` | Mastra Agent wired to Ollama via `ollama-ai-provider-v2` |
| `src/mastra/tools/now-tool.ts` | Example tool — registered in `chat-agent.ts` |
| `src/mastra/index.ts` | Mastra instance |
| `src/app/api/chat/route.ts` | Next.js API route using `handleChatStream` from `@mastra/ai-sdk` |
| `src/app/chat/page.tsx` | UI using `useChat` from `@ai-sdk/react` and AI Elements |

## Pinned versions (important)

This stack must stay on AI SDK **v5** because `@mastra/ai-sdk` defaults to v5. Pin these:

- `ai@^5`
- `@ai-sdk/react@^2`
- `ollama-ai-provider-v2@^1.5.5`

`@mastra/core@latest` and `@mastra/ai-sdk@latest` are fine.

## License

MIT
