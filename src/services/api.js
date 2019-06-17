const corsWorkAround = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://api-v3.igdb.com'
const gamesUrl = corsWorkAround + baseUrl + '/games' 
const authKey = '5dab8c9043eaad8423d6bacefd5627e2'
const allFields = 'age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;'

const get = url => {
    return fetch( url, {
        body: "fields " + allFields,
        headers: {
            'X-Requested-With': 'whatever',
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Key": authKey
        },
        method: "POST"
    }).then(resp => resp.json())
}

const getGames = () => get(gamesUrl)


export default { getGames }