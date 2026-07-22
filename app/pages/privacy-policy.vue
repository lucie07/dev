<script setup lang="ts">
const { data: privacyContent } = await useAsyncData(
  'privacy-policy-content',
  () => queryCollection('content').path('/privacy-policy').first()
)

useHead({
  title: 'Privacy Policy',
  meta: [
    {
      name: 'description',
      content:
        'Privacy information for Lucie Mingmei Hao website.',
    },
  ],
})
</script>

<template>
  <div class="py-5">
    <div class="px-6 py-5 sm:py-9 container max-w-3xl mx-auto">
      <h1 class="text-xl sm:text-4xl pb-8 font-bold">
        Privacy Policy
      </h1>

      <div class="prose prose-zinc dark:prose-invert max-w-none">
        <ContentRenderer
          v-if="privacyContent"
          :value="privacyContent"
        />
      </div>
    </div>
  </div>
</template>