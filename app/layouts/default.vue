<script setup lang="ts">
const route = useRoute()

const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <div class="gd-container font-spacegrotesk">
    <header
      class="fixed w-full z-10 transition-colors duration-300 ease-out"
      :class="isHomePage ? 'bg-transparent' : 'bg-[#F1F2F4] dark:bg-slate-950'"
    >
      <MainHeader />
    </header>

    <main>
      <div v-if="!isHomePage" class="p-9" />
      <slot />
    </main>

    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<style scoped>
.gd-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>