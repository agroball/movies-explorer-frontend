export const BACK_URL = 'https://api.agroball.diplom.nomoredomains.monster';

 export const register = (name, email, password) => {
   return fetch(`${BACK_URL}/signup`, {
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
    return fetch(`${BACK_URL}/signin`, {
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

 export const signOut = () => {
    return fetch(`${BACK_URL}/signout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
    },
      credentials: 'include',
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.status)
        }
      })
  };

 export const getPersonInfo = () => {
    return fetch(`${BACK_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
    },
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.status)
        } else {
          return res.json();
        }
      })
  }

export const patchPersonInfo = (name, email) => {
    return fetch(`${BACK_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
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

  export const getInitialCards = () => {
        return fetch(`${BACK_URL}/movies`, {
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(res => {
            if (!res.ok) {
              return Promise.reject(res.status)
            } else {
              return res.json();
            }
          })
    }

   export const addCard = (data) => {
        return fetch(`${BACK_URL}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              country: data.country,
              director: data.director,
              duration: data.duration,
              year: data.year,
              description: data.description,
              image: data.image,
              trailer: data.trailer,
              thumbnail: data.image,
              movieId: data.movieId,
              nameRU: data.nameRU,
              nameEN: data.nameEN,
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

   export const removeCard = (id) => {
        return fetch(`${BACK_URL}/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (response.ok) {
                    return Promise.resolve("done");
                }
                return Promise.reject(new Error(`Ошибка: ${response.status}`));
            })
    }

   export const checkToken = () => {
     return fetch(`${BACK_URL}/users/me`, {
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
    }
