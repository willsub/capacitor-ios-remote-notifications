import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'dist/esm/index.js',
  output: [
    {
      file: 'dist/plugin.js',
      format: 'iife',
      name: 'capacitorIOsRemoteNotifications',
      globals: {
        '@capacitor/core': 'capacitorExports',
      },
      sourcemap: false,
      inlineDynamicImports: true,
    },
    {
      file: 'dist/plugin.cjs.js',
      format: 'cjs',
      sourcemap: false,
      inlineDynamicImports: true,
    },
  ],
  external: ['@capacitor/core'],
});
