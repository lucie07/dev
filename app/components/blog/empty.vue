<template>
  <article
    class="group aspect-square border dark:border-[#5E5E5E] m-2 rounded-2xl overflow-hidden shadow-lg text-zinc-700"
  >
    <NuxtLink to="/" class="flex h-full flex-col justify-end">
      <div class="p-5">
        <h2
          class="text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-[#664700] dark:group-hover:text-[#FFECC7]"
        >
          No Post Available
        </h2>

        <div
          class="flex items-center pt-2 text-[#664700] dark:text-[#FFECC7] underline decoration-[#FFD77A] decoration-2 underline-offset-4 group-hover:decoration-[3px]"
        >
          <p>Back To Home</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
