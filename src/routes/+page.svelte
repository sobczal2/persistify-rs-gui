<script lang="ts">
	import PicturifyText from '$lib/components/common/PicturifyText.svelte';
	import { open } from '@tauri-apps/api/dialog';
	import { goto } from '$app/navigation';
	import { routes } from '$lib/routes';

	const onButtonClick = async () => {
		const selected = await open({
			multiple: false,
			filters: [{ name: 'Image', extensions: ['jpg', 'png'] }]
		});

		let filePath: string | null = null;
		if (Array.isArray(selected)) {
			filePath = selected[0];
		} else {
			filePath = selected;
		}

		if (!filePath) {
			return;
		}

		let url = new URL(routes.image, window.location.origin);
		url.searchParams.append('filePath', filePath);
		await goto(url.toString());
	};
</script>

<div class="flex flex-col items-center justify-center h-screen space-y-5">
	<h1 class="text-4xl font-bold text-center">
		Welcome to
		<PicturifyText />
	</h1>
	<button
		type="button"
		class="btn variant-filled text-2xl font-bold"
		on:click={onButtonClick}
	>
		Select image to edit
	</button>
</div>
