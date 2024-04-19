<script lang="ts">
	import Card from '../../components/CardComicas.svelte';
	import jsonData from '../../lib/json/comicas.json';
</script>

<svelte:head>
	<title>Steamtools | Cómicas</title>
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5 comicas-background">
	<div class="title-div mb-5">
		<h1 class="text-primary text-center title-font p-1">Cómicas</h1>
	</div>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-center">
			<div class="col">
				{#each jsonData as cardData (cardData)}
					<Card {cardData} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	:global(.title-div) {
		background-color: #4310e8;
		border-radius: 15px;
	}
	:global(.title-font) {
		font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
		font-weight: 700;
		color: #16a7a6 !important;
	}
	:global(.comicas-background) {
		background-image: url('/images/fondo2.png');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
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

	@media (min-width: 320px) and (max-width: 480px) {
		:global(.card-display) {
			min-width: 375px !important;
		}
	}

	:global(.card-display) {
		max-width: 500px;
		min-width: 500px;
		margin-right: 30%;
		margin-left: 30%; /* Espaciado entre tarjetas */
	}

	:global(.card-media-16x9) {
		background-size: cover;
		background-position: center;
	}

	:global(.mdc-typography--headline6),
	:global(.mdc-typography--subtitle2),
	:global(.mdc-typography--body2) {
		margin: 0; /* Elimina los márgenes predeterminados para evitar desbordamientos */
	}

	:global(.mdc-button__label) {
		white-space: nowrap; /* Evita que el texto de los botones se divida en varias líneas */
	}

	:global(.mdc-card__actions) {
		flex-direction: column !important;
	}

	:global(.mdc-card__action-buttons) {
		flex-direction: column;
	}
</style>
