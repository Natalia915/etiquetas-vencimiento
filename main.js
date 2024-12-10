function imprimirEtiquetasDeVencimiento() {
    const cantidadEtiquetas = parseInt(prompt("¿Cuántas etiquetas de vencimiento necesitas?"), 10);

    if (isNaN(cantidadEtiquetas) || cantidadEtiquetas <= 0) {
        alert("Por favor, ingresa un número válido de etiquetas.");
        return;
    }

    for (let i = 0; i < cantidadEtiquetas; i++) {
        console.log(`Imprimiendo etiqueta ${i + 1}`);
    }

    console.log(`Se imprimieron un total de ${cantidadEtiquetas} etiquetas.`);
}

imprimirEtiquetasDeVencimiento();
