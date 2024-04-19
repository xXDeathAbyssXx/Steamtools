<svelte:head>
	<title>La mariposa Samira</title>
	<meta name="La mariposa Samira." content="QUIZ 1 | GRADO 4°" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">La mariposa Samira</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-left">
			<div class="col">
				<div class="short-title-fix">
					<div class="text-left">
						<h5 class="font-weight-bold pb-3 px-2">
							Observa los dibujos y piensa que te están mostrando. Estos animales podrían ayudar a
							las mariposas con su misión.
						</h5>
					</div>
					<div class="text-left">
						<h5 class="font-weight-bold pb-3 px-2">
							Escoge la idea que mejor representa la misión que cumplen estos animales y la mariposa
							Samira:
						</h5>
					</div>

					<img src="/images/imagen_samira_comica_2.png" class="img-fluid img-size-custom" alt="" />
				</div>

				<form name="form" id="questions" onsubmit="return false;">
					<h5 class="p-4">Opciones de respuesta:</h5>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="a"
							onchange="limitCheckboxes(this, 1)"
						/>
						<label class="form-check-label" for="defaultCheck1">
							A. Los animales utilizan diferentes adaptaciones de sus cuerpos para obtener su
							alimento, cada flor tiene una forma diferente para sus polinizadores.
						</label>
					</div>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="b"
							onchange="limitCheckboxes(this, 1)"
						/>
						<label class="form-check-label" for="defaultCheck1">
							B. Son animales que pueden volar.
						</label>
					</div>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="c"
							onchange="limitCheckboxes(this, 1)"
						/>
						<label class="form-check-label" for="defaultCheck1">
							C. Sus partes del cuerpo quedan impregnadas de polen que dejarán en la siguiente flor
							que visiten, así las plantas podrán reproducirse.
						</label>
					</div>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="d"
							onchange="limitCheckboxes(this, 1)"
						/>
						<label class="form-check-label" for="defaultCheck1">
							D. Las plantas les brindan alimento a los animales para poder subsistir.
						</label>
					</div>

					<div class="center">
						<button
							type="submit"
							class="btn btn-primary m-4"
							id="sendA"
							value="Submit"
							onclick="score(22)"
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
