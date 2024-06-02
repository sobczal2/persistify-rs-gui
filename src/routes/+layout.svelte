<script lang="ts">
	import { refreshCSS, theme, toggleTheme } from '$lib/theming/themes';
	import { onDestroy, onMount } from 'svelte';

	const unsubscribe = theme.subscribe(() => {
		refreshCSS();
	});

	onMount(() => {
		refreshCSS();
	});
	
	onDestroy(() => {
		unsubscribe();
	});

</script>

<button on:click={() => toggleTheme()}>light/dark</button>
<slot />

<style lang="scss">
  :global(body) {
    margin: 0;
    font-family: 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
  }
</style>
