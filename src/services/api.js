const detailsUrl = 'https://chicken-coop.p.rapidapi.com/games/'
const searchUrl = 'https://chicken-coop.p.rapidapi.com/games?title='
const authKey = 'b21a8293f1msh88f3209dd1d74e5p152e77jsncc9541ad4c29'

const getSingleGame = gameName  => {
    let fixedGameName = gameName.replace(/\s/g, '+')
    return fetch(detailsUrl + fixedGameName + "?platform=pc", {
        headers: {
          "X-Rapidapi-Host": "chicken-coop.p.rapidapi.com",
          "X-Rapidapi-Key": authKey
        }
    }).then(resp => resp.json())
}

const searchForGame = searchTerm  => {
    let fixedSearchTerm = searchTerm.replace(/\s/g, '%20')
    return fetch(searchUrl + fixedSearchTerm , {
        headers: {
            "X-Rapidapi-Host": "chicken-coop.p.rapidapi.com",
            "X-Rapidapi-Key": authKey
        }
    }).then(resp => resp.json())
}

export default { getSingleGame, searchForGame }