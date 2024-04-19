<script>
	import { onMount } from 'svelte';

	var p_w;

	export let width = 350;
	export let height = 300;
	export let color = '#333';
	export let background = '#fff';

	const handleColorChange = () => {
		if (context) {
			context.strokeStyle = color;
		}
	};

	$: handleColorChange(); // Asegurar que se actualice el color cuando cambie

	let canvas;
	let context;
	let isDrawing;
	let start;

	let t, l;

	onMount(() => {
		context = canvas.getContext('2d');
		context.lineWidth = 3;

		handleSize();
	});

	$: if (context) {
		context.strokeStyle = color;
	}

	const handleStart = ({ offsetX: x, offsetY: y }) => {
		if (color === background) {
			context.clearRect(0, 0, width, height);
		} else {
			isDrawing = true;
			start = { x, y };
		}
	};

	const handleEnd = () => {
		isDrawing = false;
	};
	const handleMove = ({ offsetX: x1, offsetY: y1 }) => {
		if (!isDrawing) return;

		const { x, y } = start;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x1, y1);
		context.closePath();
		context.stroke();

		start = { x: x1, y: y1 };
	};

	const handleSize = () => {
		const { top, left } = canvas.getBoundingClientRect();
		t = top;
		l = left;

		p_w = window.innerWidth;

		var plataform = detectPlatform(p_w);
		if (plataform === 'phone_portrait') {
			width = 350;
			height = 300;
		} else if (plataform === 'phone_landscape') {
			width = 400;
			height = 400;
		} else if (plataform === 'tablet_portrait') {
			width = 500;
			height = 400;
		} else if (plataform === 'tablet_landscape') {
			width = 800;
			height = 400;
		} else if (plataform === 'laptop') {
			width = 1000;
			height = 500;
		} else if (plataform === 'desktop') {
			width = 1300;
			height = 500;
		} else if (plataform === 'desktop_big') {
			width = 1450;
			height = 500;
		}
	};
</script>

<svelte:window on:resize={handleSize} />

<canvas
	class="canva-custom"
	{width}
	{height}
	style:background
	bind:this={canvas}
	on:mousedown={handleStart}
	on:touchstart={(e) => {
		const { clientX, clientY } = e.touches[0];
		handleStart({
			offsetX: clientX - l,
			offsetY: clientY - t
		});
	}}
	on:mouseup={handleEnd}
	on:touchend={handleEnd}
	on:mouseleave={handleEnd}
	on:mousemove={handleMove}
	on:touchmove={(e) => {
		const { clientX, clientY } = e.touches[0];
		handleMove({
			offsetX: clientX - l,
			offsetY: clientY - t
		});
	}}
/>

<style>
	:global(.canva-custom) {
		border: 1px solid #ced4da;
		border-radius: 0.375rem;
		touch-action: none;
	}
</style>
