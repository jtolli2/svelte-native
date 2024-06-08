import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.dependencyinjection',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;