<script lang="ts">
    import type { PageServerData } from "./$types";
    export let data:PageServerData
    
</script>

<div class="prose container mx-auto">
    {@html data.data}
</div>