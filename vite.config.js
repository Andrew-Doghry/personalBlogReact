import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// export default defineConfig({
// /plugins: [react()],
// })
// import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/personalBlogReact/',
}); 