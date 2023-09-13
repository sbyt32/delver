<script lang="ts">
    import { page } from "$app/stores";
</script>
<svelte:head>
    <title>{$page.params.blogPost} - blog.deer.today</title>
</svelte:head>



<!-- <main class=""> -->
    <div class=" breadcrumbs text-sm">
        <ul>
            <li><a href="/" class="link">Home</a></li>
            <li>Blog</li>
            <li>{$page.params.blogPost}</li>
        </ul>
    </div>
    
    <slot/>
<!-- </main> -->