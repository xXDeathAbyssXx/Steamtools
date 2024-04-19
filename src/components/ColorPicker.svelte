<!-- ColorPicker.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
    let selectedColor = '#000000'; // Color predeterminado
  
    const handleColorChange = (event) => {
      // Actualiza el color seleccionado y emite un evento
      selectedColor = event.target.value;
      dispatch('colorSelected', { color: selectedColor });
    };
  </script>
  
  <input type="color" bind:value={selectedColor} on:input={handleColorChange} />
  