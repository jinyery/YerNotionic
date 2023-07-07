# YerNotionic

YerNotionic is a static blog that updates in real time, synchronizing changes to Notion pages without rebuilding the deployment.
It is forked from [Notionic](https://github.com/izuolan/notionic) and has been improved in details compared to the original version, with the following modifications:  
- Added automatic generation of slug
- Optimized generation of page titles
- Removed parts related to craft.io
- Improved adaptation to Utterances
- Fixed some fragmentary bugs on the UI

![YerNotionic](./banner.png)

## Demo

- Notionic: [https://notionic.vercel.app](https://notionic.vercel.app)
- YerNotionic (My Blog): [https://blog.yer.xyz](https://blog.yer.xyz)

## Features

- Incremental static regeneration
- Outline
- Theme switch
- Multi-language
- Native style comments
- Loading and transition animation
- Block page support
- SEO and Open Graph optimization
- Weekly support
- Contact Form
- Telegram bot integration

## Quick Start

- Duplicate [Notionic template](https://izuolan.notion.site/87d5fa7c98e04cb79ef55f60989dc765), and share it to the public
- [Fork](https://github.com/jinyery/YerNotionic/fork) this project
- **Customize `blog.config.js` file**
- _(Optional)_ Replace `favicon.svg/png/ico` in `public` folder with your own
- Modify `lib/lang.js` with your self introduction
- Deploy on [Vercel](https://vercel.com), set following environment variables：
  - `NOTION_PAGE_ID` (Required): The ID of the Notion page you previously shared to the web, usually has 32 digits after your workspace address
  - eg: `https://your-username.notion.site/<NOTION_PAGE_ID>?v=<view_id>`
- ***Additional**: The repo has a preset "workflow" for scheduled build, which requires a "**Deploy Hook**". This "Hook" is a link that needs to be generated in "Vercel" and written in the repo's secrets (the key of the repo secret is "`VERCEL_HOOK`")*
  - *eg: `https://api.vercel.com/v1/integrations/deploy/prj_xxxxxxx/xxxxxxx?buildCache=false`*

## Development

```bash
# Init
pnpm install
# Develop
./dev.sh
# Build & Serve
pnpm build
pnpm start
```

## Reference & License

- [Notion-X](https://github.com/NotionX/react-notion-x)
- [Nobelium](https://github.com/craigary/nobelium)
- [NotionNext](https://github.com/tangly1024/NotionNext)

The MIT License.
