<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';
</script>

<svelte:head>
	<title>Steamtools | ¿Quiénes somos?</title>
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5 nosotros-background">
	<div class="title-div mb-3 mx-4">
		<h1 class="text-primary text-center title-font p-1">¿Quiénes somos?</h1>
	</div>
	<div class="container">
		<div class="d-flex justify-content-center">
			<div class="nosotros-custom p-5">
				<span class="nosotros-font"
					><p class="text-justify">
						STEAMTOOLS, nace con el apoyo de la SENACYT, resultando beneficiarios en concurso de
						convocatoria pública de la dirección de Fortalecimiento del Aprendizaje en la Ciencia y
						la Tecnología, con el proyecto: “DESARROLLO DE HERRAMIENTAS DIDÁCTICAS EN FORMATO
						DIGITAL PARA TRANSMITIR CONOCIMIENTOS DE CIENCIAS NATURALES” (PFIA-IACP-21-2021).
						Actualmente, ofrecemos una variedad de recursos digitales como; cómicas en 2D, cómics
						estilo manga, videos de cuentacuentos con traducción en lenguaje de señas, así como
						nuestra serie audiovisual "Datitos curiosos" que difunde datos científicos de Panamá en
						un lenguaje sencillo y divertido durante un minuto. Nuestra visión es contribuir a la
						transformación de la educación, alejándonos principalmente del método memorístico.
						Aspiramos a ser una plataforma de referencia para docentes de Educación Primaria,
						fortaleciendo conceptos mediante la creación de evaluaciones de comprensión lectora
						elaboradas en contextos transversales.
					</p></span
				>

				<span class="nosotros-font">
					<p class="text-justify mt-5">
						En STEAMTOOLS, creamos y promovemos recursos digitales innovadores y atractivos que
						facilitan el proceso de aprendizaje de conceptos en Ciencias Naturales para los niños.
						Basados en doce cuentos infantiles de la serie: Cuentos del Trópico, de la autora
						Herminia Peña. Nuestras herramientas son de uso gratuito, y se destacan por la
						creatividad y el enfoque centrado en la inclusión social, brindando acceso a todos los
						niños, demostrando que el aprendizaje puede ser accesible y emocionante para todos los
						estudiantes, independientemente de sus capacidades. Además, han sido elaborados
						enfatizando los valores morales, pues creemos en la formación integral. Nos esforzamos
						por apoyar a los docentes en la creación de evaluaciones para fortalecer la comprensión
						lectora, basadas en los objetivos de las pruebas TERCE. Estas evaluaciones están
						diseñadas para impulsar el pensamiento lógico como resultado del análisis de un texto,
						promoviendo un aprendizaje significativo y duradero en los estudiantes de Educación
						Primaria.
					</p></span
				>

				<div class="mb-4 custom-yt-div-quienessomos">
					<button type="button" class="btn custom-yt-btn-quienessomos" on:click={() => window.open("https://www.youtube.com/watch?v=5tgAuBuBqx0", "_blank") } >
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							class="bi bi-youtube"
							viewBox="0 0 16 16"
						>
							<path
								d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"
							/>
						</svg>  Conociendo la plaforma STEAMTOOLS
					</button>
					
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.custom-yt-div-quienessomos) {
		display: flex;
		flex-direction: row;
		align-content: center;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	:global(.custom-yt-btn-quienessomos) {
		color: white;
		background-color: #ff0000 !important;
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
	:global(.nosotros-font) {
		font-family: 'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}
	:global(.nosotros-custom) {
		background-color: #dfd7fc;
		border-radius: 15px;
		width: 75%;
	}
	@media (max-width: 768px) {
		:global(.nosotros-custom) {
			padding: 1rem !important;
		}
	}

	:global(.nosotros-background) {
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

	@media (max-width: 768px) {
		:global(.container) {
			max-width: 1200px; /* Establece el ancho máximo del contenedor */
			margin: 0px !important;
			padding: 0px !important;
		}
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
