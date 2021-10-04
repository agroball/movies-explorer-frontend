export const BASE_URL = 'https://api.agroball.diplom.nomoredomains.monster';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({  email, password })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      }
    })
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      }
    })
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
}

export const setUserInfo = (newName, newEmail) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newName,
      email: newEmail
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
}

export const addMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: movie.country || 'Wonderland',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image:'https://api.nomoreparties.co' + movie.image.url,
      trailer: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
      owner: movie.owner,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
}

export const movieDelete = (movie) => {
  return fetch(`${BASE_URL}/movies/${movie}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }

  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
}

export const changeSaveMovieStatus = (movie, isSaved) => {
  const id = movie.id || movie.movieId;
  if (isSaved) {

    return movieDelete(id)
  } else {

    return addMovie(movie)
  }
}


export const getFilms = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
}
