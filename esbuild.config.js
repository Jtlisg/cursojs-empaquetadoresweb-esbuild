import esbuildSereve from 'esbuild-serve';

esbuildSereve({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/bundle.js',
    define: {
        'process.env.NODE_ENV': '"development"',
        'process.env.DEBUG': 'false'
    }
},

{
    port: 3005,
    root: '.'
}

)