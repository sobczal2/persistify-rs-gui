export function load({ params, url }) {
	return {
		filePath: url.searchParams.get('filePath'),
	}
}