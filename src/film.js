const axios = require('axios')
const cheerio = require('cheerio')

module.exports.bioskopcomingsoon = function BioskopComingSoon(page) {
  return new Promise((resolve, reject) => {
    axios.get(`https://jadwalnonton.com/comingsoon/?page=${page}`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let title = []
     let url = []
     let img = []
 	$('div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
            
        const res = {
            status: 200,
            maintainer: 'Zahirrrr',
            sumberweb: 'jadwalnonton.com',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}


module.exports.animesearch = function Anime(page, search) {
  return new Promise((resolve, reject) => {
    axios.get(`https://nekonime.vip/page/${page}/?s=${search}`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let title = []
     let url = []
     let img = []
 	$('body > div > div.container-fluid > div > div > div.row > div.col-md-8 > div > div > article > div.article-img > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('body > div > div.container-fluid > div > div > div.row > div.col-md-8 > div > div > article > div.article-body > h3 > a').get().map((rest) => {
        	title.push($(rest).text())
         })
         $('body > div > div.container-fluid > div > div > div.row > div.col-md-8 > div > div > article > div.article-img > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
            
        const res = {
            status: 200,
            maintainer: 'Zahirrrr',
            sumberweb: 'nekonime.vip',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}