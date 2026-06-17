<script>
  const list = new Array(18);
</script>

<div class="flex flex-col gap-3 p-8">
  {#each list as item}
    <div
      class="px-3 py-2.5 flex items-center gap-4 bg-linear-to-bl from-gray-50 to-gray-100 rounded-lg cursor-pointer shadow-xs hover:shadow transition-all duration-500"
    >
      <div class="w-10 h-10 rounded-lg overflow-hidden"></div>
    </div>
  {/each}
</div>
