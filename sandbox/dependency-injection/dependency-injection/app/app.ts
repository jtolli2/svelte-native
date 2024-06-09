/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import { svelteNativeNoFrame } from 'svelte-native';
import App from './App.svelte';
import { BTestService } from './services/BTestService';
import { container } from 'tsyringe';

container.register('TestService', { useClass: BTestService });

svelteNativeNoFrame(App, {});
