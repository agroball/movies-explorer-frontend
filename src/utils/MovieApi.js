export const Film_Url = 'https://api.nomoreparties.co/beatfilm-movies';

export const getFilms = () => {
  return fetch(`${Film_Url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.status)
      } else {
        console.log(res)
        return res.json();
      }
    })
}
