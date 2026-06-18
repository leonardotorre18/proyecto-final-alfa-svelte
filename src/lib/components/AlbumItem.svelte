<script>
  const { album } = $props()

</script>
<a href={'/albums/' + album.id}>
  <div class=" basis-40">
    <div class="border border-gray-400 bg-gray-50 shadow h-40">
      <img
          src={album.thumbnail}
          class="w-full h-full object-cover"
          alt=""
        />
    </div>
    <div class="py-1">
      <p class="font-semibold leading-tight">{album.title}</p>
      <p class="text-sm font-light text-gray-400">{album.artist.name}</p>
    </div>
  </div>
</a>