export const fetch = (typeof window === 'undefined' ? require('node-fetch') : window.fetch) as typeof window.fetch
