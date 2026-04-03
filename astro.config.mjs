import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://make-sounds.netlify.app',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});
