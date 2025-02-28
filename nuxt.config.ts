import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: [
    '~/styles/_reset.scss',
    'locomotive-scroll/dist/locomotive-scroll.css',
    '~/styles/_fonts.scss',
    '~/styles/_base.scss',
  ],
  devtools: {
    enabled: true,
  },
  modules: ['@nuxt/content', '@nuxt/eslint'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  runtimeConfig: {
    spotifyClientId: '',
    spotifyClientSecret: '',
    spotifyRefreshToken: '',
    public: {
      githubLink: 'https://github.com/Skythrill256',
      linkedinLink: 'https://linkedin.com/in/anjishnu-ganguly-722046284',
      twitterLink: 'https://x.com/anjishnu46',
      redditLink: 'https://www.reddit.com/user/ShellyMaster3946',
      email: 'anjishnuganguly773@gmail.com',
    },
  },
  typescript: {
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'sass:color';
            @use "~/styles/animations";
            @use "~/styles/mixins";
            @use "~/styles/screens";
            @use "~/styles/typography";
            @use "~/styles/variables";
          `,
        },
      },
    },
  },
});
