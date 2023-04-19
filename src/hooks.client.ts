import { dev } from "$app/environment";
import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_SENTRY_DSN } from "$env/static/public";

if (!dev) {
    Sentry.init({
        dsn: PUBLIC_SENTRY_DSN,
        tracesSampleRate: 1.0,
    });
}

export const handle = Sentry.sentryHandle;

export const handleError = Sentry.handleErrorWithSentry();