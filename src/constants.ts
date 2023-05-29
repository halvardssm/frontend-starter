/**
 * The current version of the Zustand persistent store in localStorage,
 * update only when we want to force reset the store for the client
 */
export const STORE_VERSION = 1;

/**
 * localStorage key
 */
export const STORE_NAME = "__ZUSTAND_STORE";

/**
 * Sentry error sample rate, should be 100% of errors
 */
export const SENTRY_SAMPLE_RATE = 1.0;

/**
 * Sentry traces sample rate, should be 0% of traces
 */
export const SENTRY_TRACES_SAMPLE_RATE = 0.01;

/**
 * Sub-path the entrypoint will be served from
 */
export const ROUTE_BASENAME = "/";
