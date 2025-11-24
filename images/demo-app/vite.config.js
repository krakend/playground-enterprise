import { resolve } from 'path'

export default {
    base: './',
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../dist',
        assetsDir: 'assets'
    },
    server: {
        port: 3000,
    }
}
