
function createWebMap(containerId, geojsonPath, center, zoom) {
    // Crear el mapa en el contenedor especificado
    var map = L.map(containerId).setView(center, zoom);

    // Cargar el fondo de mapa (TileLayer)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Cargar el archivo GeoJSON
    fetch(geojsonPath)
        .then(response => response.json()) // Convertir respuesta en JSON
        .then(data => {
            // Añadir los datos GeoJSON al mapa
            L.geoJSON(data, {
                style: {
                    color: 'blue', // Color del contorno
                    weight: 2,     // Grosor de las líneas
                    fillOpacity: 0.4 // Opacidad de relleno
                },
                onEachFeature: function (feature, layer) {
                    // Mostrar información en un popup (ajusta según tus datos GeoJSON)
                    layer.bindPopup(`Zona: ${feature.properties.nombre || 'Sin nombre'}`);
                }
            }).addTo(map);
        })
        .catch(error => console.error(`Error al cargar el archivo GeoJSON (${geojsonPath}):`, error));
}
