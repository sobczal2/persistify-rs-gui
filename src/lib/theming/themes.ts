import { get, writable } from 'svelte/store';

export type Theme = {
	primary: string;
	secondary: string;
	background: string;
	surface: string;
	error: string;
	onPrimary: string;
	onSecondary: string;
	onBackground: string;
	onSurface: string;
	onError: string;
}

export const themeToCss = (theme: Theme) => {
	return `
		--primary: ${theme.primary};
		--secondary: ${theme.secondary};
		--background: ${theme.background};
		--surface: ${theme.surface};
		--error: ${theme.error};
		--on-primary: ${theme.onPrimary};
		--on-secondary: ${theme.onSecondary};
		--on-background: ${theme.onBackground};
		--on-surface: ${theme.onSurface};
		--on-error: ${theme.onError};
	`;
}

export const lightTheme: Theme = {
	primary: '#ff4081', // Vibrant pink
	secondary: '#536dfe', // Vibrant blue
	background: '#ffffff', // White
	surface: '#f5f5f5', // Light grey
	error: '#f44336', // Vibrant red
	onPrimary: '#ffffff', // White
	onSecondary: '#ffffff', // White
	onBackground: '#000000', // Black
	onSurface: '#000000', // Black
	onError: '#ffffff', // White
};

export const darkTheme: Theme = {
	primary: '#ff4081', // Vibrant pink
	secondary: '#536dfe', // Vibrant blue
	background: '#121212', // Almost black
	surface: '#1e1e1e', // Dark grey
	error: '#f44336', // Vibrant red
	onPrimary: '#000000', // Black
	onSecondary: '#000000', // Black
	onBackground: '#ffffff', // White
	onSurface: '#ffffff', // White
	onError: '#000000', // Black
};

export const theme = writable<Theme>(lightTheme);

export const refreshCSS = () => {
	document.documentElement.style.cssText = themeToCss(get(theme));
}

export const toggleTheme = () => {
	theme.update(t => t === lightTheme ? darkTheme : lightTheme);
}