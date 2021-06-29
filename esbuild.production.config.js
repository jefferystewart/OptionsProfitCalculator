require('esbuild').buildSync({
  entryPoints: ['src/index.js'],
  bundle: true,
  loader: {
    '.js': 'jsx',
    '.png': 'dataurl',
    '.svg': 'dataurl',
  },
  inject: ['./react-shim.js'],
  minify: true,
  sourcemap: true,
  target: ['es2020'],
  splitting: true,
  outdir: 'public',
  format: 'esm',
})
