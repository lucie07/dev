<script lang="ts" setup>
import Fuse from 'fuse.js'
import type { BlogPost } from '~/types/blog'

function parseCustomDate(dateStr?: string): Date {
  if (!dateStr) return new Date(0)

  const cleanDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1')
  const parsedDate = new Date(cleanDateStr)

  return Number.isNaN(parsedDate.getTime()) ? new Date(0) : parsedDate
}

const { data } = await useAsyncData('all-project-posts', () =>
  queryCollection('content')
    .where('path', 'LIKE', '/blogs/%')
    .all()
)

const elementPerPage = ref(12)
const pageNumber = ref(1)
const searchTest = ref('')

const formattedData = computed(() => {
  return (
    data.value
      ?.filter((articles) => {
        return (
          articles.path?.startsWith('/blogs/') &&
          articles.path !== '/blogs/about' &&
          articles.path !== '/about'
        )
      })
      .map((articles) => {
        const meta = articles.meta as unknown as BlogPost

        return {
          path: articles.path?.replace(/^\/blogs/, '/projects'),
          title: articles.title || 'no-title available',
          description: articles.description || 'no-description available',
          image: meta.image || '/not-found.jpg',
          alt: meta.alt || 'no alter data available',
          ogImage: meta.ogImage || '/not-found.jpg',
          date: meta.date || 'not-date-available',
          tags: meta.tags || [],
          published: meta.published || false,
        }
      })
      .sort((a, b) => {
        return parseCustomDate(b.date).getTime() - parseCustomDate(a.date).getTime()
      }) || []
  )
})

const fuse = computed(() => {
  return new Fuse(formattedData.value, {
    keys: ['title', 'description'],
    threshold: 0.4,
    includeScore: false,
  })
})

const searchData = computed(() => {
  if (!searchTest.value.trim()) {
    return formattedData.value
  }

  const results = fuse.value.search(searchTest.value)
  return results.map((result) => result.item)
})

const paginatedData = computed(() => {
  const startInd = (pageNumber.value - 1) * elementPerPage.value
  const endInd = pageNumber.value * elementPerPage.value

  return searchData.value.slice(startInd, endInd)
})

function onPreviousPageClick() {
  if (pageNumber.value > 1) pageNumber.value -= 1
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0
  return Math.ceil(ttlContent / elementPerPage.value)
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value) pageNumber.value += 1
}

useHead({
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content:
        'Here you will find a selection of projects, research work, design work, and development work I have published on this site.',
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'Projects',
    description:
      'Here you will find a selection of projects, research work, design work, and development work I have published on this site.',
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />

    <div class="px-4 pb-10">
      <div class="mb-6">
        <input
          v-model="searchTest"
          placeholder="Search"
          type="text"
          class="block w-full bg-[#F1F2F4] dark:bg-[#2E2E2E] dark:placeholder-zinc-500 text-zinc-600 dark:text-zinc-300 rounded-md border-gray-300 dark:border-[#5E5E5E] shadow-sm focus:border-[#996B00] focus:ring focus:ring-[#FFD77A] focus:ring-opacity-50"
        />
      </div>

      <div v-auto-animate class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <template v-for="post in paginatedData" :key="post.title">
          <ArchiveCard
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
        </template>

        <ArchiveCard
          v-if="paginatedData.length <= 0"
          title="No Post Found"
          image="/not-found.jpg"
        />
      </div>

        <div class="flex justify-center items-center space-x-6 mt-8">
          <button
            :disabled="pageNumber <= 1"
            :class="{ 'cursor-not-allowed': pageNumber <= 1 }"
            @click="onPreviousPageClick"
          >
            <Icon
              name="mdi:code-less-than"
              size="30"
              :class="pageNumber > 1
                ? 'text-[#755200] dark:text-[#FFD77A]'
                : 'text-[#996B00]/40 dark:text-[#FFECC7]/60'"
            />
          </button>

          <p class="font-medium text-[#664700] dark:text-[#FFECC7]">
            {{ pageNumber }} / {{ totalPage }}
          </p>

          <button
            :disabled="pageNumber >= totalPage"
            :class="{ 'cursor-not-allowed': pageNumber >= totalPage }"
            @click="onNextPageClick"
          >
            <Icon
              name="mdi:code-greater-than"
              size="30"
              :class="pageNumber < totalPage
                ? 'text-[#755200] dark:text-[#FFD77A]'
                : 'text-[#996B00]/40 dark:text-[#FFECC7]/60'"
            />
          </button>
        </div>
    </div>
  </main>
</template>
