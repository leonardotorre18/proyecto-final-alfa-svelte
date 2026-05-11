<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import Songbar from '$lib/Songbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<div class="sticky bottom-0 left-0">
	<Songbar />
</div>
