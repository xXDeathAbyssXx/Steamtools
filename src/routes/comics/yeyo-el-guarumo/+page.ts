// src/routes/comics/cangrejos-al-rescate/page.ts
import { dev } from '$app/environment';

let PdfViewer;

if (dev) {
    // Solo cargar el módulo en desarrollo para aprovechar la recarga en caliente
    import('svelte-pdf').then((module) => {
        PdfViewer = module.default;
        console.log('Módulo svelte-pdf cargado en desarrollo:', PdfViewer);
    });
}

// Resto del código de la página

// Exponer PdfViewer de manera compatible con SvelteKit
export const load = async () => {
    return {
        props: {
            PdfViewer
        }
    };
};