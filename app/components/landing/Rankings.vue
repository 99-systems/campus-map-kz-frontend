<script setup lang="ts">
import { campusCenters, hubStats } from '~/data/landing'

const root = useReveal()
const topThree = campusCenters.slice(0, 3)
</script>

<template>
  <section id="rankings" ref="root" class="reveal bg-mist/60 py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Репутация и статистика
      </h2>
      <p class="mt-3 max-w-2xl text-ink-soft md:text-lg">
        Топ по отзывам сообщества и цифры, которые помогают сравнить ориентиры.
      </p>

      <div class="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            Топ репутации
          </h3>
          <ol class="mt-6 space-y-5">
            <li
              v-for="(item, index) in topThree"
              :key="item.id"
              class="flex items-start gap-4 border-b border-ink/10 pb-5 last:border-0"
            >
              <span class="font-display text-3xl font-extrabold text-ink/20">
                {{ index + 1 }}
              </span>
              <div>
                <p class="font-display text-xl font-bold text-ink">
                  {{ item.name }}
                </p>
                <p class="mt-1 text-ink-soft">
                  {{ item.city }} · оценка {{ item.rating.toFixed(1) }}
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            По платформе
          </h3>
          <dl class="mt-6 grid grid-cols-2 gap-x-6 gap-y-8">
            <div v-for="stat in hubStats" :key="stat.label">
              <dt class="font-display text-3xl font-extrabold text-ink md:text-4xl">
                {{ stat.value }}
              </dt>
              <dd class="mt-1 text-sm text-ink-soft md:text-base">
                {{ stat.label }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
