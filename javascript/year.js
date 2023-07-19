// Función para reemplazar el shortcode [year] con el año actual
function replaceYearShortcode() {
    var copyrightElements = document.querySelectorAll('.replace-year');

    // Obtenemos el año actual
    var currentYear = new Date().getFullYear();

    // Reemplazamos cada elemento que contenga el shortcode con el año actual
    for (var i = 0; i < copyrightElements.length; i++) {
        var element = copyrightElements[i];
        element.innerHTML = element.innerHTML.replace(/\[year\]/g, currentYear);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    replaceYearShortcode();
});
