<script lang="ts">
	import Button, { Label } from '@smui/button';
</script>

<svelte:head>
	<title>Steamtools | Inicio</title>
</svelte:head>

<header class="masthead responsive-header" />

<section class="page-section" id="about">
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div data-sveltekit-preload-data="tap" class="col-lg-8 text-center">
				<Button class="m-2 btn-homepage-3" href="/comics" variant="raised">
					<Label>Cómics</Label>
				</Button>
				<Button class="m-2 btn-homepage-4" href="/comicas" variant="raised">
					<Label>Cómicas</Label>
				</Button>
				<Button
					class="m-2 btn-homepage-1"
					variant="raised"
					href="https://www.instagram.com/datitoscuriosospty/?igshid=YTQwZjQ0NmI0OA%3D%3D"
					target="_blank"
				>
					<Label>datitos curiosos</Label>
				</Button>
				<Button class="m-2 btn-homepage-2" href="/cuentacuentos" variant="raised">
					<Label>Cuentacuentos</Label>
				</Button>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.masthead) {
		background: url('/images/header.png');
	}
	:global(.btn-homepage-1) {
		background-color: #ce8a61 !important;
	}
	:global(.btn-homepage-2) {
		background-color: #61ce70 !important;
	}
	:global(.btn-homepage-3) {
		background-color: #ce6193 !important;
	}
	:global(.btn-homepage-4) {
		background-color: #6d61ce !important;
	}
	@media only screen and (max-width: 768px) {
		:global(.responsive-header) {
			padding-top: 30rem !important;
		}
	}
	@media screen and (max-width: 480px) {
		:global(.responsive-header) {
			margin-top: 15%;
		}
	}
</style>
