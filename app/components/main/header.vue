<script setup lang="ts">
import { navbarData } from '../../data'

const colorMode = useColorMode()

function onClick(val: string) {
  colorMode.preference = val
}

const route = useRoute()

function isActive(path: string) {
  return route.path.startsWith(path)
}

const isHomePage = computed(() => route.path === '/')

// start transparent immediately on homepage
const isOverHero = ref(isHomePage.value)

function updateHeaderState() {
  if (!import.meta.client) return

  if (!isHomePage.value) {
    isOverHero.value = false
    return
  }

  const hero = document.getElementById('home-hero')

  if (!hero) {
    isOverHero.value = true
    return
  }

  const heroRect = hero.getBoundingClientRect()

  isOverHero.value = heroRect.bottom > 80
}

onMounted(() => {
  updateHeaderState()

  window.addEventListener('scroll', updateHeaderState, { passive: true })
  window.addEventListener('resize', updateHeaderState)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderState)
  window.removeEventListener('resize', updateHeaderState)
})

watch(
  () => route.path,
  async () => {
    isOverHero.value = route.path === '/'

    await nextTick()
    updateHeaderState()

    window.setTimeout(() => {
      updateHeaderState()
    }, 50)
  }
)
</script>

<template>
  <div
    class="py-5 border-b font-semibold transition-all duration-300 ease-out"
    :class="
      isOverHero
        ? 'bg-transparent border-transparent text-white'
        : 'bg-[#FFD77A] dark:bg-zinc-900 border-[#FFD77A]/60 dark:border-gray-800 text-zinc-950 dark:text-zinc-100 shadow-sm'
    "
  >
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li class="text-base sm:text-2xl font-bold">
          <NuxtLink
            to="/"
            class="transition-colors duration-300"
            :class="{ underline: $route.path === '/' }"
          >
            {{ navbarData.homeTitle }}
          </NuxtLink>
        </li>
      </ul>

      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
        <li>
          <NuxtLink
            to="/blogs"
            class="transition-colors duration-300"
            :class="{ underline: isActive('/blogs') }"
          >
            Projects
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/categories"
            class="transition-colors duration-300"
            :class="{ underline: isActive('/categories') }"
          >
            Categories
          </NuxtLink>
        </li>

        <li title="About Me">
          <NuxtLink
            to="/about"
            aria-label="About me"
            class="transition-colors duration-300"
            :class="{ underline: $route.path === '/about' }"
          >
            About
          </NuxtLink>
        </li>

        <li class="flex items-center">
          <ClientOnly>
            <div class="relative w-5 h-5 flex items-center justify-center">
              <Transition name="icon-fade" mode="out-in">
                <button
                  v-if="colorMode.value === 'light'"
                  key="light-mode"
                  name="light-mode"
                  title="Light"
                  class="absolute inset-0 flex items-center justify-center hover:scale-110 transition-all ease-out hover:cursor-pointer"
                  @click="onClick('dark')"
                >
                  <Icon name="lucide:moon" size="20" />
                </button>

                <button
                  v-else
                  key="dark-mode"
                  name="dark-mode"
                  title="Dark"
                  class="absolute inset-0 flex items-center justify-center hover:scale-110 transition-all ease-out hover:cursor-pointer"
                  @click="onClick('light')"
                >
                  <Icon name="lucide:sun" size="20" />
                </button>
              </Transition>
            </div>

            <template #fallback>
              <Icon name="svg-spinners:180-ring" size="20" class="-translate-y-[-20%]" />
            </template>
          </ClientOnly>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

.icon-fade-enter-to,
.icon-fade-leave-from {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
</style>