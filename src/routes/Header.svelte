<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-custom" id="mainNav">
	<div class="container custom-navbar-div">
		<a class="navbar-brand navbar-color" href="/">¡IMAGINA, CREA Y TRANSFORMA!</a>
		<button
			class="navbar-toggler navbar-toggler-right"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarResponsive"
			aria-controls="navbarResponsive"
			aria-expanded="false"
			aria-label="Toggle navigation"><span class="navbar-toggler-icon" /></button
		>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav my-2 my-lg-0 navbar-color navbar-ul">
				<li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a class="nav-link" href="/">Inicio</a>
				</li>

				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Nosotros
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li
							class="nav-item"
							aria-current={$page.url.pathname === '/quienes-somos' ? 'page' : undefined}
						>
							<a class="dropdown-item" href="/quienes-somos">¿Quiénes somos?</a>
						</li>
						<li
							class="nav-item"
							aria-current={$page.url.pathname === '/mision-vision' ? 'page' : undefined}
						>
							<a class="dropdown-item" href="/mision-vision">Misión y Visión</a>
						</li>
						<li
							class="nav-item"
							aria-current={$page.url.pathname === '/resultados' ? 'page' : undefined}
						>
							<a class="dropdown-item" href="/resultados">Resultados</a>
						</li>
					</div>
				</li>

				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Recursos Digitales
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li
							class="nav-item"
							aria-current={$page.url.pathname === '/comics' ? 'page' : undefined}
						>
							<a class="dropdown-item" href="/comics">Cómics</a>
						</li>
						<li
							class="nav-item"
							aria-current={$page.url.pathname === '/comicas' ? 'page' : undefined}
						>
							<a class="dropdown-item" href="/comicas">Cómicas</a>
						</li>

						<a
							class="dropdown-item"
							href="https://www.instagram.com/datitoscuriosospty/?igshid=YTQwZjQ0NmI0OA%3D%3D"
							target="_blank"
							rel="noopener noreferrer">Datitos Curiosos</a
						>

						<li
							class="nav-item"
							aria-current={$page.url.pathname === '/cuentacuentos' ? 'page' : undefined}
						>
							<a class="dropdown-item" href="/cuentacuentos">Cuentacuentos</a>
						</li>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Actividades académicas docentes
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li class="nav-item">
							<a
								class="dropdown-item"
								href="https://docs.google.com/forms/d/1wA1sUX5OjTa0jXx1jyMAmALBGzv1mE_MYR0dZ6mBjLc/viewform?edit_requested=true"
								>Contáctenos para recibirlas gratis</a
							>
						</li>
					</div>
				</li>
				<li
					class="nav-item"
					aria-current={$page.url.pathname === '/contactenos' ? 'page' : undefined}
				>
					<a class="nav-link" href="/contactenos">Contáctenos</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	@media (min-width: 992px) {
		:global(#mainNav.navbar-shrink .navbar-nav .nav-item .nav-link) {
			color: rgba(255, 255, 255, 0.7);
		}
	}

	:global(.navbar-custom) {
		background-color: #211054 !important;
	}
	:global(.custom-navbar-div) {
		padding: 0px !important;
		margin: 0px !important;
	}

	:global(.navbar-color) {
		color: #16a7a6 !important;
	}
	:global(.nav-link) {
		color: #fff !important;
	}
	:global(.navbar-toggler-icon) {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important;
	}
	
	@media screen and (max-width: 480px) {
		:global(.navbar-color) {
			margin-right: 0.5rem !important;
			font-size: medium;
		}
	}
</style>
