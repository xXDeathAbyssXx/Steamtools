<svelte:head>
	<title>El barrigón</title>
	<meta name="El barrigón." content="QUIZ 1 | GRADO 4°" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">El barrigón</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-center">
			<div class="col">
				<div class="text-left">
					<h5 class="font-weight-bold pb-3 px-2">
						Observa cada imagen contenida en este diccionario visual:
					</h5>
				</div>
				<img src="/images/imagen_quiz_barrigon.jpg" class="img-fluid" alt="" />
				<p class="text-justify px-5 pt-3 font-weight-bold">
					Cada oración corresponde a una de las imágenes del diccionario visual y menciona la
					función de cada árbol en el ecosistema. Identifica el nombre del árbol que corresponde en
					cada oración y coloca el número con la opción de la respuesta que lo contenga.
				</p>

				<form class="text-left" name="form" id="questions" onsubmit="return false;">
					<div class="form-group form-numbers-custom">
						<label class="px-4" for="q2_1"
							>A. Es un árbol con un tronco raro, crece en tierras poco fértiles e inclinadas, y de
							sus hojas se extraen compuestos medicinales.</label
						>
						<input
							type="number"
							class="form-control input-number-custom"
							name="q2[]"
							maxlength="1"
							oninput="maxLengthCheck(this)"
							min="1"
							max="5"
							required
						/>
					</div>

					<div class="form-group form-numbers-custom">
						<label class="px-4" for="q2_2"
							>B. Es un árbol con muchas espinas, y se utiliza para la fabricación de muebles.</label
						>
						<input
							type="number"
							class="form-control input-number-custom"
							name="q2[]"
							min="1"
							max="5"
							required
						/>
					</div>
					<div class="form-group form-numbers-custom">
						<label class="px-4" for="q2_3"
							>C. Es un árbol grande, y es emblema de nuestro país.</label
						>
						<input
							type="number"
							class="form-control input-number-custom"
							name="q2[]"
							maxlength="1"
							oninput="maxLengthCheck(this)"
							min="1"
							max="5"
							required
						/>
					</div>
					<div class="form-group form-numbers-custom">
						<label class="px-4" for="q2_4"
							>D. Es un árbol que almacena agua, y puede utilizarla en temporada seca.</label
						>
						<input
							type="number"
							class="form-control input-number-custom"
							name="q2[]"
							maxlength="1"
							oninput="maxLengthCheck(this)"
							min="1"
							max="5"
							required
						/>
					</div>
					<div class="form-group form-numbers-custom">
						<label class="px-4" for="q2_5"
							>E. Es un árbol muy alto, y en él habita comúnmente el águila Harpía .</label
						>
						<input
							type="number"
							class="form-control input-number-custom"
							name="q2[]"
							maxlength="1"
							oninput="maxLengthCheck(this)"
							min="1"
							max="5"
							required
						/>
					</div>

					<div class="center">
						<button
							type="submit"
							class="btn btn-primary m-4"
							id="sendA"
							value="Submit"
							onclick="score(1)"
						>
							Enviar
						</button>
					</div>

					<br />
					<div id="form-modal-finished" />
				</form>

				<div class="pb-5 text-left">
					<h6 class="font-weight-bold">OPCIONES DE RESPUESTA:</h6>
					<ol class="list-group">
						<li class="list-group-item">1. Barrigón</li>
						<li class="list-group-item">2. Indio desnudo</li>
						<li class="list-group-item">3. Árbol Panamá</li>
						<li class="list-group-item">4. Cuipo</li>
						<li class="list-group-item">5. Cedro espino</li>
					</ol>
				</div>

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
	:global(.input-number-custom) {
		width: 5% !important;
		height: 5% !important;
	}

	:global(.form-numbers-custom) {
		display: flex;
		flex-direction: row;
		align-content: center;
		align-items: center;
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
