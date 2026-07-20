<script lang="ts" setup>
import type { BlogPost } from '@/types/blog'

const route = useRoute()

const slugify = (value: string) =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const theme = computed(() => {
  const name = route.params.theme || ''
  const strName = Array.isArray(name) ? name.at(0) || '' : name

  return slugify(strName)
})

const { data } = await useAsyncData(`theme-data-${theme.value}`, () =>
  queryCollection('content')
    .all()
    .then((articles) =>
      articles.filter((article) => {
        const meta = article.meta as unknown as BlogPost
        const tags = meta.tags || []

        return tags.some((tag) => {
          return slugify(tag) === theme.value
        })
      }),
    ),
)

const formattedData = computed(() => {
  return data.value?.map((article) => {
    const meta = article.meta as unknown as BlogPost

    return {
      path: article.path,
      title: article.title || 'no-title available',
      description: article.description || 'no-description available',
      image: meta.image || '/blogs-img/blog.jpg',
      alt: meta.alt || 'no alt data available',
      ogImage: meta.ogImage || '/blogs-img/blog.jpg',
      date: meta.date || 'no-date-available',
      tags: meta.tags || [],
      published: meta.published || false,
    }
  }) || []
})

const displayTheme = computed(() => {
  const posts = data.value || []

  for (const article of posts) {
    const meta = article.meta as unknown as BlogPost
    const tags = meta.tags || []

    const matchedTag = tags.find((tag) => slugify(tag) === theme.value)

    if (matchedTag) return matchedTag
  }

  return theme.value
})

const pageTitle = computed(() => displayTheme.value)

useHead({
  title: pageTitle.value,
  meta: [
    {
      name: 'description',
      content: `You will find all ${pageTitle.value} related items here.`,
    },
  ],
})

const siteData = useSiteConfig()

defineOgImage({
  props: {
    title: pageTitle.value,
    description: `You will find all ${pageTitle.value} related items here.`,
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
    <ThemeTopic />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in formattedData"
        :key="post.path"
        :path="post.path"
        :title="post.title"
        :date="post.date"
        :description="post.description"
        :image="post.image"
        :alt="post.alt"
        :og-image="post.ogImage"
        :tags="post.tags"
        :published="post.published"
      />

      <BlogEmpty v-if="formattedData.length === 0" />
    </div>
  </main>
</template>