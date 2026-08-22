<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>

<template>
  <footer class="mt-10">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="border-t-2 border-[#FFD77A]/60 dark:border-[#FFD77A]">
        <div
          class="py-9 md:py-10 flex flex-col items-center justify-center text-center gap-2 text-base font-medium text-zinc-700 dark:text-zinc-300"
        >
          <p>
            © 2026 Lucie Mingmei Hao |
            Licensed under
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              class="underline hover:no-underline"
            >
              CC BY 4.0
            </a>
          </p>

          <p>
            <NuxtLink
              to="/accessibility"
              class="underline hover:no-underline"
            >
              Accessibility Statement
            </NuxtLink>

            <span class="mx-2">|</span>

            <NuxtLink
              to="/privacy-policy"
              class="underline hover:no-underline"
            >
              Privacy Policy
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
