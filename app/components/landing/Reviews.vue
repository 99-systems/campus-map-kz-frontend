<script setup lang="ts">
import { reviews } from '~/data/landing'

const root = useReveal()
</script>

<template>
  <section id="reviews" ref="root" class="reveal bg-fog py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Комментарии и рецензии
      </h2>
      <p class="mt-3 max-w-2xl text-ink-soft md:text-lg">
        Голоса абитуриентов, студентов и родителей — без рекламного глянца.
      </p>

      <div class="mt-12 space-y-10 md:space-y-12">
        <blockquote
          v-for="review in reviews"
          :key="review.id"
          class="max-w-3xl border-l-2 border-gold pl-5 md:pl-8"
        >
          <p class="font-display text-xl leading-snug text-ink md:text-2xl">
            «{{ review.text }}»
          </p>
          <footer class="mt-4 text-sm text-ink-soft">
            <span class="font-semibold text-ink">{{ review.author }}</span>
            · {{ review.role }} · {{ review.campus }}
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>
