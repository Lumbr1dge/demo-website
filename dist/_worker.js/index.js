globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DpvGOmuK.mjs';
import { manifest } from './manifest_CF4hGtjG.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/design-theme.astro.mjs');
const _page4 = () => import('./pages/gallery.astro.mjs');
const _page5 = () => import('./pages/services.astro.mjs');
const _page6 = () => import('./pages/testimonials.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/design-theme.astro", _page3],
    ["src/pages/gallery.astro", _page4],
    ["src/pages/services.astro", _page5],
    ["src/pages/testimonials.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
