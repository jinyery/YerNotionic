const BLOG = {
  title: 'YerBlog',
  author: 'Yer Y',
  email: 'yjy@yer.xyz',
  link: 'https://blog.yer.xyz',
  description: 'This is Yer\'s Blog!',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy YerNotionic in a folder
  since: 2023, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    weekly: true,
    projects: true,
    books: true,
    contact: true,
    friends: false
  },
  showWeChatPay: true,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/jinyery',
    github: 'https://github.com/jinyery',
    telegram: 'https://t.me/jinyery'
  },
  seo: {
    keywords: ['YerBlog', 'Yer', 'Blog', 'Yer Y', 'jinyery'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'jinyery.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '6384227049', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://t.me/YerChannel', // The link of your Telegram channel
  telegramChannelName: 'YerChannel', // The name of your Telegram channel
  analytics: {
    provider: 'ga', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: process.env.GA_MEASUREMENT_ID // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: 'utterances', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: 'https://omgkhfjcpaltztzqcjvj.supabase.co', // The url of your Supabase instance
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tZ2toZmpjcGFsdHp0enFjanZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1Mjg2NzgsImV4cCI6MjAwNDEwNDY3OH0.MvHVjacCcgM3JqQlVOZ55uQ_Jtb3pws4xihZGawk_6k' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: 'jinyery/YerNotionic', // It should be changed to your own repo
      issue_term: "pathname"
    }
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  ICP: '冀ICP备2021023021号-1'
}
// export default BLOG
module.exports = BLOG
