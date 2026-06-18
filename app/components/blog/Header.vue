<script setup lang="ts">
interface Props {
  title?: string
  image?: string
  alt?: string
  description?: string
  date?: string
  tags?: Array<string>
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  image: '#',
  alt: 'no-img',
  description: 'no description',
  date: 'no-date',
  tags: () => [],
})

const slugify = (value: string) =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/&/g, 'and')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
</script>

<template>
  <header>
    <h1 class="mt-8 mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-left leading-tight text-zinc-900 dark:text-zinc-300">
      {{ title || '' }}
    </h1>
<!--
    <NuxtImg
      :src="image || ''"
      :alt="alt || ''"
      width="600"
      class="m-auto rounded-none shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"
    />

    <p class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
      {{ description }}
    </p>
-->
    <div class="flex w-full justify-start text-xs md:text-base my-2">
      <div class="md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm">
        <div class="flex items-center font-semibold">
          <LogoDate />
          <p>{{ date || '' }}</p>
        </div>

        <div class="flex items-center gap-x-2 gap-y-4 flex-wrap my-5">
          <LogoTag />

          <template v-for="tag in tags" :key="tag">
            <NuxtLink :to="`/categories/${slugify(tag)}`">
              <span
                class="bg-[#FFECC7] text-[#664700] dark:bg-[#996B00] dark:text-[#FFF4D6] rounded-md px-2 py-1 font-semibold hover:bg-[#FFE0A3] dark:hover:bg-[#664700] transition-colors duration-200"
              >
                {{ tag }}
              </span>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>
