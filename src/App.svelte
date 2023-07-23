<script lang="ts">
  import { Haptics, ImpactStyle } from '@capacitor/haptics'
  import Footer from './lib/Footer.svelte'

  const handleClick = async () => {
    await Haptics.impact({
      style: ImpactStyle.Medium,
    })
  }
</script>

<main
  class="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
>
  <div
    class="p-1px bg-gradient-to-b from-white to-[#DFD0BA] rounded-full dark:bg-none"
  >
    <button
      class="block bg-[#F5EEE6] dark:bg-[#151722] w-[250px] h-[250px] rounded-full"
      on:click={handleClick}
    />
  </div>
  <Footer />
</main>
