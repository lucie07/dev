<script setup lang="ts">
const route = useRoute()

const theme = computed(() => {
  const name = route.params.theme || ''
  let strName = ''

  if (Array.isArray(name)) strName = name.at(0) || ''
  else strName = name

  return strName
})
</script>

<template>
  <div class="container mx-auto">
    <div class="p-6 my-4 mx-2 rounded-md bg-gray-200 dark:bg-[#2E2E2E]">
      <h1 class="text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl">
        #{{ theme }}
      </h1>
    </div>
  </div>
</template>