<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        "Hello. I'm Lucie Mingmei Hao. Web, research and design",
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Hello there',
  title: navbarData.homeTitle,
  description: 'Web, research and design',
  link: '/image-10-resized.png',
})
</script>

<template>
  <div>
    <!-- Full-width hero -->
    <MainHero />

    <main class="container max-w-5xl mx-auto text-zinc-600">
      <MainRecent />
      <!-- <MainTrending /> -->

      <!-- All Projects section -->
      <div class="px-4 mt-0 mb-12 text-left">
        <NuxtLink
          to="/blogs"
          style="text-decoration-skip-ink: none;"
          class="inline-block text-2xl font-medium text-[#664700] underline decoration-[#FFD77A] decoration-2 underline-offset-[0.2em] transition-all duration-150 ease-in-out hover:text-[#664700] hover:decoration-[#FFD77A] hover:decoration-[3px] focus-visible:text-[#664700] focus-visible:decoration-[#FFD77A] focus-visible:decoration-[3px] dark:text-[#FFECC7] dark:hover:text-[#FFF4D6] dark:focus-visible:text-[#FFF4D6]"
        >
          All Projects
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
