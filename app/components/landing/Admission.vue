<script setup lang="ts">
import { admissionSteps } from '~/data/landing'

const root = useReveal()
</script>

<template>
  <section id="admission" ref="root" class="reveal relative overflow-hidden bg-ink py-20 text-fog md:py-28">
    <div class="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
    <div class="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-teal/25 blur-3xl" />

    <div class="relative mx-auto max-w-6xl px-5 md:px-8">
      <h2 class="font-display text-3xl font-bold tracking-tight md:text-4xl">
        Поступление
      </h2>
      <p class="mt-3 max-w-2xl text-mist/80 md:text-lg">
        Четыре шага от выбора программы до зачисления — без лишнего шума.
      </p>

      <ol class="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(step, index) in admissionSteps" :key="step.title">
          <span class="font-display text-4xl font-extrabold text-gold/90">
            {{ index + 1 }}
          </span>
          <h3 class="mt-3 font-display text-xl font-bold">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-mist/75 md:text-base">
            {{ step.text }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
