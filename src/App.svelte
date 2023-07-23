<script lang="ts">
  import { Haptics, ImpactStyle } from "@capacitor/haptics";

  const handleClick = async () => {
    await Haptics.impact({
      style: ImpactStyle.Medium,
    });
  };
</script>

<main>
  <div
    class="p-[1px] bg-gradient-to-b from-white to-[#DFD0BA] rounded-full dark:bg-none"
  >
    <button
      class="bg-[#F5EEE6] dark:bg-[#151722] w-[250px] h-[250px] rounded-full border-0"
      on:click={handleClick}
    />
  </div>
</main>
