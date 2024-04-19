<svelte:head>
	<title>Steamtools | Cuentacuentos</title>
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5 cuentacuentos-background">
	<div class="title-div mb-3">
		<h1 class="text-primary text-center title-font p-1">Cuentacuentos</h1>
	</div>
	<div class="container">
		<div class="invisivle-space2" />
		<div class="pronto text-uppercase font-weight-bold">
			<h1>Pronto . . .</h1>
		</div>
		<div class="invisivle-space" />
	</div>
</section>

<style>
	:global(.pronto){
		color: white;
		font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}
	:global(.invisivle-space) {
		padding-bottom: 1000px;
	}
	:global(.invisivle-space2) {
		padding-bottom: 200px;
	}
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
	:global(.cuentacuentos-font) {
		font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}
	:global(.cuentacuentos-custom) {
		background-color: #dfd7fc;
		border-radius: 15px;
		width: 75%;
	}
	:global(.cuentacuentos-background) {
		background-image: url('/images/fondo5.jpg');
		background-repeat: no-repeat;
		background-size: contain;
		text-align: center;
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
		color: white !important;
		font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
		font-weight: 700 !important;
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
