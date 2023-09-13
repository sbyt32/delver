import type { LayoutServerLoad } from './$types';
import { files } from '$lib';

export const load = (async () => {
    let pageName:string[] = []
    files.forEach(e => {
        pageName.push(e.replace("./posts/", "").replace(".md", ""))
    });
    return {"pageNames": pageName};
}) satisfies LayoutServerLoad;