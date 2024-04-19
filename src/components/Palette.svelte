<script>
	import Button, { Label, Icon } from '@smui/button';
	import { createEventDispatcher } from 'svelte';
	import ColorPicker from './ColorPicker.svelte';

	const dispatch = createEventDispatcher();
	export let color;

	let currentColor;
	let background = '#fff';

	const handleColorSelected = (event) => {
		currentColor = event.detail.color;
		dispatch('color', { color: currentColor });
	};
</script>

<section class="p-4">
	<div>
		<ColorPicker on:colorSelected={handleColorSelected} />
	</div>

	<button
		class="btn-palett"
		on:click={() => {
			dispatch('color', { color: background });
			currentColor = background;
		}}
		style:background
	/>

	<svg style:color={currentColor} class="palett-icon-clear" viewBox="-50 -50 100 100">
		<g fill={currentColor} stroke="#000" stroke-width="8" stroke-linecap="round">
			<path d="M -38 12 a 38 38 0 0 0 76 0 q 0 -28 -38 -62 -38 34 -38 62" />
		</g>
	</svg>

	<Button
		variant="raised"
		on:click={() => {
			DownloadCanvasAsImage('canva-custom');
		}}
	>
		<Icon class="material-icons">download</Icon>
		<Label>Descargar</Label>
	</Button>
</section>

<style>
	:global(.palett-icon-clear) {
		overflow: visible !important;
	}
	section {
		--size: 2rem;	
		display: flex;
		align-items: center;
		gap: 0 1rem;
	}

	section > div {
		flex-grow: 1;
	}

	section > svg {
		flex-shrink: 0;
	}

	div {
		display: flex;
		gap: 0 0.5rem;
		align-items: center;
		overflow-x: auto;
	}

	div::-webkit-scrollbar {
		height: 0.25rem;
	}

	div::-webkit-scrollbar-track {
		background: hsl(0, 0%, 100%);
	}

	div::-webkit-scrollbar-thumb {
		background: currentColor;
	}

	div button {
		flex-shrink: 0;
	}

	button,
	section > svg {
		width: var(--size);
		height: var(--size);
	}

	:global(.btn-palett) {
		cursor: pointer;
		border-radius: 50%;
		margin: 0;
	}

	section > svg {
		display: block;
	}
</style>
