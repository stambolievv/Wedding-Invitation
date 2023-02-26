import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import viteBanner from 'vite-plugin-banner';
import { createHtmlPlugin } from 'vite-plugin-html';
import pkg from './package.json';

const banner = `
/**
 * @name ${pkg.name}
 * @description ${pkg.description}
 *
 * @version ${pkg.version}
 * @author ${pkg.author}
 * @license ${pkg.license}
 */
`.trim();
const root = '.'; /* Project root directory (where index.html is located). */
const outputFolder = 'dist'; /* Specify the output directory (relative to project root). */
const assetFolder = 'assets'; /* Specify the assets folder */
const main = pkg.main || 'index.html'; /* Which file watcher to open. */
const pluginSettings = {
  viteStaticCopy: { targets: [{ src: `${assetFolder}/static`, dest: assetFolder }] },
  viteBanner: { outDir: outputFolder, content: banner },
  createHtmlPlugin: { minify: true, filename: `${main}` },
};

export default defineConfig({
  root,
  server: {
    // Development
    cors: true,
    open: true,
    host: true
  },
  build: {
    // Production
    outDir: outputFolder,
    assetsDir: assetFolder,
    assetsInlineLimit: 0,
    target: 'modules',
    open: `${outputFolder}/${main}`,
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
    manifest: false,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        dir: outputFolder,
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name)) return `${assetFolder}/styles/[name][extname]`;
          if (/\.(woff2?|ttf|otf)$/.test(name)) return `${assetFolder}/fonts/[name][extname]`;
          if (/\\favicon\\/.test(name)) return `${assetFolder}/static/images/favicon/[name][extname]`;
          if (/\.(png|jpe?g|svg)$/.test(name)) return `${assetFolder}/static/images/[name][extname]`;
          return '[name][extname]';
        }
      }
    }
  },
  plugins: [
    viteStaticCopy(pluginSettings.viteStaticCopy),
    viteBanner(pluginSettings.viteBanner),
    createHtmlPlugin(pluginSettings.createHtmlPlugin),
  ],
});