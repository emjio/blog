import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: 'blog-emjio.vercel.app',
  title: '随笔',
  subtitle: '随手记录 随时思考',
  lang: 'zh-Hans',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Cabbage',
    avatar: '/assets/avatar.jpg',
    status: '👋',
    bio: '勿忘初心',
    metadata: [{
      // text: 'github',
      icon: 'icons-github'
    },
    {
      // text: 'kwaa',
      icon: 'i-simple-icons-github',
      link: 'https://github.com/kwaa'
    },
    {
      // text: '@kwaabot',
      icon: 'i-simple-icons-telegram',
      link: 'https://t.me/kwaabot'
    },
    {
      // text: '@kwaa:matrix.org',
      icon: 'i-simple-icons-matrix',
      link: 'https://matrix.to/#/@kwaa:matrix.org'
    },
    {
      // text: '0x896478D978EB0000',
      icon: 'i-heroicons-solid-key',
      link: 'https://kwaa.dev/pgp/0x896478D978EB0000.asc',
      rel: 'pgpkey'
    }]
  },
  themeColor: '#3D4451'
}
