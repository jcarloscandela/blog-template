import { getCollection } from 'astro:content'

export const getCategories = async (lang: string) => {
	const posts = (await getCollection('blog')).filter((post) => post.slug.split('/')[0] === lang)
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}

export const getPosts = async (lang: string, max?: number) => {
	return (await getCollection('blog'))
		.filter((post) => post.slug.split('/')[0] === lang)
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

export const getTags = async (lang: string) => {
	const posts = (await getCollection('blog')).filter((post) => post.slug.split('/')[0] === lang)
	const tags = new Set<string>()
	posts.forEach((post) => {
		post.data.tags.forEach((tag: string) => {
			tags.add(tag.toLowerCase())
		})
	})

	return Array.from(tags)
}

export const getPostByTag = async (lang: string, tag: string) => {
	const posts = await getPosts(lang)
	const lowercaseTag = tag.toLowerCase()
	return posts.filter((post) => {
		return post.data.tags.some((postTag: string) => postTag.toLowerCase() === lowercaseTag)
	})
}

export const filterPostsByCategory = async (lang: string, category: string) => {
	const posts = await getPosts(lang)
	return posts.filter((post) => post.data.category.toLowerCase() === category)
}
