export const showDefaultLang = true

export const languageKeys = ['en', 'es'] as const

export const languages = {
	en: 'English',
	es: 'Español'
} as const

export const defaultLang = 'en'

export const ui = {
	en: {
		'header.home': 'Home',
		'header.showMenu': 'Show menu',
		'blog.latestPosts': 'Latest Posts',
		'blog.readPost': 'Read post',
		'blog.viewAll': 'View all',
		'blog.relatedPosts': 'Related Posts',
		'footer.reserved': 'All rights reserved.',
		'Category 1': 'Category 1',
		'Category 2': 'Category 2',
		'Category 3': 'Category 3',
		'Category 4': 'Category 4',
		'Category 5': 'Category 5'
	},
	es: {
		'header.home': 'Inicio',
		'header.showMenu': 'Mostrar menú',
		'blog.latestPosts': 'Últimos artículos',
		'blog.readPost': 'Leer artículo',
		'blog.viewAll': 'Ver todo',
		'blog.relatedPosts': 'Artículos relacionados',
		'footer.reserved': 'Todos los derechos reservados.',
		'Category 1': 'Categoría 1',
		'Category 2': 'Categoría 2',
		'Category 3': 'Categoría 3',
		'Category 4': 'Categoría 4',
		'Category 5': 'Categoría 5'
	}
} as const
