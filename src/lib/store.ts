import { writable } from 'svelte/store';

const store = writable({ hello: 'store' });

export { store };
