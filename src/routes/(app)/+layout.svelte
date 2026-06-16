<script lang="ts">
    import Songbar from '$lib/Songbar.svelte';
    import Navbar from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children()}

<div class="sticky bottom-0 left-0">
	<Songbar />
</div>
