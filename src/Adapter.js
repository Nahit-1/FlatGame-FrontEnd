class Adapter {
  static getGameFeedbacks(game_id) {
    return fetch(`http://localhost:3001/games/${game_id}/feedbacks`).then(res =>
      res.json()
    );
  }

  static newFeedback (content, game_id, rating, user_id) {
    return fetch('http://localhost:3001/feedbacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: content, game_id: game_id, rating: 5, user_id: 64 })
    }).then(resp => resp.json())
  }


}

export default Adapter;
