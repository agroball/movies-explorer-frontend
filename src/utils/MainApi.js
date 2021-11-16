class MainApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }


    _getResJson(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response.status);
    }



  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
    },
      body: JSON.stringify(name, email, password)
    })
      .then(response => {
        return this._getResJson(response);
      })
  };


  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
    },
      credentials: 'include',
      body: JSON.stringify({ password, email })
    })
      .then(response => {
        return this._getResJson(response);
      })
  };

  quit() {
    return fetch(`${this._url}/signout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
    },
      credentials: 'include',
    })
      .then(response => {
        return this._getResJson(response);
      })
  };

  getPersonInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
    },
    }).then(response => {
        return this._getResJson(response);
    })
  };

patchPersonInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(response => {
        return this._getResJson(response);
    });
}


    getInitialCards() {
        return fetch(`${this._url}/movies`, {
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
        }).then(response => {
            return this._getResJson(response);
        });
    }

    addCard(data) {
        return fetch(`${this._url}/movies`, {
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
            .then(response => {
                return this._getResJson(response);
            })
    }

    removeCard(id) {
        return fetch(`${this._url}/movies/${id}`, {
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

    checkToken() {
      return fetch(`${this._url}/users/me`, {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        }
      }).then(response => {
        return this._getResJson(response);
      })
    };
  }

export default new MainApi({url: `https://api.agroball.diplom.nomoredomains.monster`});
