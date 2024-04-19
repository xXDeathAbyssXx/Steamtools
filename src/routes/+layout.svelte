<script context="module">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
</script>

<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';

    let showHeaderAndFooter = true;

    const excludedPages = [
        '/comics/el-arbol-barrigon',
        '/comics/cangrejos-al-rescate',
        '/comics/el-sueno-de-un-barco-llamado-miguel',
        '/comics/la-laguna-encantada',
        '/comics/la-mariposa-samira',
        '/comics/leo-el-tiburon-gato',
        '/comics/yeyo-el-guarumo'
    ];

    const updateHeaderAndFooterVisibility = () => {
        const currentPage = $page.url.pathname;
        console.log(currentPage);
        showHeaderAndFooter = !excludedPages.includes(currentPage);
    };

    onMount(() => {
        updateHeaderAndFooterVisibility();

        const unsubscribe = page.subscribe(() => {
            updateHeaderAndFooterVisibility();
        });

        return () => {
            unsubscribe();
        };
    });
</script>

<div class="app">
    {#if showHeaderAndFooter}
        <Header />
    {/if}

    <main>
        <slot />
    </main>

    {#if showHeaderAndFooter}
        <Footer />
    {/if}
</div>
