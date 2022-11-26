import envFilePlugin from 'esbuild-envfile-plugin';
import esbuildServe from 'esbuild-serve';
import {sassPlugin} from 'esbuild-sass-plugin'

esbuildServe(
  {
    bundle: true,
    define: {
      'process.env.NODE_ENV': '"development"'
    },
    entryPoints: ['src/App.jsx'],
    loader: {
      '.jpeg': 'file',
      '.jpg': 'file',
      '.png': 'file',
      '.svg': 'file'
    },
    outfile: 'public/main.js',
    plugins: [
      envFilePlugin,
      sassPlugin()
    ]
  },
  {
    fallback: 'index.html',
    port: 7000,
    root: './public/'
  }
);
