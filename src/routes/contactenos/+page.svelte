<script>
	import { onMount } from 'svelte';
  
	let isSubmitting = false;
  
	const validateEmail = (email) => {
	  return String(email)
		.toLowerCase()
		.match(
		  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};
  
	const handleSubmit = async (event) => {
	  event.preventDefault();
  
	  if (isSubmitting) return;
  
	  isSubmitting = true;

	  console.log(isSubmitting)
  
	  const formData = new FormData(event.target);
  
	  const name = formData.get('name');
	  const email = formData.get('email');
	  const message = formData.get('message');
  
	  if (!name || name.length < 3) {
		showErrorModal('Nombre no válido. Debe tener al menos 3 caracteres.');
		return;
	  }
  
	  if (!validateEmail(email)) {
		showErrorModal('Correo electrónico no válido.');
		return;
	  }
  
	  if (!message || message.length < 5) {
		showErrorModal('Mensaje no válido. Debe tener al menos 5 caracteres.');
		return;
	  }
  
	  try {
		const response = await fetch('https://steamtoolsapi.fly.dev/email', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			name,
			email,
			message
		  })
		});
  
		if (response.ok) {
		  const successMessage = document.getElementById('submitSuccessMessage');
		  const errorMessage = document.getElementById('submitErrorMessage');
  
		  successMessage.classList.remove('d-none');
		  errorMessage.classList.add('d-none');
		} else {
		  throw new Error('Error al enviar el formulario');
		}
	  } catch (error) {
		console.error(error);
		const successMessage = document.getElementById('submitSuccessMessage');
		const errorMessage = document.getElementById('submitErrorMessage');
  
		successMessage.classList.add('d-none');
		errorMessage.classList.remove('d-none');
	  }
	};
  
	const showErrorModal = (message) => {
	  const errorModal = new bootstrap.Modal(document.getElementById('exampleModal'));
	  const modalBody = document.querySelector('.modal-body');
	  modalBody.textContent = message;
	  errorModal.show();
	};
  
	onMount(() => {
	  const successMessage = document.getElementById('submitSuccessMessage');
	  const errorMessage = document.getElementById('submitErrorMessage');
  
	  successMessage.classList.add('d-none');
	  errorMessage.classList.add('d-none');
	});
  </script>
  
  

<svelte:head>
	<title>Steamtools | Contactenos</title>
</svelte:head>

<section class="page-section contactenos-background" id="contact">
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-lg-8 col-xl-6">
				<h2 class="mt-4">Contactenos</h2>
				<hr class="divider" />
				<p class="mb-5 text-white">
					Estamos aquí para hacer que tu experiencia educativa sea aún mejor. Valoramos tu opinión.
					Por favor, escríbenos con cualquier comentario, sugerencia o inquietud.
				</p>
			</div>
		</div>
		<div class="row gx-4 gx-lg-5 justify-content-center mb-5">
			<div class="col-lg-6">
				<form on:submit={handleSubmit}>
					<!-- Name input-->
					<div class="form-floating mb-3">
						<input
							class="form-control"
							id="name"
							type="text"
							placeholder="Enter your name..."
							data-sb-validations="required"
							name="name"
						/>
						<label for="name">Nombre completo</label>
						<div class="invalid-feedback" data-sb-feedback="name:required">
							Se requiere un nombre.
						</div>
					</div>
					<!-- Email address input-->
					<div class="form-floating mb-3">
						<input
							class="form-control"
							id="email"
							type="email"
							placeholder="name@example.com"
							data-sb-validations="required,email"
							name="email"
						/>
						<label for="email">Dirección de correo electrónico</label>
						<div class="invalid-feedback" data-sb-feedback="email:required">
							Se requiere un correo electrónico.
						</div>
						<div class="invalid-feedback" data-sb-feedback="email:email">
							El correo electrónico no es válido.
						</div>
					</div>
					<!-- Message input-->
					<div class="form-floating mb-3">
						<textarea
							class="form-control"
							id="message"
							placeholder="Enter your message here..."
							style="height: 10rem"
							data-sb-validations="required"
							name="message"
						/>
						<label for="message">Mensaje</label>
						<div class="invalid-feedback" data-sb-feedback="message:required">
							Se requiere un mensaje.
						</div>
					</div>

					<!-- Submit success message -->
					<div class="d-none" id="submitSuccessMessage">
						<div class="text-center mb-3">
							<div class="text-success">
								<div class="fw-bolder">¡Envío exitoso!</div>
								Gracias por ponerte en contacto con nosotros.
							</div>
						</div>
					</div>

					<!-- Submit error message -->
					<div class="d-none" id="submitErrorMessage">
						<div class="text-center text-danger mb-3">¡Error al enviar el mensaje!</div>
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
									<h5 class="modal-title" id="exampleModalLabel">Error en el formulario</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<!-- Mensaje de error dinámico -->
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal"
										>Cerrar</button
									>
								</div>
							</div>
						</div>
					</div>

					<div class="d-grid">
						<button class="btn btn-primary btn-xl" type="submit" disabled={isSubmitting}>Enviar</button>
					  </div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.contactenos-background) {
		background-image: url('/images/fondo1.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
