<script>
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import Button, { Group, Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';
	import { onMount } from 'svelte';

	export let cardData;

	onMount(() => {
		// Modificar el cardData para agregar download_path y download_name
		cardData.buttons = cardData.buttons.map((button) => {
			const sanitizedLabel = button.label.replace(/°/g, ''); // Eliminar caracteres no numéricos
			const download_path = `/pdf/${cardData.title} | ${sanitizedLabel}.pdf`;
			const download_name = `${cardData.title} | ${sanitizedLabel}`;
			return { ...button, download_path, download_name };
		});
	});
</script>

<div class="card-display mb-card">
	<div class="card-container">
		<Card>
			<PrimaryAction>
				<a
					href={cardData.youtube_url}
					class="video-link"
					target="_blank"
					style="position: relative; display: inline-block;"
				>
					<img src={cardData.image} style="width: 70%; border-radius: 20px;" alt="" />
					<img
						class="hover-youtube-icon"
						src="/images/youtube.png"
						alt="Reproducir"
						style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
					/>
				</a>
				<Content class="mdc-typography--body2">
					<h2 class="mdc-typography--headline6 px-4 text-primary" style="margin: 0;">
						{cardData.title}
					</h2>
				</Content>
			</PrimaryAction>
		</Card>

		<div class="btn-group" role="group">
			<button
				id="btnGroupDrop1"
				type="button"
				class="btn btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
			Quiz en línea
			</button>
			<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
				{#each cardData.buttons as button (button)}
					<a class="dropdown-item" href={button.path}>{button.label}</a>
				{/each}
			</div>
		</div>

		<div class="btn-group" role="group">
			<button
				id="btnGroupDrop1"
				type="button"
				class="btn btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				Descargar Quiz
			</button>
			<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
				{#each cardData.buttons as button (button)}
					<a class="dropdown-item" href={button.download_path} download={button.download_name}
						>{button.label}</a
					>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	:global(.video-link img) {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}
	:global(.video-link:hover img) {
		opacity: 0.8;
	}
	:global(.miniatura) {
		border-radius: 20px;
		transition: border-radius 10s ease-in-out;
	}

	:global(.miniatura:hover) {
		border-radius: 0%;
	}

	:global(.card-media-comicas) {
		background-size: 70% !important;
	}
	:global(.mb-card) {
		margin-bottom: 6rem !important;
	}

	@media (max-width: 768px) {
		:global(.mb-card) {
			margin-bottom: 4rem !important;
		}
	}

	:global(.card-media-16x9) {
		background-size: 40% !important;
	}
	:global(.mdc-card) {
		box-shadow: none;
		background: unset;
	}
	:global(.icons) {
		color: #000000 !important;
	}
</style>
