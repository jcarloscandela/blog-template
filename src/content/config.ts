import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'
import { languageKeys } from '@/i18n/ui'
import { TAGS } from '@/data/tags'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.enum(TAGS)),
			draft: z.boolean().default(false),
			language: z.enum(languageKeys)
		})
})

export const collections = { blog }
