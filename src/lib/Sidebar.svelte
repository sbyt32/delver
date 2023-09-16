<script lang="ts">
  import { page } from "$app/stores";
  import "../app.postcss";
  import Frank from "$lib/Frank.png";
  import type { LayoutServerData } from "../routes/$types";
  export let data:LayoutServerData

  interface blogData {
    pageNames: string[]
  } 
  let displayTab = false
</script>

<!-- TODO: Have the sidebar pull out, maybe? -->
{#if !displayTab}
<div class="{displayTab ? 'w-[8%]' : 'w-[3%]'} bg-neutral pt-2 bg-cover" >
  <div class="{displayTab ? 'p-4' : 'px-1'} my-2 avatar">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img src="{Frank}" alt="" class="rounded-md cursor-pointer" on:click={() => displayTab = !displayTab}>
  </div>
</div>

{:else}
<div class="w-[8%] bg-neutral pt-2 bg-cover absolute min-h-screen z-20">
  <div class="">
    <div class="p-4 my-2 avatar">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img src="{Frank}" alt="" class="rounded-md cursor-pointer" on:click={() => displayTab = !displayTab}>
    </div>
  
      <div class="menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li class="menu-title">Posts</li>
          {#each data.pageNames as file}
            <li>
              <a href="/blog/{file}" 
                class="{file == $page.params.blogPost ? 'text-primary-content' : 'text-neutral-content'}">
                {file}
              </a>
            </li>
          {/each}
        </ul>  
      </div>      
  
  </div>

</div>

{/if}



