const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
    entryPoints: ['globals.js'],
    bundle: true,
    outdir: '../pomodoro-timer/styles',
    plugins: [sassPlugin()],
    watch: true,
}).catch((e) => console.error(e.message))