export function useReveal() {
  const el = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const node = el.value
    if (!node) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add('is-visible')
          observer?.unobserve(node)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return el
}
