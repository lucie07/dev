<script setup lang="ts">
import { themePage } from '~/data'
</script>

<template>
  <section class="container mx-auto mb-6">
    <div class="px-6 py-8 md:py-12">
      <div class="w-full">
        <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl mb-5">
          {{ themePage.title }}
        </h1>

        <p class="text-zinc-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
          {{ themePage.description }}
        </p>
      </div>
    </div>
  </section>
</template>
