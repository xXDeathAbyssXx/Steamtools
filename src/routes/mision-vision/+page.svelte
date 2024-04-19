<svelte:head>
	<title>Steamtools | Misión y Visión</title>
</svelte:head>
<section class="page-section py-md-8 pl-md-5 px-md-5 mivi-background">
	<div class="title-div mb-3 mx-4">
		<h1 class="text-primary text-center title-font p-1">Misión</h1>
	</div>
	<div class="container">
		<div class="d-flex justify-content-center">
			<div class="mivi-custom p-5">
				<span class="mivi-font">
					<p class="text-justify">
						En STEAMTOOLS, estamos comprometidos con las nuevas generaciones. Nuestro eslogan “Imagina, Crea y Transforma”, resalta nuestro compromiso en catalizar el potencial de la creatividad a través de la literatura. Desarrollamos innovadores talleres educativos diseñados para niños y docentes. Nos destacamos por nuestras herramientas didácticas vanguardistas, meticulosamente elaboradas bajo la teoría STEAM, destinadas a estimular la creatividad y el pensamiento crítico.
					</p>
				</span>
			</div>
		</div>
	</div>

	<div class="title-div my-3 mx-4">
		<h1 class="text-primary text-center title-font p-1">Visión</h1>
	</div>
	<div class="container">
		<div class="d-flex justify-content-center">
			<div class="mivi-custom p-5">
				<span class="mivi-font">
					<p class="text-justify">
						En STEAMTOOLS, creemos en un mundo donde cada niño y joven tiene acceso a una educación literaria de calidad que estimula su imaginación, fortalece su pensamiento crítico y les empodera para enfrentar los desafíos del futuro. Nuestra visión es ser líderes en la transformación educativa, inspirando a la próxima generación a través de la literatura y la innovación STEAM.
					</p>
				</span>
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
	:global(.mivi-font) {
		font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}
	:global(.mivi-custom) {
		background-color: #dfd7fc;
		border-radius: 15px;
		width: 75%;
	}
	:global(.mivi-background) {
		background-image: url('/images/fondo3.jpg');
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

	:global(.row) {
		justify-content: center;
	}
</style>
