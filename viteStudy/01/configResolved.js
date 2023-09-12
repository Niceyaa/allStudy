{"optimizeDeps":{"disabled":"build","esbuildOptions":{"preserveSymlinks":false}},"envPrefix":"VITE_","css":{"modules":{"localsConvention":"dashesOnly","scopeBehaviour":"local","hashPrefix":"hello"},"preprocessorOptions":{"less":{"math":"always","globalVars":{"mainColor":"red"}}},"devSourcemap":true,"postcss":{"plugins":[{"postcssPlugin":"postcss-preset-env","plugins":[{"postcssPlugin":"postcss-custom-media"},{"postcssPlugin":"postcss-image-set-function"},{"postcssPlugin":"postcss-media-minmax","AtRule":{}},{"postcssPlugin":"postcss-media-queries-aspect-ratio-number-values"},{"postcssPlugin":"postcss-nesting"},{"postcssPlugin":"postcss-pseudo-class-any-link"},{"postcssPlugin":"postcss-attribute-case-insensitive"},{"postcssPlugin":"postcss-selector-not"},{"postcssPlugin":"postcss-logical","Declaration":{}},{"postcssPlugin":"postcss-logical-float-and-clear","Declaration":{}},{"postcssPlugin":"postcss-logical-resize","Declaration":{}},{"postcssPlugin":"postcss-logical-viewport-units"},{"postcssPlugin":"postcss-dir-pseudo-class"},{"postcssPlugin":"postcss-initial"},{"postcssPlugin":"postcss-gradients-interpolation-method"},{"postcssPlugin":"postcss-color-mix-function"},{"postcssPlugin":"postcss-relative-color-syntax"},{"postcssPlugin":"postcss-lab-function"},{"postcssPlugin":"postcss-oklab-function"},{"postcssPlugin":"postcss-color-function"},{"postcssPlugin":"postcss-hwb-function"},{"postcssPlugin":"postcss-color-function"},{"postcssPlugin":"postcss-color-rebeccapurple"},{"postcssPlugin":"postcss-color-hex-alpha"},{"postcssPlugin":"postcss-double-position-gradients"},{"postcssPlugin":"postcss-page-break"},{"postcssPlugin":"postcss-font-variant"},{"postcssPlugin":"postcss-is-pseudo-class"},{"postcssPlugin":"postcss-scope-pseudo-class"},{"postcssPlugin":"postcss-gap-properties"},{"postcssPlugin":"postcss-overflow-shorthand"},{"postcssPlugin":"postcss-replace-overflow-wrap","Declaration":{}},{"postcssPlugin":"postcss-place"},{"postcssPlugin":"postcss-system-ui-font"},{"postcssPlugin":"postcss-font-format-keywords"},{"postcssPlugin":"postcss-normalize-display-values"},{"postcssPlugin":"postcss-ic-unit"},{"postcssPlugin":"postcss-opacity-percentage","Declaration":{}},{"postcssPlugin":"postcss-text-decoration-shorthand"},{"postcssPlugin":"postcss-unset-value"},{"postcssPlugin":"postcss-stepped-value-functions"},{"postcssPlugin":"postcss-trigonometric-functions"},{"postcssPlugin":"postcss-exponential-functions"},{"postcssPlugin":"postcss-clamp"},{"postcssPlugin":"postcss-nested-calc"},{"postcssPlugin":"postcss-custom-properties"},{"postcssPlugin":"postcss-cascade-layers"},{"options":{},"postcssPlugin":"autoprefixer"},{"postcssPlugin":"postcss-progressive-custom-properties"},{"postcssPlugin":"postcss-preset-env"}]}]}},"build":{"target":["es2020","edge88","firefox78","chrome87","safari14"],"cssTarget":["es2020","edge88","firefox78","chrome87","safari14"],"outDir":"dist","assetsDir":"assets","assetsInlineLimit":1024000,"cssCodeSplit":true,"sourcemap":false,"rollupOptions":{"output":{"assetFileNames":"[hash].[name].[ext]"}},"minify":"esbuild","terserOptions":{},"write":true,"emptyOutDir":null,"copyPublicDir":true,"manifest":false,"lib":false,"ssr":false,"ssrManifest":false,"ssrEmitAssets":false,"reportCompressedSize":true,"chunkSizeWarningLimit":500,"watch":null,"commonjsOptions":{"include":[{}],"extensions":[".js",".cjs"]},"dynamicImportVarsOptions":{"warnOnError":true,"exclude":[{}]},"modulePreload":{"polyfill":true},"cssMinify":true},"plugins":[{"name":"vite:optimized-deps"},{"name":"vite:watch-package-data"},{"name":"vite:pre-alias"},{"name":"alias"},{"name":"vite:modulepreload-polyfill"},{"name":"vite:resolve"},{"name":"vite:html-inline-proxy"},{"name":"vite:css"},{"name":"vite:esbuild"},{"name":"vite:json"},{"name":"vite:wasm-helper"},{"name":"vite:worker"},{"name":"vite:asset"},{"name":"alias-plugin"},{"name":"html-plugin","transformIndexHtml":{"enforce":"pre"}},{"name":"mock-plugin"},{"name":"read-config-plugin"},{"name":"vite:wasm-fallback"},{"name":"vite:define"},{"name":"vite:css-post"},{"name":"vite:worker-import-meta-url"},{"name":"vite:asset-import-meta-url"},{"name":"vite:dynamic-import-vars"},{"name":"vite:import-glob"},{"name":"vite:client-inject"},{"name":"vite:import-analysis"}],"server":{"preTransformRequests":true,"host":true,"middlewareMode":false,"fs":{"strict":true,"allow":["D:/lcg/allStudy/viteStudy/01"],"deny":[".env",".env.*","*.{crt,pem}"]}},"resolve":{"mainFields":["module","jsnext:main","jsnext"],"browserField":true,"conditions":[],"extensions":[".mjs",".js",".mts",".ts",".jsx",".tsx",".json"],"dedupe":[],"preserveSymlinks":false,"alias":[{"find":"@assets","replacement":"D:\\lcg\\allStudy\\viteStudy\\01\\src\\assets"},{"find":"@components","replacement":"D:\\lcg\\allStudy\\viteStudy\\01\\src\\components"},{"find":"@plugins","replacement":"D:\\lcg\\allStudy\\viteStudy\\01\\src\\plugins"},{"find":{},"replacement":"/@fs/D:/lcg/allStudy/viteStudy/01/node_modules/.pnpm/vite@4.4.7_less@4.2.0/node_modules/vite/dist/client/env.mjs"},{"find":{},"replacement":"/@fs/D:/lcg/allStudy/viteStudy/01/node_modules/.pnpm/vite@4.4.7_less@4.2.0/node_modules/vite/dist/client/client.mjs"}]},"configFile":"D:/lcg/allStudy/viteStudy/01/vite.config.js","configFileDependencies":["D:/lcg/allStudy/viteStudy/01/src/plugins/aliasPlugin.js","D:/lcg/allStudy/viteStudy/01/src/plugins/htmlPlugin.js","D:/lcg/allStudy/viteStudy/01/src/plugins/mockPlugin.js","D:/lcg/allStudy/viteStudy/01/src/plugins/readConfigPlugin.js","D:/lcg/allStudy/viteStudy/01/vite.base.config.js","D:/lcg/allStudy/viteStudy/01/vite.dev.config.js","D:/lcg/allStudy/viteStudy/01/vite.prod.config.js","D:/lcg/allStudy/viteStudy/01/vite.config.js"],"inlineConfig":{"optimizeDeps":{},"server":{"host":true}},"root":"D:/lcg/allStudy/viteStudy/01","base":"/","rawBase":"/","publicDir":"D:\\lcg\\allStudy\\viteStudy\\01\\public","cacheDir":"D:/lcg/allStudy/viteStudy/01/node_modules/.vite","command":"serve","mode":"development","ssr":{"format":"esm","target":"node","optimizeDeps":{"disabled":true,"esbuildOptions":{"preserveSymlinks":false}}},"isWorker":false,"mainConfig":null,"isProduction":false,"esbuild":{"jsxDev":true},"preview":{"host":true},"envDir":"D:/lcg/allStudy/viteStudy/01","env":{"BASE_URL":"/","MODE":"development","DEV":true,"PROD":false},"logger":{"hasWarned":false},"packageCache":{},"worker":{"format":"iife","plugins":[{"name":"vite:optimized-deps"},{"name":"vite:watch-package-data"},{"name":"vite:pre-alias"},{"name":"alias"},{"name":"vite:modulepreload-polyfill"},{"name":"vite:resolve"},{"name":"vite:html-inline-proxy"},{"name":"vite:css"},{"name":"vite:esbuild"},{"name":"vite:json"},{"name":"vite:wasm-helper"},{"name":"vite:worker"},{"name":"vite:asset"},{"name":"vite:wasm-fallback"},{"name":"vite:define"},{"name":"vite:css-post"},{"name":"vite:worker-import-meta-url"},{"name":"vite:asset-import-meta-url"},{"name":"vite:dynamic-import-vars"},{"name":"vite:import-glob"},{"name":"vite:client-inject"},{"name":"vite:import-analysis"}],"rollupOptions":{}},"appType":"spa","experimental":{"importGlobRestoreExtension":false,"hmrPartialAccept":false}}