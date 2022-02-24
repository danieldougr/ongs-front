function inicializar() {
    var coordenadas = {lat: -19.8872984, lng: -43.8649765};

    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 13,
      center: coordenadas 
    });
}


