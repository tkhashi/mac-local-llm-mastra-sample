# mac-local-llm-mastra-sample

Zenn Book「[MacBook Pro M シリーズで始める ローカル LLM ハンズオン](https://zenn.dev)」第 9 章（Mastra + Next.js + AI SDK UI）のサンプルアプリです。

ローカルで動作する Ollama モデルを Mastra Agent 経由で呼び出し、Next.js のチャット UI にストリーミング応答を返します。

## 前提条件

- Node.js 20 以上
- [Ollama](https://ollama.com) がインストール済みで起動していること（`curl http://localhost:11434` で `Ollama is running` が返る）
- 任意のモデルを pull 済みであること（例: `ollama pull gemma4:e4b`）

## セットアップ

```bash
git clone https://github.com/tkhashi/mac-local-llm-mastra-sample.git
cd mac-local-llm-mastra-sample
npm install
cp .env.example .env  # 必要に応じて編集
npm run dev
```

ブラウザで <http://localhost:3000/chat> を開くとチャットを試せます。

## 環境変数

`.env`:

```
OLLAMA_BASE_URL=http://localhost:11434/api
OLLAMA_MODEL=gemma4:e4b
```

別のモデルを使いたい場合は `OLLAMA_MODEL` を `ollama list` に表示されている任意のモデル名に変更してください（例: `gemma4:e2b`、`qwen3.6:27b`）。

## ファイル構成

| パス | 役割 |
|---|---|
| `src/mastra/agents/chat-agent.ts` | Ollama を `ollama-ai-provider-v2` 経由で呼び出す Mastra Agent |
| `src/mastra/tools/now-tool.ts` | サンプルのツール — `chat-agent.ts` に登録済み |
| `src/mastra/index.ts` | Mastra インスタンス |
| `src/app/api/chat/route.ts` | `@mastra/ai-sdk` の `handleChatStream` を使う Next.js API ルート |
| `src/app/chat/page.tsx` | `@ai-sdk/react` の `useChat` と AI Elements を使った UI |

## バージョン固定について（重要）

`@mastra/ai-sdk` が AI SDK **v5** に依存しているため、以下のバージョンを固定する必要があります。

- `ai@^5`
- `@ai-sdk/react@^2`
- `ollama-ai-provider-v2@^1.5.5`

`@mastra/core@latest` と `@mastra/ai-sdk@latest` はそのままで問題ありません。

## ライセンス

MIT
