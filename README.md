# OpenRig website

The website and user documentation of [OpenRig](https://github.com/Siryu6/OpenRig), the open
source guitar pedalboard. Built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
```

| Path | |
|---|---|
| `src/pages/index.astro` | Landing page |
| `src/content/docs/docs/` | Documentation, served under `/docs/` |
| `src/assets/shots/` | Screenshots of the pedalboard (2048 × 1200) |
| `public/media/` | Screen recordings (MP4 and WebM, with a poster) |
| `src/styles/` | Landing page and documentation themes |

Screenshots and recordings come from the x86_64 OS image running in QEMU. Captures shown in
them belong to their creators on TONE3000, who are credited in the captions.

The site is published at [openrig.eu](https://openrig.eu) by GitHub Pages on every push to
`main`. `SITE` and `BASE` set where it is served (`BASE=/openrig-site` to serve it under the
repository name instead of the custom domain).

TONE3000 is a trademark of TONE3000; OpenRig is an independent project that uses the TONE3000
API. The site content is licensed under the GPL-3.0-or-later, like OpenRig.
