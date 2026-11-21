# makefun-news-image-20261120

Editorial one-day world-news image for the make.fun bounty **news-image-20261120**
("Sum up 20 November's world news in one image").

## What it does

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`.
The image is a 1024×1024 editorial infographic of Friday 20 November 2026 world news:
war (Kyiv bridges), weather (Cyclone Akvan), markets (Asia AI sell-off), plus diplomacy,
climate, law, energy and regional stories — named to the day, with a date-check panel.

## Run locally

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
