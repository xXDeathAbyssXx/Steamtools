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

	function removeAccents(str) {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	}

	onMount(() => {
		// Modificar el cardData para agregar download_path y download_name
		cardData.buttons = cardData.buttons.map((button) => {
			const sanitizedLabel = button.label.replace(/°/g, ''); // Eliminar el carácter "°"
			const sanitizedTitle = removeAccents(cardData.title);
			const download_path = `/pdf/${sanitizedTitle} | ${sanitizedLabel}.pdf`;
			const download_name = `${sanitizedTitle} | ${sanitizedLabel}`;
			return { ...button, download_path, download_name };
		});
	});
</script>

<div class="card card-custom">
	<a href={cardData.comic_url} rel="noopener noreferrer">
		<div class="pt-4 comic-icon">
			<img class="card-img-top img-card" src={cardData.image} alt="" />
			<img class="btn-play" src="/images/play-btn.png" alt="Reproducir" />
		</div>
	</a>
	<div class="card-body">
		<h5 class="card-title">{cardData.title}</h5>
		<div class="card-btn-custom">
			<div class="btn-group pr-1" role="group">
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
</div>

<style>
	:global(.btn-play) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	:global(.comic-icon) {
		position: relative;
	}
	:global(.comic-icon .btn-play) {
		opacity: 0;
		transition: opacity 0.3s ease;
	}
	:global(.comic-icon:hover .btn-play) {
		opacity: 1;
	}
	:global(.card-btn-custom) {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: flex-end;
	}
	:global(.pr-1) {
		padding-bottom: 10px;
	}

	:global(.card-custom) {
		width: 82% !important;

		border-radius: 20px;
	}
	:global(.img-card) {
		width: 200px !important;
		height: 282px !important;

		cursor: pointer;
		opacity: 1;
		transition: opacity 0.3s ease-in-out;

		border-radius: 20px;
	}

	:global(.img-card:hover) {
		opacity: 0.8;
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
		background-color: unset !important;
		box-shadow: none !important;
	}
	:global(.icons) {
		color: #000000 !important;
	}
</style>
