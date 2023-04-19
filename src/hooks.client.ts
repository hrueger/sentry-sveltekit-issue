import { dev } from "$app/environment";
import * as Sentry from '@sentry/sveltekit';

if (!dev) {
    Sentry.init({
        dsn: '__DSN__',
        tracesSampleRate: 1.0,
    });
}

export const handle = Sentry.sentryHandle;

export const handleError = Sentry.handleErrorWithSentry();