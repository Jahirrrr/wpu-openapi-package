const axios = require('axios')
const cheerio = require('cheerio')

module.exports.gempaterkini = function gempaTerkini() {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.bmkg.go.id/`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let magnitudoo = []
     let jam = []
     let dalem = []
     let kejadian = []
 	$('#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul > li:nth-child(1) > span').get().map((rest) => {
         jam.push($(rest).text())
         })
         $('#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul > li:nth-child(2)').get().map((rest) => {
         magnitudoo.push($(rest).text())
         })
         $('#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul > li:nth-child(3)').get().map((rest) => {
        	dalem.push($(rest).text())
         })
         $('#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul > li:nth-child(4)').get().map((rest) => {
        	kejadian.push($(rest).text())
         })
     let result = []
     for (let i = 0; i < jam.length; i++) {
          result.push({
               	waktu: jam[i],
               	magnitudo: magnitudoo[i],
               	kedalaman: dalem[i],
                 lokasi: kejadian[i]
          })
     }
            
        const res = {
            status: 200,
			      maintainer: 'Zahirrrr',
            sumberweb: 'www.bmkg.go.id',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}


module.exports.infoiklim = function infoIklim() {
  return new Promise((resolve, reject) => {
    axios.get(`https://bmkg.go.id`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let gambarr = []
 	$('#klimatologi > div > div.row.margin-bottom-30.md-margin-bottom-10 > div:nth-child(2) > div.img-mkg-home-bg > a > img').get().map((rest) => {
         gambarr.push($(rest).attr('data-original'))
         })
     let result = []
     for (let i = 0; i < gambarr.length; i++) {
          result.push({
               	image: gambarr[i]
          })
     }
            
        const res = {
            status: 200,
			      maintainer: 'Zahirrrr',
            sumberweb: 'www.bmkg.go.id',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}


module.exports.citrasatelit = function citraSatelit() {
  return new Promise((resolve, reject) => {
    axios.get(`https://bmkg.go.id`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let gambarr = []
 	$('#klimatologi > div > div:nth-child(2) > div:nth-child(1) > div.img-mkg-home-bg > a > img').get().map((rest) => {
         gambarr.push($(rest).attr('data-original'))
         })
     let result = []
     for (let i = 0; i < gambarr.length; i++) {
          result.push({
               	image: gambarr[i]
          })
     }
            
        const res = {
            status: 200,
			      maintainer: 'Zahirrrr',
            sumberweb: 'www.bmkg.go.id',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}


module.exports.prakiraangelombang = function prakiraanGelombang() {
  return new Promise((resolve, reject) => {
    axios.get(`https://bmkg.go.id`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let gambarr = []
 	$('#klimatologi > div > div:nth-child(2) > div:nth-child(2) > div.img-mkg-home-bg > a > img').get().map((rest) => {
         gambarr.push($(rest).attr('data-original'))
         })
     let result = []
     for (let i = 0; i < gambarr.length; i++) {
          result.push({
               	image: gambarr[i]
          })
     }
            
        const res = {
            status: 200,
			      maintainer: 'Zahirrrr',
            sumberweb: 'www.bmkg.go.id',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}


module.exports.prakiraanangin = function prakiraanAngin() {
  return new Promise((resolve, reject) => {
    axios.get(`https://bmkg.go.id`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let gambarr = []
 	$('#klimatologi > div > div:nth-child(2) > div:nth-child(4) > div.img-mkg-home-bg > a > img').get().map((rest) => {
         gambarr.push($(rest).attr('data-original'))
         })
     let result = []
     for (let i = 0; i < gambarr.length; i++) {
          result.push({
               	image: gambarr[i]
          })
     }
            
        const res = {
            status: 200,
			      maintainer: 'Zahirrrr',
            sumberweb: 'www.bmkg.go.id',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}


module.exports.potensikebakaran = function potensiKebakaran() {
  return new Promise((resolve, reject) => {
    axios.get(`https://bmkg.go.id`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let gambarr = []
 	$('#klimatologi > div > div:nth-child(2) > div:nth-child(5) > div.img-mkg-home-bg > a > img').get().map((rest) => {
         gambarr.push($(rest).attr('data-original'))
         })
     let result = []
     for (let i = 0; i < gambarr.length; i++) {
          result.push({
               	image: gambarr[i]
          })
     }
            
        const res = {
            status: 200,
			      maintainer: 'Zahirrrr',
            sumberweb: 'www.bmkg.go.id',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}


module.exports.cuacapenerbangan = function cuacaPenerbangan() {
  return new Promise((resolve, reject) => {
    axios.get(`http://aviation.bmkg.go.id/web/`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let daerahh = [];
        let cuacaa = [];
        let arahh = [];
        let jarakk = [];
        let suhuu = [];
        let embunn = [];
        let tekanann = [];
        let waktuu = [];
        let image = [];
 	$('#weather_slide_bar > div.bar > div > div.slide_station_name').get().map((rest) => {
         daerahh.push($(rest).text())
         })
         $('#weather_slide_bar > div.bar > div > div.slide_weather').get().map((rest) => {
          cuacaa.push($(rest).text())
          })
          $('#weather_slide_bar > div.bar > div > span.slide_wind').get().map((rest) => {
            arahh.push($(rest).text())
            })
            $('#weather_slide_bar > div.bar > div > span.slide_visibility').get().map((rest) => {
              jarakk.push($(rest).text())
              })
              $('#weather_slide_bar > div.bar > div > span.slide_temp').get().map((rest) => {
                suhuu.push($(rest).text())
                })
                $('#weather_slide_bar > div.bar > div > span.slide_dew_point').get().map((rest) => {
                  embunn.push($(rest).text())
                  })
                  $('#weather_slide_bar > div.bar > div > span.slide_pressure').get().map((rest) => {
                    tekanann.push($(rest).text())
                    })
                    $('#weather_slide_bar > div.bar > div > span.slide_observed_time').get().map((rest) => {
                      waktuu.push($(rest).text())
                      })
                      $('#weather_slide_bar > div.bar > div > img').get().map((rest) => {
                        image.push($(rest).attr('src'))
                        })
     let result = []
     for (let i = 0; i < daerahh.length; i++) {
          result.push({
               	daerah: daerahh[i],
                 cuaca: cuacaa[i],
                 gambarcuaca: image[i],
                 arahangin: arahh[i],
                 jarakpandang: [i],
                 suhu: suhuu[i],
                 embun: embunn[i],
                 tekanan: tekanann[i],
                 waktu: waktuu[i]
          })
     }
            
        const res = {
            status: 200,
			      maintainer: 'Zahirrrr',
            sumberweb: 'www.bmkg.go.id',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}