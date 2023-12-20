import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bramleisink.github.io',
	base: '/rooster-documentation',
	integrations: [
		starlight({
			title: 'Rooster 🐓',
			social: {
				github: 'https://github.com/BramLeisink/rooster-documentation',
			},
			sidebar: [
				{
					label: 'Plan',
					autogenerate: { directory: 'plan' },
				},
				{
					label: 'Documentatie',
					autogenerate: { directory: 'documentatie' },
				},
				{
					label: 'Functies',
					autogenerate: { directory: 'functies'}
				},
				{
					label: 'Extensies',
					autogenerate: { directory: 'extensies'}
				}
			],
		}),
	],
});
