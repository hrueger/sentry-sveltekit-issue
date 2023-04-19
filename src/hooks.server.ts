import { dev } from "$app/environment";
import type { HandleServerError } from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_SENTRY_DSN } from "$env/static/public";

if (!dev) {
    Sentry.init({
        dsn: PUBLIC_SENTRY_DSN,
        tracesSampleRate: 1.0,
    });
}

export const handle = Sentry.sentryHandle;

export const handleError = Sentry.handleErrorWithSentry((({ error }) => {
    console.error(error);
    return {
        status: (error as any).status || 500,
        message: (error as any).message || "Ein Fehler ist aufgetreten."
    }
}) satisfies HandleServerError);