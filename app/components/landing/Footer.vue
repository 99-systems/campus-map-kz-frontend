<script setup lang="ts">
const root = useReveal()
</script>

<template>
  <footer ref="root" class="reveal border-t border-white/10 bg-ink py-16 text-fog md:py-20">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
      <div>
        <p class="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Campus Hub KZ
        </p>
        <p class="mt-3 max-w-md text-mist/75">
          Карта учебных центров, поступление и честная репутация — для тех, кто выбирает будущее в Казахстане.
        </p>
      </div>
      <a
        href="#centers"
        class="inline-flex w-fit rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-105"
      >
        Перейти к центрам
      </a>
    </div>
    <p class="mx-auto mt-12 max-w-6xl px-5 text-xs text-white/40 md:px-8">
      © {{ new Date().getFullYear() }} Campus Hub KZ. Демо-лендинг.
    </p>
  </footer>
</template>
