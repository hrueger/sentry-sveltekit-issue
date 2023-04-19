import { dev } from "$app/environment";
import type { HandleServerError } from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit';

if (!dev) {
    Sentry.init({
        dsn: '__DSN__',
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