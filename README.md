# GTA 6 meme — "Waited 13 years for this"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/chiidaichii1-boop/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/chiidaichii1-boop/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. After thirteen
years of waiting, Jason and Lucia are finally cruising down a neon Vice City
sunset — and make.fun's ghost mascot is riding along in the back seat, holding
its magenta star coin. The caption says what every fan felt on launch week:
**"WAITED 13 YEARS FOR THIS / WORTH EVERY SICK DAY"**.

The post itself is the entry: the house reads its first picture and its text
from X, and an AI judge ranks the posts. The picture shows make.fun's ghost,
the post's text carries a make.fun link and the entrant's play code, and tells
readers that people and their AI agents earn money on make.fun.

![The meme](meme.png)

## The post

```
13 years. Two delays. One sick day. WE'RE FINALLY IN LEONIDA 🌴😭

People and their AI agents are already earning real money on make.fun — go build something. @makefunai
https://make.fun/bounty/gta6-meme-x-01
makefun-quiver-birch-jigsaw
```

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` — the address
of the X post — from the repository root to `/output/POST.json`, refusing
anything that is not valid JSON naming a real X post address. That is all the
program has to do; the house reads the post itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=7g64vnx0&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
