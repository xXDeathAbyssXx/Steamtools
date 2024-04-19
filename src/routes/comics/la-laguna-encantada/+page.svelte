<script>
	import { onMount } from 'svelte';

	let PdfViewer;

	const addContentToLine = () => {
		const lineDiv = document.querySelector('.line.svelte-19h83wp');

		if (lineDiv) {
			const newDiv = document.createElement('div');
			newDiv.innerHTML = `
<div class="activator svelte-10lk5cm">
	<div>
		<a href="/comics">
			<span slot="activator" class="button-control null svelte-19h83wp">
				<svg class="icon svelte-19h83wp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M22,5.724V2c0-.552-.447-1-1-1s-1,.448-1,1v2.366L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.203,5.579c-1.379,.931-2.203,2.48-2.203,4.145v9.276c0,2.757,2.243,5,5,5h2c.553,0,1-.448,1-1V14c0-.551,.448-1,1-1h6c.552,0,1,.449,1,1v9c0,.552,.447,1,1,1h2c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-4Z"
					/>
				</svg>
			</span>
		</a>
	</div>
</div>
		`;

			lineDiv.insertBefore(newDiv, lineDiv.firstChild);
		} else {
			requestAnimationFrame(addContentToLine);
		}
	};

	const loadPdfViewer = async () => {
		try {
			const module = await import('svelte-pdf');
			PdfViewer = module.default;
		} catch (error) {
			console.error('Error loading PdfViewer:', error);
		}
	};

	onMount(() => {
		loadPdfViewer();
		requestAnimationFrame(addContentToLine);
	});
</script>

<svelte:head>
	<title>El barrigón</title>
	<meta name="El barrigón." content="QUIZ 1 | GRADO 4°" />
</svelte:head>

<section>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-left">
			<div class="embed-responsive">
				<svelte:component
					this={PdfViewer}
					url="/pdf/La laguna encantada.pdf"
					showButtons={['navigation', 'zoom', 'timeInfo', 'pageInfo']}
					showBorder="false"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.icon.svelte-19h83wp) {
		height: 2rem !important;
		width: 2rem !important;
		color: #1009ff !important;
	}
	:global(#topBtn.svelte-19h83wp) {
		visibility: hidden;
	}
	@media (max-width: 768px) {
		:global(.py-md-8) {
			padding-top: 9rem !important;
			padding-bottom: 9rem !important;
		}
	}

	@media (min-width: 768px) {
		:global(.py-md-8) {
			padding-top: 6rem !important;
			padding-bottom: 6rem !important;
		}
	}

	@media (min-width: 768px) {
		:global(.pl-md-5, .px-md-5) {
			padding-left: 3rem !important;
		}
	}

	:global(.container) {
		max-width: 1200px; /* Establece el ancho máximo del contenedor */
		margin: 0 auto; /* Centra el contenedor en la página */
		color: #000000 !important;
	}

	:global(.col) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	:global(.row) {
		justify-content: center;
	}
</style>
