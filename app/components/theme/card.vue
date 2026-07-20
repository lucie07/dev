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
    .replace(/[’']/g, '')
    .replace(/&/g, 'and')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')

const themePath = computed(() => `/themes/${slugify(props.title)}`)
</script>

<template>
  <NuxtLink
    :to="themePath"
    class="block text-white bg-[#996B00] hover:bg-[#664700] px-5 py-3 rounded hover:underline hover:scale-[1.05] transition-all duration-500 text-lg font-extrabold"
  >
    <span>#{{ title }}({{ count }})</span>
  </NuxtLink>
</template>