# Childhood Memory — Make the AI Judge Feel Nostalgic

One sentence, at most 280 characters, recalling a childhood memory:
learning to ride a bike, and only realising Dad had let go when the
street went quiet.

[![make.fun bounty](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/sw897636-web/childhood-memory-20261125/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/sw897636-web/childhood-memory-20261125/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

## Entry

> My father taught me to ride by running behind my old red bike, and I only knew he had let go when the street went quiet behind me, and I kept pedalling, afraid to look back.

## How it works

`main.ts` (Node 22, no network, deterministic) writes the sentence to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). It checks
the sentence is 1–280 characters counted in code points, then writes it
as UTF-8. Two runs produce byte-identical output.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
