<script lang="ts">
  import SettingsIcon from '../assets/settings.svg'
  import CrossIcon from '../assets/cross.svg'
  import SunIcon from '../assets/sun.svg'
  import MoonIcon from '../assets/moon.svg'

  import clickOutside from './utils/clickOutside'
  import { fly } from 'svelte/transition'

  import { theme } from '../stores'

  let menuOpen = false

  const toggleMenu = () => {
    menuOpen = !menuOpen
  }

  const closeMenu = () => {
    menuOpen = false
  }

  let enabled = true
  const toggleEnabled = () => {
    enabled = !enabled
  }
</script>

<div
  class="absolute bottom-0 left-0 right-0 bg-red flex items-center justify-center"
>
  <button
    on:click|stopPropagation={toggleMenu}
    class="text-center bg-transparent border-none"
  >
    <SettingsIcon
      width={24}
      height={21}
      alt="settings"
      class="mx-auto mb-4 opacity-50"
    />
    <div class="opacity-50 mb-33">Settings</div>
  </button>

  {#if menuOpen}
    <div
      class="absolute p-10 bg-[#EAE2DA]/50 dark:bg-[#333540]/50 left-0 right-0 bottom-0 min-h-[40vh] ring-1 rounded-xl backdrop-blur-lg ring-white/30"
      transition:fly={{ y: '100%' }}
      use:clickOutside={closeMenu}
    >
      <div class="flex items-center justify-between mb-20">
        <SettingsIcon
          class="opacity-50 pr-[11px] box-content"
          width={19}
          height={16}
        />
        <div class="opacity-50 text-[17px] font-semibold">Settings</div>
        <button
          on:click={toggleMenu}
          class="block p-5 rounded-full dark:bg-[#2C2C2E] bg-white"
        >
          <CrossIcon class="opacity-50" />
        </button>
      </div>

      <div class="text-center">
        <div class="opacity-50 mb-5">Theme</div>
        <div class="flex gap-x-5 justify-center">
          <button
            class="rounded-full dark:bg-[#565656] bg-black dark:bg-opacity-50 w-25 h-25 flex items-center justify-center p-0 border-0"
            class:text-white={$theme === 'light'}
            class:bg-opacity-50={$theme === 'light'}
            class:bg-opacity-10={$theme !== 'light'}
            class:dark:text-black={$theme === 'light'}
            class:dark:bg-white={$theme === 'light'}
            on:click={() => theme.set('light')}
          >
            <div
              class:opacity-100={$theme === 'light'}
              class:opacity-40={$theme !== 'light'}
            >
              <SunIcon />
            </div>
          </button>
          <button
            class="rounded-full dark:bg-[#565656] bg-black dark:bg-opacity-50 w-25 h-25 flex items-center justify-center p-0 border-0"
            class:text-white={$theme === 'dark'}
            class:bg-opacity-50={$theme === 'dark'}
            class:bg-opacity-10={$theme !== 'dark'}
            class:dark:text-black={$theme === 'dark'}
            class:dark:bg-white={$theme === 'dark'}
            on:click={() => theme.set('dark')}
          >
            <div
              class:opacity-100={$theme === 'dark'}
              class:opacity-40={$theme !== 'dark'}
            >
              <MoonIcon />
            </div>
          </button>
          <button
            class="rounded-full dark:bg-[#565656] bg-black dark:bg-opacity-50 w-25 h-25 flex items-center justify-center p-0 border-0"
            class:text-white={$theme === 'auto'}
            class:bg-opacity-50={$theme === 'auto'}
            class:bg-opacity-10={$theme !== 'auto'}
            class:dark:text-black={$theme === 'auto'}
            class:dark:bg-white={$theme === 'auto'}
            on:click={() => theme.set('auto')}
          >
            <span
              class:opacity-100={$theme === 'auto'}
              class:opacity-40={$theme !== 'auto'}
              class="font-semibold">Auto</span
            >
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
