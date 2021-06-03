const express = require('express');
const router = new express.Router();
const axios = require('axios');

// some very random data...
const yearllyDataApi = axios.get(
  'https://apis.datos.gob.ar/series/api/series?ids=168.1_T_CAMBIOR_D_0_0_26:min,168.1_T_CAMBIOR_D_0_0_26:avg,168.1_T_CAMBIOR_D_0_0_26:max,168.1_T_CAMBIOR_D_0_0_26:end_of_period&collapse=month&format=json&limit=12'
);

const dayllyDataApi = axios.get(
  'https://canvasjs.com/data/gallery/javascript/daily-sales-data.json'
);

const timeDataApi = axios.get(
  'https://apis.datos.gob.ar/series/api/series?ids=168.1_T_CAMBIOR_D_0_0_26:min,168.1_T_CAMBIOR_D_0_0_26:avg,168.1_T_CAMBIOR_D_0_0_26:max,168.1_T_CAMBIOR_D_0_0_26:end_of_period&collapse=month&format=json&limit=8'
);

router.get('/randomdata', async (req, res) => {
  try {
    axios.all([dayllyDataApi, yearllyDataApi, timeDataApi]).then(
      axios.spread((...responses) => {
        const day = responses[0].data;
        const year = responses[1].data;
        const time = responses[2].data;

        return res.status(200).json({
          day,
          year: year.data,
          time: time.data,
        });
      })
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ err: 'Server error', message: err.message });
  }
});

module.exports = router;
