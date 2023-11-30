import { defineStore } from "pinia";
import { useColorMode, useDark } from '@vueuse/core'
import { nextTick } from "vue";

export const useColorModeStore = defineStore('app-color-mode', () => {
  const colorMode = useColorMode()
  const isDark = useDark()

  // @ts-expect-error: Transition API
  const isAppearanceTransition = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function toggleDark(event?: MouseEvent) {
    if (!isAppearanceTransition || !event) {
      isDark.value = !isDark.value
      return
    }
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
  }

  return {
    themeColorMode: colorMode,
    toggleDark
  }
})
