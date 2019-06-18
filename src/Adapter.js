class Adapter {

    static getGameFeedbacks (game_id){
        return fetch(`http://localhost:3001/feedbacks`)
        .then(res => res.json())
    }
}

export default Adapter