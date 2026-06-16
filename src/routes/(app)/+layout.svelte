<script lang="ts">
    import TrackBar from '$lib/TrackBar.svelte';
    import Navbar from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />
<div class="px-8">
    <hr class=" bg-linear-to-r h-[1px] border-0 from-gray-100 to-gray-300">
</div>



{@render children()}

<div class="sticky bottom-0 left-0">
	<TrackBar />
</div>
