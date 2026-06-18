<script lang="ts">
    import TrackBar from "$lib/components/TrackBar.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

    let { children } = $props();
</script>

<div class="flex flex-col h-screen">
    <div>
        <Navbar />
        <div>
            <hr
                class=" bg-linear-to-r h-[1px] border-0 from-gray-100 to-gray-300"
            />
        </div>
    </div>
    <div class=" overflow-y-auto flex-1">
        {@render children()}
    </div>
    <div class="sticky bottom-0 left-0">
        <TrackBar />
    </div>
</div>
