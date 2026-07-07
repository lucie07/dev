<script setup>
import { siteMetaData } from './data'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: () => siteMetaData,

  // Google tag (gtag.js)
  script: [
    {
      key: 'google-analytics-src',
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-2QHG33MEYY',
    },
    {
      key: 'google-analytics-init',
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2QHG33MEYY');
      `,
    },
  ],
})
</script>

<template>
  <div class="bg-[#FFFEFB] dark:text-zinc-300 dark:bg-[#21201E]">
    <NuxtLoadingIndicator :height="4" color="#755200" error-color="#ef4444" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.reading-progress .nuxt-loading-indicator {
  /* Reuse Nuxt's built-in loading bar as a reading progress bar on project pages */
  opacity: 1 !important;
  transform: scaleX(var(--reading-progress, 0%)) !important;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark {
  color-scheme: dark;
}
</style>
