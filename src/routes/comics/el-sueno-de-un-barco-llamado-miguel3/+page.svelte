<svelte:head>
	<title>El sueño de un barco llamado Miguel</title>
	<meta name="El sueño de un barco llamado Miguel." content="QUIZ 1 | GRADO 4°" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">El sueño de un barco llamado Miguel</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-left">
			<div class="col">
				<div class="px-4">
					<h5 class="font-weight-bold pb-3 px-2">Lee siguiente texto:</h5>

					<h6 class="text-justify">
						Un día un buque tuvo un escape y el petróleo que llevaba se esparcía en el mar. Miguel
						no dudó en ayudar, pues los peces y demás animales marinos estaban en peligro de muerte
						por la contaminación de su hogar. Buscó a sus amigos pelícanos y les explicó su plan:
						cargar en sus picos cocos secos, hacer una fila y tirarlos al mismo tiempo al mar cerca
						de la mancha de petróleo, donde las tortugas verdes tomaron la red de Miguel y
						arrastraron los cocos secos aislando la mancha de petróleo.
					</h6>
				</div>
				<form name="form" id="questions" onsubmit="return false;">
					<h5 class="p-4">
						¿Cómo sabes si la acción de Miguel causa un efecto positivo al ecosistema?
					</h5>

					<div class="form-check mx-4 mb-3">
						<input
							class="form-check-input quizes-checkbox"
							type="checkbox"
							name="q1[]"
							value="a"
							onchange="limitCheckboxes(this, 1)"
						/>
						<label class="form-check-label" for="defaultCheck1">
							A. Porque Miguel, no dudó en ayudar.
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
							B. Porque Miguel arrastró una red junto con las tortugas verdes.
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
							C. Porque los pelícanos y Miguel cargaron cocos secos.
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
							D. Porque el plan de Miguel, fue arrastrar los cocos secos para aislar la mancha de
							petróleo en el mar.
						</label>
					</div>

					<div class="center">
						<button
							type="submit"
							class="btn btn-primary m-4"
							id="sendA"
							value="Submit"
							onclick="score(7)"
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
