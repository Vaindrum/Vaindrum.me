import * as Sentry from "@sentry/nextjs";
import { browserProfilingIntegration } from "@sentry/nextjs";
import { replayIntegration, feedbackIntegration } from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
  debug: false,
  integrations: [
    browserProfilingIntegration(),
    replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
    feedbackIntegration({
      colorScheme: "system",
      showBranding: false,
      showName: true,
      showEmail: true,
      showScreenshot: true,
      zIndex: 60,
      position: "bottom-right",
    }),
  ],
});