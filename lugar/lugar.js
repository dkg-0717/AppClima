const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    // console.log(JSON.stringify(resp.data, undefined, 2))
    let dir = resp.data.results[0];
    let cor = dir.geometry.location;
    return {
        direccion: dir.formatted_address,
        lat: cor.lat,
        lng: cor.lng
    }
}

module.exports = {
    getLugarLatLng
}