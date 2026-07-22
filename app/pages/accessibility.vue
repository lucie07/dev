<script setup lang="ts">
const { data: accessibilityContent } = await useAsyncData(
  'accessibility-content',
  () => queryCollection('content').path('/accessibility').first()
)

useHead({
  title: 'Accessibility Statement',
  meta: [
    {
      name: 'description',
      content:
        'Accessibility statement for the Lucie Mingmei Hao portfolio website.',
    },
  ],
})
</script>

<template>
  <div class="py-5">
    <div class="px-6 py-5 sm:py-9 container max-w-3xl mx-auto">
      <h1 class="text-xl sm:text-4xl pb-8 font-bold">
        Accessibility Statement
      </h1>

      <div class="prose prose-zinc dark:prose-invert max-w-none">
        <ContentRenderer
          v-if="accessibilityContent"
          :value="accessibilityContent"
        />
      </div>
    </div>
  </div>
</template>