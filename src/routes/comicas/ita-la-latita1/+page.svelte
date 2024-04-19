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
	<title>Ita, la latita</title>
	<meta name="Ita, la latita ." content="QUIZ 1 | GRADO 4°" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">Ita, la latita</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-left">
			<div class="col">
				<div class="short-title-fix">
					<div class="text-left">
						<h5 class="font-weight-bold pb-3 px-2">
							Ita se encontraba sobre un gran río rodeada de palos, botellas de plástico, hojas,
							colchones, zapatos, llantas...
						</h5>
					</div>
					<img src="https://i.imgur.com/HFYpAPy.png" class="img-fluid img-size-custom" alt="" />
				</div>

				<form name="form" id="questions" onsubmit="return false;">
					<h5 class="p-4 text-center">
						Dibuja los materiales que se pueden reciclar en donde corresponde.
					</h5>

					<div class="d-flex justify-content-center py-6">
						<img src="/images/reciclar-verde.jpeg" alt="" class="img-thumbnail ita-reciclaje-img" />
					</div>

					<div class="draw-canva-custom">
						<Canvas {color} {background} />
						<Palette on:color={handleColorChange} />
					</div>

					<div class="d-flex justify-content-center py-6">
						<img
							src="/images/reciclar-amarillo.jpeg"
							alt=""
							class="img-thumbnail ita-reciclaje-img"
						/>
					</div>

					<div class="draw-canva-custom">
						<Canvas {color} {background} />
						<Palette on:color={handleColorChange} />
					</div>

					<div class="d-flex justify-content-center py-6">
						<img
							src="/images/reciclar-blanco.jpeg"
							alt=""
							class="img-thumbnail ita-reciclaje-img"
						/>
					</div>

					<div class="draw-canva-custom">
						<Canvas {color} {background} />
						<Palette on:color={handleColorChange} />
					</div>

					<input type="hidden" name="hidden" value="hidden" />

					<div class="center">
						<button
							type="submit"
							class="btn btn-primary m-4"
							id="sendA"
							value="Submit"
							onclick="score(20)"
						>
							Enviar
						</button>
					</div>

					<br />
					<div id="form-modal-finished" />
				</form>

				<!-- Modal -->
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
								Has completado el quiz exitosamente. ¿Te gustaría ir a la página principal de las
								cómicas? 🚀
							</div>
							<div class="modal-footer">
								<a data-sveltekit-preload-data="hover" target="_blank" href="/comicas">
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
	:global(.ita-reciclaje-img) {
		max-width: 20% !important;
	}
	:global(.draw-canva-custom) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-content: center;

		padding-left: 5%;
		padding-right: 5%;
	}

	:global(.short-title-fix) {
		display: flex;
		flex-direction: column;
		align-items: center;
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
