const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

let info = {}

const getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}°C`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion).then(resp => console.log(resp)).catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         info = resp;
//         clima.getClima(resp.lat, resp.lng)
//             .then(resp => {
//                 info.temp = resp;
//                 console.log(info);
//             })
//             .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));