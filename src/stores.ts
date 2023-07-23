import { writable } from 'svelte/store'
import { Preferences } from '@capacitor/preferences'

const THEME_KEY = 'theme'

export type Theme = 'light' | 'dark' | 'auto'

export const theme = writable<Theme>('auto')

Preferences.get({ key: THEME_KEY }).then(({ value }) => {
  theme.subscribe((value) => {
    if (value === 'dark' || ((!value || value === 'auto') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    Preferences.set({ key: THEME_KEY, value })
  })

  if (value === 'light' || value === 'dark' || value === 'auto') {
    theme.set(value)
  }
})