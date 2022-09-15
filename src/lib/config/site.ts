import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: '随笔',
  subtitle: '随手记录 随时思考',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Cabbage',
    avatar: '/assets/avatar.jpg',
    status: '👋',
    bio: '勿忘初心'
  },
  themeColor: '#3D4451'
}
