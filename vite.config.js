import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        visualizer({ open: true }) // Add visualizer plugin to analyze bundle
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            'public': path.resolve(__dirname, 'public'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            },
        },
    },
    optimizeDeps: {
        exclude: ['js-big-decimal']
    }
});
