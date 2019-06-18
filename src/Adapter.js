class Adapter {
  static getGameFeedbacks(game_id) {
    return fetch(`http://localhost:3001/games/${game_id}/feedbacks`).then(res =>
      res.json()
    );
  }
}

export default Adapter;
