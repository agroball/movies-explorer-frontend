class MoveApi {
  constructor(url) {
    this._url = url;
  }

  getMovies() {
    return fetch(this._url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Ошибка: ${response.status}`));
    });
  }

}

export default new MoveApi('https://api.nomoreparties.co/beatfilm-movies');
