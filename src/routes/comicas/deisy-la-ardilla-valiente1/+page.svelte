<svelte:head>
	<title>Deisy, la ardilla valiente</title>
	<meta name="Deisy, la ardilla valiente" content="Deisy, la ardilla valiente" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">Deisy, la ardilla valiente</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-center">
			<div class="col">
				<h5 class="text-left">Observa las siguientes imágenes:</h5>

				<form class="w-100" name="form" id="questions" onsubmit="return false;">
					<div class="quiz18-main p-4">
						<div class="quiz18-group p-1">
							<div class="form-check quiz18">
								<input
									class="form-check-input quizes-checkbox mb-1"
									type="checkbox"
									name="q1[]"
									value="a"
									onchange="limitCheckboxes(this, 3)"
								/>
								<label class="form-check-label mr-3" for="defaultCheck1"> 1. </label>
								<img src="/images/imagen_ardilla_1.jpg" alt="" class="img-thumbnail" />
							</div>

							<div class="form-check quiz18">
								<input
									class="form-check-input quizes-checkbox mb-1"
									type="checkbox"
									name="q1[]"
									value="b"
									onchange="limitCheckboxes(this, 3)"
								/>

								<label class="form-check-label mr-3" for="defaultCheck1"> 2. </label>
								<img src="/images/imagen_ardilla_2.jpg" alt="" class="img-thumbnail" />
							</div>

							<div class="form-check quiz18">
								<input
									class="form-check-input quizes-checkbox mb-1"
									type="checkbox"
									name="q1[]"
									value="c"
									onchange="limitCheckboxes(this, 3)"
								/>

								<label class="form-check-label mr-3" for="defaultCheck1"> 3. </label>
								<img src="/images/imagen_ardilla_3.jpg" alt="" class="img-thumbnail" />
							</div>
						</div>

						<div class="quiz18-group p-1">
							<div class="form-check quiz18">
								<input
									class="form-check-input quizes-checkbox mb-1"
									type="checkbox"
									name="q1[]"
									value="d"
									onchange="limitCheckboxes(this, 3)"
								/>

								<label class="form-check-label mr-3" for="defaultCheck1"> 4. </label>
								<img src="/images/imagen_ardilla_4.jpg" alt="" class="img-thumbnail" />
							</div>

							<div class="form-check quiz18">
								<input
									class="form-check-input quizes-checkbox mb-1"
									type="checkbox"
									name="q1[]"
									value="e"
									onchange="limitCheckboxes(this, 3)"
								/>

								<label class="form-check-label mr-3" for="defaultCheck1"> 5. </label>
								<img src="/images/imagen_ardilla_5.jpg" alt="" class="img-thumbnail" />
							</div>

							<div class="form-check quiz18">
								<input
									class="form-check-input quizes-checkbox mb-1"
									type="checkbox"
									name="q1[]"
									value="f"
									onchange="limitCheckboxes(this, 3)"
								/>

								<label class="form-check-label mr-3" for="defaultCheck1"> 6. </label>
								<img src="/images/imagen_ardilla_6.jpg" alt="" class="img-thumbnail" />
							</div>
						</div>
					</div>

					<h5 class="p-4">
						Escoge tres imágenes donde se observan las acciones de la ardilla Deisy, que la ayudaron
						a sobrevivir.
					</h5>

					<button
						type="submit"
						class="btn btn-primary m-4"
						id="sendA"
						value="Submit"
						onclick="score(18)">Enviar</button
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
	:global(.quiz18-main) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	:global(.quiz18-group) {
		display: flex;
	}
	:global(.quiz18) {
		display: flex !important;
		flex-direction: row !important;
		justify-content: flex-start !important;
		align-items: flex-start !important;
		padding-left: 2rem;
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
