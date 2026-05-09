<script setup lang="ts">
interface Props {
  title?: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'No title available',
  count: 0,
})

const slugify = (value: string) =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

const categoryPath = computed(() => `/categories/${slugify(props.title)}`)
</script>

<template>
  <NuxtLink
    :to="categoryPath"
    class="block text-white bg-[#996B00] hover:bg-[#664700] px-5 py-3 rounded hover:underline hover:scale-[1.05] transition-all duration-500 text-lg font-extrabold"
  >
    <span>#{{ title }}({{ count }})</span>
  </NuxtLink>
</template>