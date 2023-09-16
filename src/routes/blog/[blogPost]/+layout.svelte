<script lang="ts">
    import { page } from "$app/stores";
</script>
<svelte:head>
    <title>{$page.params.blogPost} - blog.deer.today</title>
</svelte:head>


<div class="px-4 breadcrumbs text-sm">
    <ul>
        <li><a href="/" class="link">Home</a></li>
        <li><a href="/blog" class="link">Blog</a></li>
        <li>{$page.params.blogPost}</li>
    </ul>
</div>

<main class="">
    <slot/>
</main>