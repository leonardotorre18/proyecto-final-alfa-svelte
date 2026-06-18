<script>
  const albums = new Array(8);
</script>

<div class="flex flex-wrap p-8 gap-4">
  {#each albums as album}
    <div class=" basis-40">
      <div class="border border-gray-100 shadow-xs h-40 bg-gray-50">
      </div>
      <div class="py-1">
        <p class="font-semibold leading-tight invisible">Título</p>
        <p class="text-sm font-light text-gray-400 invisible">Artista</p>
      </div>
    </div>
  {/each}
</div>
