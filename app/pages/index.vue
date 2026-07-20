<script setup lang="ts">
useSeoMeta({
  title: 'Campus Hub KZ — учебные центры Казахстана',
  description:
    'Информация об учебных центрах, поступление, рейтинги репутации, статистика и отзывы в одном месте.',
  ogTitle: 'Campus Hub KZ',
  ogDescription: 'Учебные центры, поступление, топы и живые рецензии.',
})
</script>

<template>
  <main>
    <LandingHeader />
    <LandingHero />
    <LandingCenters />
    <LandingAdmission />
    <LandingRankings />
    <LandingReviews />
    <LandingFooter />
  </main>
</template>
