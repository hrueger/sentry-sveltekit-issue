import type { PageServerLoad } from "./$types";
import { wrapLoadWithSentry } from "@sentry/sveltekit";

export const load: PageServerLoad = wrapLoadWithSentry(async () => {
    return {
        data: "cool",
    };
});