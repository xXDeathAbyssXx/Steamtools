<svelte:head>
	<title>El sueño de un barco llamado Miguel</title>
	<meta name="El sueño de un barco llamado Miguel." content="QUIZ 1 | GRADO 4°" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">El sueño de un barco llamado Miguel</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-left">
			<div class="col">
				<div class="text-left">
					<h5 class="font-weight-bold pb-3 px-2">
						Observa la imagen y selecciona dos respuestas que consideres correctas:
					</h5>
				</div>

				<img src="/images/imagen_miguel_qiuz_1.png" class="img-fluid img-size-custom" alt="" />

				<form name="form" id="questions" onsubmit="return false;">
					<h3 class="p-4">¿Qué oraciones están de acuerdo con el dibujo?</h3>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="a"
							onchange="limitCheckboxes(this, 2)"
						/>
						<label class="form-check-label text-left" for="defaultCheck1">
							A. Muchos animales se ven afectados.
						</label>
					</div>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="b"
							onchange="limitCheckboxes(this, 2)"
						/>
						<label class="form-check-label text-left" for="defaultCheck1">
							B. Pérdida de hábitat o refugio.
						</label>
					</div>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="c"
							onchange="limitCheckboxes(this, 2)"
						/>
						<label class="form-check-label text-left" for="defaultCheck1">
							C. Reducción o pérdida de zonas de tránsito de buques.
						</label>
					</div>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="d"
							onchange="limitCheckboxes(this, 2)"
						/>
						<label class="form-check-label text-left" for="defaultCheck1">
							D. Desaparición de especies de importancia ecológica.
						</label>
					</div>

					<div class="center">
						<button
							type="submit"
							class="btn btn-primary m-4"
							id="sendA"
							value="Submit"
							onclick="score(2)"
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
