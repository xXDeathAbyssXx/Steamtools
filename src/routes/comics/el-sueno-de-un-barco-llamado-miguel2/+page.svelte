<script>
	import Canvas from '../../../components/CanvasDraw.svelte';
	import Palette from '../../../components/Palette.svelte';

	const background = '#fff';
	let color = '#000';

	const handleColorChange = (event) => {
		color = event.detail.color;
	};
</script>

<svelte:head>
	<title>El sueño de un barco llamado Miguel</title>
	<meta name="El sueño de un barco llamado Miguel." content="QUIZ 1 | GRADO 4°" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">El sueño de un barco llamado Miguel</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-left">
			<div class="col">
				<form name="form" id="questions" onsubmit="return false;">
					<h5 class="font-weight-bold pb-3 px-2">Lee siguiente texto:</h5>

					<h6 class="py-3 text-justify">
						... La hazaña de Miguel fue reconocida por el director del Canal de Panamá, creando un
						nuevo equipo de barcos: Rescate Marino por Barrido (RMB), distinguidos por su color,
						azul y blanco. Sus nuevas herramientas eran como una red especial en forma de cepillo,
						con fibra de cocos secos y se movía en cualquier dirección. Ahora los barcos estaban más
						preparados para las emergencias, y la vida marina podía estar segura...
					</h6>
					<hr class="rounded" />

					<h6 class="py-3 text-justify">
						Usted pertenece al equipo directivo y creativo del Canal de Panamá y debido a la
						importante hazaña de Miguel desean elogiar al Equipo de barcos de Rescate Marino por
						Barrido (RMB) con una bandera que los identifique de los otros barcos. Dibuje una
						bandera con un logo que reúna las características mencionadas en el texto de arriba y
						describa su diseño:
					</h6>

					<h5 class="font-weight-bold pb-3 px-2">Logo del RMB:</h5>
					<div class="draw-canva-custom">
						<Canvas {color} {background} />
						<Palette on:color={handleColorChange} />
					</div>

					<div class="form-group">
						<h5 class="font-weight-bold pb-3 px-2">Descripción:</h5>
						<textarea class="form-control" id="textarea-zds83h" rows="8" />
					</div>

					<div class="center">
						<button
							type="submit"
							class="btn btn-primary m-4"
							id="sendA"
							value="Submit"
							onclick="score(6)"
						>
							Enviar
						</button>
					</div>

					<br />
					<div id="form-modal-finished" />
				</form>

				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">¡Quiz terminado! 🎉</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								Has completado el quiz exitosamente. ¿Te gustaría ir a la página principal de
								cómics? 🚀
							</div>
							<div class="modal-footer">
								<a data-sveltekit-preload-data="hover" target="_blank" href="/comics">
									<button type="button" class="btn btn-primary">Ir</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.draw-canva-custom) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-content: center;

		padding-left: 5%;
		padding-right: 5%;
	}

	@media (min-width: 1025px) {
		:global(.img-size-custom) {
			max-width: 50% !important;
		}
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
