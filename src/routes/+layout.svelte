<script lang="ts">
  import Sidebar from '../lib/Sidebar.svelte';

  import Navbar from '$lib/Navbar.svelte';

  import "../app.postcss";
  import Frank from "$lib/Frank.png";
  import type { LayoutServerData } from "./$types";
  import { page } from "$app/stores";
  export let data:LayoutServerData
console.log();

</script>

<div class="flex flex-row relative">

  <Sidebar data={data}/>

  <div class="grow min-h-screen">
    <Navbar/>
    <div class="p-4">
      <slot/>

    </div>
  </div>

</div>
