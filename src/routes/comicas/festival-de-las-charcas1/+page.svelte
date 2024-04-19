<svelte:head>
	<title>Festival de las Charcas</title>
	<meta name="Festival de las Charcas" content="Festival de las Charcas" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">Festival de las Charcas</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-center">
			<div class="col">
				<h5 class="text-left">Lee la adivinanza y selecciona la respuesta correcta:</h5>

				<p class="text-justify p-3">
					“Suele salir durante el día. Su piel de color amarillo y manchas negras, la hacen ver
					atractiva. Ella no es vanidosa, pero es tan exótica que en Panamá está en peligro de
					extinguirse”.
				</p>

				<form class="w-100" name="form" id="questions" onsubmit="return false;">
					<h3 class="p-4">Opciones de respuesta:</h3>

					<div class="quizes3">
						<div class="form-check quiz3">
							<input
								class="form-check-input quizes-checkbox mb-1"
								type="checkbox"
								name="q1[]"
								value="a"
								onchange="limitCheckboxes(this, 1)"
							/>
							<label class="form-check-label mr-3" for="defaultCheck1"> A. </label>
							<img src="/images/imagen_ranas_1.jpg" alt="" class="img-thumbnail img-size" />
						</div>

						<div class="form-check quiz3">
							<input
								class="form-check-input quizes-checkbox mb-1"
								type="checkbox"
								name="q1[]"
								value="b"
								onchange="limitCheckboxes(this, 1)"
							/>

							<label class="form-check-label mr-3" for="defaultCheck1"> B. </label>
							<img src="/images/imagen_ranas_2.jpg" alt="" class="img-thumbnail img-size" />
						</div>

						<div class="form-check quiz3">
							<input
								class="form-check-input quizes-checkbox mb-1"
								type="checkbox"
								name="q1[]"
								value="c"
								onchange="limitCheckboxes(this, 1)"
							/>

							<label class="form-check-label mr-3" for="defaultCheck1"> C. </label>
							<img src="/images/imagen_ranas_3.jpg" alt="" class="img-thumbnail img-size" />
						</div>

						<div class="form-check quiz3">
							<input
								class="form-check-input quizes-checkbox mb-1"
								type="checkbox"
								name="q1[]"
								value="d"
								onchange="limitCheckboxes(this, 1)"
							/>

							<label class="form-check-label mr-3" for="defaultCheck1"> D. </label>
							<img src="/images/imagen_ranas_4.jpg" alt="" class="img-thumbnail img-size" />
						</div>
					</div>

					<button
						type="submit"
						class="btn btn-primary m-4"
						id="sendA"
						value="Submit"
						onclick="score(15)">Enviar</button
					>
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
	:global(.img-size) {
		width: 300px;
		height: 200px;
	}
	:global(.quiz3) {
		display: flex !important;
		flex-direction: row !important;
		justify-content: flex-start !important;
		align-items: flex-start !important;
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
