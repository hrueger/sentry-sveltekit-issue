# Sentry Sveltekit Docker Issue

## Setup
1. Create a `.env` file with the following content:
```
PUBLIC_SENTRY_DSN=YOUR_DSN
```
1. Run `yarn`
1. Run `yarn build`
1. Run `docker build -t sveltekitsentryissue .`
1. Run `docker run --rm -p 3000:3000 sveltekitsentryissue`