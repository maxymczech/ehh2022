import esbuildServe from 'esbuild-serve';
import envFilePlugin from 'esbuild-envfile-plugin';

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
    plugins: [envFilePlugin]
  },
  {
    onRequest: () => {
      console.log('request');
    },
    port: 7000,
    root: './public/'
  }
);
