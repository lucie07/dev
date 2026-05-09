<script lang="ts" setup>
const { data } = await useAsyncData('all-blog-post-by-category', () => queryCollection('content').all())

const allTags = new Map()

data.value?.forEach((blog) => {
  const tags: Array<string> = (blog.meta.tags as string[]) || []

  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag)
      allTags.set(tag, cnt + 1)
    } else {
      allTags.set(tag, 1)
    }
  })
})

useHead({
  title: 'Categories',
  meta: [
    {
      name: 'description',
      content: 'Browse projects by topic, including digital humanities, research software, web development, design, film, music, and creative digital practice.',
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()

defineOgImage({
  props: {
    title: 'Categories',
    description: 'Browse projects by topic, including digital humanities, research software, web development, design, film, music, and creative digital practice.',
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />

    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryCard
        v-for="topic in allTags"
        :key="topic[0]"
        :title="topic[0]"
        :count="topic[1]"
      />
    </div>
  </main>
</template>