import React from "react";
import { Route, Switch, withRouter, useLocation } from 'react-router-dom';
import './App.css';
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Error404 } from "../Error404/Error404";
import { Footer } from "../Footer/Footer";
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import * as mainApi from "../../utils/MainApi";
import * as moviesApi from "../../utils/MovieApi";
import * as search from "../../utils/search";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function  App(props) {

  const [isAuth, setIsAuth] = React.useState(false);
  // const [isSavedMovies, setIsSavedMovies] = React.useState(true);
  const [isHidden, setIsHidden] = React.useState(true);
  const [isHiddenFooter, setIsHiddenFooter] = React.useState(true);
  const [moviesBackground, setMoviesBackground] = React.useState('header_active');
  const getMoviesUrl = window.location.pathname;
  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "", id: "" });
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isOpenSuccess, setIsOpenSuccess] = React.useState(false);
  const [isOpenFail, setIsOpenFail] = React.useState(false);
  const [isPreloader, setIsPreloader] = React.useState(false);
  const [loadedFilms, setLoadedFilms] = React.useState(0);
  const [isNotFoundMovies, setIsNotFoundMovies] = React.useState(true);
  const [isServerMoviesError, setIsServerMoviesError] = React.useState(false);
  const [isComponentSavedMovies, setIsComponentSavedMovies] = React.useState(false);
  const [isFormDisabled, setIsFormDisabled] = React.useState(false);
  const location = useLocation();

  function modalClose() {
    setIsOpenSuccess(false)
    setIsOpenFail(false)
  }

  function handleLink(boolean) {
    setIsAuth(boolean);
  }

  React.useEffect(() => {
    if (getMoviesUrl ==="/") {
      setMoviesBackground('');
    }
  }, [getMoviesUrl]);

  function handleRegister(name, email, password) {
    setIsFormDisabled(true)
    mainApi.register(name, email, password)
      .then((res) => {
        props.history.push('/movies');
        setIsFormDisabled(false)
      })
      .catch((err) => {
          setIsOpenFail(true)
          setIsFormDisabled(false)
          console.log(err)
        }
      );
  }

  function handleLogin(email, password) {
    setIsFormDisabled(true)
    mainApi.authorize(email, password)
      .then((res) => {
        setIsAuth(true)
        props.history.push('/movies');
        localStorage.setItem('auth', true);
        setIsFormDisabled(false)
      })
      .catch((err) => {
          setIsOpenFail(true)
          setIsFormDisabled(false)
          console.log(err)
        }
      );
  }

  function handleTokenCheck() {
    if (localStorage.getItem('auth')) {
      mainApi.checkToken()
        .then((res) => {
          if (res) {
            setIsAuth(true);
            props.history.push(location.pathname.toString())
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }

  function handleSignOut() {
    mainApi.signOut()
      .then((res) => {
        props.history.push('/');
        setIsAuth(false);
        setMovies([])
        setSavedMovies([])
        localStorage.removeItem('auth');
        localStorage.removeItem('movies');
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('keyValueSavedMovies');
        localStorage.removeItem('keyValueMovies');
      })
      .catch((err) => {
          console.log(err)
        }
      );
  }

  function handleUpdateUser(data) {
    setIsFormDisabled(true)
    mainApi.setUserInfo(data.name, data.email)
      .then((res) => {
        setCurrentUser(res);
        setIsOpenSuccess(true);
        setIsFormDisabled(false)
      })
      .catch((err) => {
        setIsOpenFail(true)
        setIsFormDisabled(false)
        console.log(err);
      });
  }

  function getFilms(keyValue) {
    setIsPreloader(true)
    setIsNotFoundMovies(false)
    setIsFormDisabled(true)
    moviesApi.getFilms()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
        setMovies(search.searchMovies(keyValue, JSON.parse(localStorage.getItem('movies'))))
        handleNotFoundMovies(movies)
        setIsPreloader(false)
        setIsServerMoviesError(false)
        setIsFormDisabled(false)
      })
      .catch((err) => {
        console.log(err);
        setIsServerMoviesError(true)
        setIsNotFoundMovies(false)
        setIsFormDisabled(false)
      });
  }

  function handleNotFoundMovies(films) {
    if (films.length === 0) {
      setIsNotFoundMovies(true)
    }
  }

  function findFilms(keyValue) {
    setLoadedFilms(0);
    setIsNotFoundMovies(true)
    localStorage.setItem('keyValueMovies', keyValue)
    mainApi.getFilms()
      .then((res) => {
        setSavedMovies(res)
      })
      .catch((err) => {
        console.log(err)
      });
    if (!localStorage.getItem('movies')) {
      getFilms(keyValue);
    } else {
      setMovies(search.searchMovies(keyValue, JSON.parse(localStorage.getItem('movies'))))
      handleNotFoundMovies(movies)
    }
  }

  function updateToSaveMovies(id) {
    const films = JSON.parse(localStorage.getItem('savedMovies'));
    localStorage.setItem('savedMovies', JSON.stringify(films.filter((film) => { return film.movieId !== id })))
  }

  function findSavedMovies(keyValue) {
    setSavedMovies(search.searchMovies(keyValue, JSON.parse(localStorage.getItem('savedMovies'))))
    handleNotFoundMovies(savedMovies)
    localStorage.setItem('keyValueSavedMovies', keyValue)
  }

  function findByDuration(setFilms, films) {
    setFilms(search.searchMoviesByDuration(films))
    handleNotFoundMovies(films)
  }

  function handleSavedMovies() {
    setIsNotFoundMovies(false)
    if (isComponentSavedMovies) setIsPreloader(true)
    mainApi.getFilms()
      .then((res) => {
        localStorage.setItem('savedMovies', JSON.stringify(res))
        setSavedMovies(res)
        handleNotFoundMovies(savedMovies)
        setIsPreloader(false)
        setIsServerMoviesError(false)
      })
      .catch((err) => {
        console.log(err);
        setIsServerMoviesError(true)
        setIsNotFoundMovies(false)
      });
  }

  function handleDeleteSavedMovie(movie) {
    mainApi.movieDelete(movie.movieId)
      .then(() => {
        setSavedMovies((movies) => movies.filter((film) => film.movieId !== movie.movieId))
        updateToSaveMovies(movie.movieId)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlesavedMovie(movie) {
    const id = movie.id || movie.movieId;
    const isLiked = savedMovies.some(item => item.movieId === id && item.owner === currentUser.id);
    mainApi.changeSaveMovieStatus(movie, isLiked)
      .then((newMovie) => {
        handleSavedMovies()
        setMovies((films) =>
          films.map((film) => (
            film.id === movie.movieId ? newMovie : film))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  React.useEffect(() => {
    if (isAuth) {
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {
          console.log(err);
        });
      if (localStorage.getItem('keyValueMovies')) {
        findFilms(localStorage.getItem('keyValueMovies'))
      }
      if (localStorage.getItem('keyValueSavedMovies')) {
        findSavedMovies(localStorage.getItem('keyValueSavedMovies'))
      }
    }
  }, [isAuth]);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
      {isHidden && <Header isAuth={isAuth} moviesBackground={moviesBackground}/>}
      <Switch>
        <Route exact path="/">
          <Main setAuth={handleLink} />
        </Route>
        <ProtectedRoute
          path='/movies'
          component={Movies}
          isAuth={isAuth}
          onGetFilms={findFilms}
          movies={movies}
          onSetMovies={setMovies}
          onHandleMovieButton={handlesavedMovie}
          savedMovies={savedMovies}
          onFindByDuration={findByDuration}
          isLoading={isPreloader}
          onLoadedFilms={setLoadedFilms}
          loadedFilms={loadedFilms}
          isNotFoundMovies={isNotFoundMovies}
          onIsNotFoundMovies={setIsNotFoundMovies}
          isServerMoviesError={isServerMoviesError}
          isFormDisabled={isFormDisabled}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isAuth={isAuth}
          savedMovies={savedMovies}
          onHandleMovies={handleSavedMovies}
          onHandleMovieButton={handleDeleteSavedMovie}
          onGetFilms={findSavedMovies}
          onFindByDuration={findByDuration}
          onSetMovies={setSavedMovies}
          isLoading={isPreloader}
          isNotFoundMovies={isNotFoundMovies}
          isServerMoviesError={isServerMoviesError}
          onComponentSavedMovies={setIsComponentSavedMovies}
          onLoadedFilms={setLoadedFilms}
          onIsNotFoundMovies={setIsNotFoundMovies}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onIsHiddenFooter={setIsHiddenFooter}
          isAuth={isAuth}
          onSignOut={handleSignOut}
          onUpdateUser={handleUpdateUser}
          isFormDisabled={isFormDisabled}
        />
        <Route path="/signup">
          <Register
            onIsHidden={setIsHidden}
            onRegister={handleRegister}
            isFormDisabled={isFormDisabled} />
        </Route>
        <Route path="/signin">
          <Login
            onIsHidden={setIsHidden}
            onLogin={handleLogin}
            isFormDisabled={isFormDisabled} />
        </Route>
        <Route path="*">
          <Error404 onIsHidden={setIsHidden} />
        </Route>
      </Switch>
      {isHidden && isHiddenFooter && <Footer />}
      </CurrentUserContext.Provider>
      <InfoToolTip
        title="Редактирование профиля прошло успешно"
        isOpen={isOpenSuccess}
        onClose={modalClose} />
      <InfoToolTip
        title="Произошла ошибка"
        isOpen={isOpenFail}
        onClose={modalClose} />
    </div>
  );
}

export default withRouter(App);
