<svelte:head>
	<title>La mariposa Samira</title>
	<meta name="La mariposa Samira" content="La mariposa Samira" />
</svelte:head>

<section class="page-section py-md-8 pl-md-5 px-md-5">
	<h1 class="text-primary text-center pb-7">La mariposa Samira</h1>
	<div class="container">
		<div class="row row-cols-auto align-items-center text-center">
			<div class="col">
				<h5 class="text-left">Observa los dibujos y establece su secuencia.</h5>

				<form class="w-100" name="form" id="questions" onsubmit="return false;">
					<h5 class="p-4">
						Escribe los números 1, 2, 3 y 4 en los recuadros para ordenar los dibujos.
					</h5>

					<div class="form-check quiz21 p-4">
						<div class="background1">
							<input
								type="number"
								class="form-control input-number-custom"
								name="q2[]"
								maxlength="1"
								oninput="maxLengthCheck(this)"
								min="1"
								max="4"
								required
							/>
						</div>
					</div>

					<div class="form-check quiz21 p-4">
						<div class="background2">
							<input
								type="number"
								class="form-control input-number-custom"
								name="q2[]"
								maxlength="1"
								oninput="maxLengthCheck(this)"
								min="1"
								max="4"
								required
							/>
						</div>
					</div>

					<div class="form-check quiz21 p-4">
						<div class="background3">
							<input
								type="number"
								class="form-control input-number-custom"
								name="q2[]"
								maxlength="1"
								oninput="maxLengthCheck(this)"
								min="1"
								max="4"
								required
							/>
						</div>
					</div>

					<div class="form-check quiz21 p-4">
						<div class="background4">
							<input
								type="number"
								class="form-control input-number-custom"
								name="q2[]"
								maxlength="1"
								oninput="maxLengthCheck(this)"
								min="1"
								max="4"
								required
							/>
						</div>
					</div>

					<button
						type="submit"
						class="btn btn-primary m-4"
						id="sendA"
						value="Submit"
						onclick="score(21)">Enviar</button
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
	:global(.background1) {
		background-image: url('/images/imagen_samira_1.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;

		width: 258px;
		height: 188px;
	}

	:global(.background2) {
		background-image: url('/images/imagen_samira_2.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;

		width: 258px;
		height: 188px;
	}

	:global(.background3) {
		background-image: url('/images/imagen_samira_3.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;

		width: 258px;
		height: 188px;
	}

	:global(.background4) {
		background-image: url('/images/imagen_samira_4.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;

		width: 258px;
		height: 188px;
	}

	:global(.input-number-custom) {
		width: 20% !important;
		height: 20% !important;
	}

	:global(.quiz21) {
		display: flex !important;
		flex-direction: row !important;
		justify-content: center;
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
