const axios = require('axios')
const cheerio = require('cheerio')

const fetchGames = async () => {

    try {

        const response = await axios.get('https://www.amazon.com.br/s?i=videogames&bbn=7791986011&rh=n%3A7791985011%2Cn%3A20971488011%2Cp_89%3APlayStation&dc&ds=v1%3AnIVMApFM6f4RSRNzTcgl0WxOj8j2I9nHkOqSnwU0rD4&qid=1673460211&rnid=7791986011&ref=sr_nr_n_1')
        const html = response.data
        const $ = cheerio.load(html)
        const items = []

        $('div.s-main-slot.s-result-list.s-search-results.sg-row').each((index, el) => {
            const item = $(el)
            const title = item.find('span.a-size-medium.a-color-base.a-text-normal').text()
            items.push(title)
        })

        return items
    } catch (error) {

        console.error(error)

    }

}

fetchGames().then(games => console.log(games))