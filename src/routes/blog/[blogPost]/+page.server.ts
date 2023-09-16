import type { PageServerLoad } from './$types';
import { marked } from "marked";
import { files } from '$lib';

export const load = (async ({fetch, params}) => {
    if (files.includes(`./posts/${params.blogPost}.md`)) {
        const res = await fetch(`../../src/lib/posts/${params.blogPost}.md`)
        return {"data": marked.parse(await res.text())};
    } else {
        // TODO: Go to 404 Page
        console.log(params.blogPost);
    }
}) satisfies PageServerLoad;
