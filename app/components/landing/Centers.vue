<script setup lang="ts">
import { campusCenters } from '~/data/landing'

const root = useReveal()
</script>

<template>
  <section id="centers" ref="root" class="reveal border-t border-ink/5 bg-fog py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Учебные центры
      </h2>
      <p class="mt-3 max-w-2xl text-ink-soft md:text-lg">
        Короткий срез кампусов: город, профиль и оценка сообщества.
      </p>

      <ul class="mt-12 divide-y divide-ink/10 border-y border-ink/10">
        <li
          v-for="center in campusCenters"
          :key="center.id"
          class="grid gap-2 py-6 md:grid-cols-[4.5rem_1fr_auto] md:items-baseline md:gap-8"
        >
          <span class="font-display text-2xl font-bold text-teal">
            {{ String(center.rank).padStart(2, '0') }}
          </span>
          <div>
            <p class="font-display text-xl font-bold text-ink md:text-2xl">
              {{ center.name }}
            </p>
            <p class="mt-1 text-ink-soft">
              {{ center.city }} · {{ center.focus }}
            </p>
          </div>
          <p class="text-sm font-semibold text-ink md:text-right">
            {{ center.rating.toFixed(1) }}
            <span class="font-normal text-ink-soft">/ 5.0</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
