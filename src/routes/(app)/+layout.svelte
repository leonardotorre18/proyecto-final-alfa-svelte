<script lang="ts">
    import TrackBar from "$lib/components/TrackBar.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

    let { children } = $props();
</script>

<div class="flex flex-col h-screen">
    <div>
        <Navbar />
        <div>
            <hr/>
        </div>
    </div>
    <main class="flex flex-col overflow-y-auto flex-1">
        {@render children()}
    </main>
    <div class="sticky bottom-0 left-0">
        <TrackBar />
    </div>
</div>
