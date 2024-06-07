import { writable } from 'svelte/store';

export const buildsystemstore = writable("");
export const genericstore = writable(""); // name version description readme requires-python. poor naming choice...
export const authorstore = writable("");
export const classifierstore = writable("");
export const dependencystore = writable("");
