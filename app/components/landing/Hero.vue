<template>
  <section id="top" class="relative isolate min-h-dvh overflow-hidden text-white">
    <div class="absolute inset-0 -z-10">
      <img
        class="hero-image h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1723720398978-2087a8337509?auto=format&fit=crop&w=2400&q=80"
        alt="Кампус университета — двор и учебный корпус"
        width="2400"
        height="1600"
      >
      <div class="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/90" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(111,168,184,0.28),transparent_55%)]" />
    </div>

    <div class="mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
      <p class="hero-brand font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        Campus Hub KZ
      </p>
      <h1 class="hero-line mt-5 max-w-2xl font-display text-2xl font-semibold leading-snug text-mist sm:text-3xl md:text-4xl">
        Учебные центры Казахстана — честно, в одном месте
      </h1>
      <p class="hero-copy mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
        Поступление, репутация, топы и живые отзывы — чтобы выбрать кампус осознанно.
      </p>
      <div class="hero-cta mt-8 flex flex-wrap gap-3">
        <a
          href="#centers"
          class="rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Найти центр
        </a>
        <a
          href="#admission"
          class="rounded-md border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/10"
        >
          Как поступить
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-image {
  transform: scale(1.08);
  animation: hero-pan 18s ease-out forwards;
}

.hero-brand,
.hero-line,
.hero-copy,
.hero-cta {
  opacity: 0;
  transform: translateY(1.1rem);
  animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-line {
  animation-delay: 0.12s;
}

.hero-copy {
  animation-delay: 0.22s;
}

.hero-cta {
  animation-delay: 0.34s;
}

@keyframes hero-pan {
  to {
    transform: scale(1);
  }
}

@keyframes hero-rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-image,
  .hero-brand,
  .hero-line,
  .hero-copy,
  .hero-cta {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
