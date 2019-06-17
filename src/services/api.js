const detailsUrl = 'https://chicken-coop.p.rapidapi.com/games/'
const searchUrl = 'https://chicken-coop.p.rapidapi.com/games?title='
const authKey = 'b21a8293f1msh88f3209dd1d74e5p152e77jsncc9541ad4c29'

const getSingleGame = gameName  => {
    return fetch(detailsUrl + gameName + "?platform=pc", {
        headers: {
          "X-Rapidapi-Host": "chicken-coop.p.rapidapi.com",
          "X-Rapidapi-Key": authKey
        }
    }).then(resp => resp.json())
}

const searchForGame = searchTerm  => {
    return fetch(searchUrl + searchTerm , {
        headers: {
            "X-Rapidapi-Host": "chicken-coop.p.rapidapi.com",
            "X-Rapidapi-Key": authKey
        }
    }).then(resp => resp.json())
}

export default { getSingleGame, searchForGame }