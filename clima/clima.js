const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8f146661fb61907ef6bd6cbf43c89658`);

    if (resp.data.cod === 400) {
        throw new Error('Ingrese valores validos');
    }

    return resp.data.main.temp;
}



module.exports = {
    getClima
}