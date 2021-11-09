import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
import MainApi from "../../utils/MainApi";
import MovieApi from "../../utils/MovieApi";
import * as search from "../../utils/search";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";


function  App(props) {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({ email: '', name: '', id: ''});

  const [headerMenu, setHeaderMenu] = useState(false);//Открывание меню хедера
  const [editForm, setEditForm] = useState(false);//Открыть форму изменения данных

  const [allMovies, setAllMovies] = useState([]);//Все фильмы
  const [movies, setMovies] = useState([]);//Поиск по фильмам
  const [savedMovies, setSavedMovies] = useState([]);//Все сохраненные фильмы
  const [findSavedMovies, setFindSavedMovies] = useState([]);//Поиск по сохраненным фильмам
  const [preloader, setPreloader] = useState(false);//Прелоадер крутится - загрузка мутится
  const [errorText, setErrorText] = useState({text: ""});
  const [successText, setSuccessText] = useState({text: ""});
  const [findNoMovies, setFindNoMovies] = useState(false);
  const [findNoSavedMovies, setFindNoSavedMovies] = useState(false);
  const history = useHistory();
  const [moviesBackground, setMoviesBackground] = React.useState('header_active');
  const getMoviesUrl = window.location.pathname;

  useEffect(() => {
    if (getMoviesUrl ==="/") {
      setMoviesBackground('');
    }
  }, [getMoviesUrl]);


  function handleNavigatClick() {
    setHeaderMenu(true)
  }

  function handleEditClick() {
    setEditForm(true)
  }

  function closeAll() {
    setHeaderMenu(false)
    setEditForm(false)
    setErrorText({text: ""})
  }

  function handleRegister(email, password, name) {
    MainApi.register(email, password, name)
      .then((res) => {
        if (res) {handleLogin(email, password);
          console.log("Функция регистрации");
        }
      })
      .then(() => history.push('/movies'))
      .catch(error => {
        if (error === 409) {
          setErrorText({text: "Такой email уже существует"});
        }
        else {
          setErrorText({text: "Что-то пошло не так!"});
        }
        setTimeout(()=>{setErrorText({text: ""})}, 4000);
      });
  }

  function handleLogin({ email, password }) {
    MainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('loggedIn', 'true');
          tokenCheck();
          history.push("/movies");
        }
      })
      .catch(error => {
        if (error === 401) {
          setErrorText({text: "Неправильные почта или пароль"});
        }
        else {
          setErrorText({text: "Что-то пошло не так!"});
        }
        setTimeout(()=>{setErrorText({text: ""})}, 4000);
      });
  }

  function tokenCheck() {
    if (localStorage.getItem('loggedIn')) {
      MainApi.checkToken().then((res) => {
        if (res) {
          setUserData({ email: res.email, name: res.name, id: res._id });
          setLoggedIn({
            loggedIn: true,
          });
          localStorage.setItem('loggedIn', 'true');
        };
      })
        .catch((error) => {
          if (error===401){
            console.log(`Токен не верен`)
            MainApi.quit();
          }
          else {
            console.log(`Ошибка проверки токена: ${error}`)
          }
        })
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  function handleUpdateUser({ email, name }) {
    MainApi.patchPersonInfo(name, email)
      .then((result) => {
        setUserData({
          name: result.name,
          email: result.email,
        })
        setSuccessText({text: "Данные изменены"});
        setTimeout(()=>{closeAll()}, 2000);
        setTimeout(()=>{setSuccessText({text: ""})}, 2000);
      })
      .catch(error => {
        if (error === 409) {
          setErrorText({text: "Такой email уже зарегистрирован"});
        }
        else {
          setErrorText({text: "Что-то пошло не так!"});
        }
        setTimeout(()=>{setErrorText({text: ""})}, 4000);
      });
  }

  function LogOut() {
    MainApi.quit();
    setLoggedIn(false);
    localStorage.removeItem('MOVIES_ARRAY');
    localStorage.removeItem('MOVIES_FIND');
    localStorage.removeItem('SAVED_MOVIES');
    localStorage.removeItem('SAVED_MOVIES');
    localStorage.removeItem('SAVED_MOVIES_FIND');
    localStorage.removeItem('FIND_NOTHING');
    localStorage.removeItem('NO_FIND_MOVIES_COLLECTION');
    localStorage.removeItem('loggedIn');
    setMovies([]);
    setSavedMovies([]);
    setFindSavedMovies([]);
    setFindNoMovies(false);
    setFindNoSavedMovies(false);
    setUserData({ email: '', name: '', id: '' })
    history.push('/');
  }


  function getAllMovies() {
    MoviesApi
      .getMovies()
      .then((res) => {
        const moviesArray = res.map((item) => {
          return {
            image: `https://api.nomoreparties.co${item.image.url}`,
            trailer: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            nameEN: item.nameEN,
            nameRU: item.nameRU,
            movieId: item.id,
          };
        });
        setAllMovies(moviesArray)
        localStorage.setItem("MOVIES_ARRAY", JSON.stringify(moviesArray));
        return moviesArray;
      })
      .catch(() => {
        localStorage.removeItem("MOVIES_ARRAY");
        console.log("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
        setErrorText({text: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."});
        setTimeout(()=>{setErrorText({text: ""})}, 4000);
      });
  }

  function getSavedMovies(userData){
    MainApi
      .getInitialCards()
      .then((res) => {
        const newArr = res.filter(movie => movie.owner === userData.id)
        setSavedMovies(newArr);
        localStorage.setItem('SAVED_MOVIES', JSON.stringify(newArr));
        return newArr;
      }).catch(()=>{
      localStorage.removeItem('SAVED_MOVIES');
      setErrorText({text: "Проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."});
    })
  }

  function requestConverter(request){
    let result;
    const space = ' ';
    const string = (JSON.stringify(request).replace(/[{}:,."]/g, "").replace(/movie/g, "")).toLowerCase();
    if (string.length > 0){
      result = string.split(space);
      return result;
    } else {
      setErrorText({text: "Нужно ввести ключевое слово"});
      setTimeout(()=>{setErrorText({text: ""})}, 4000);
      setPreloader(false);
      return}
  }

  useEffect(() => {
    if (loggedIn){
      if (localStorage.getItem('MOVIES_ARRAY')){
        setAllMovies(JSON.parse(localStorage.getItem('MOVIES_ARRAY')));
      }
      else{
        getAllMovies()
      }
      if (localStorage.getItem('SAVED_MOVIES')){
        setSavedMovies(JSON.parse(localStorage.getItem('SAVED_MOVIES')));
      }
      else{
        getSavedMovies(userData)
      }
      if (localStorage.getItem('MOVIES_FIND')){
        setMovies(JSON.parse(localStorage.getItem('MOVIES_FIND')));
      }
      if (localStorage.getItem('SAVED_MOVIES_FIND')){
        setFindSavedMovies(JSON.parse(localStorage.getItem('SAVED_MOVIES_FIND')));
      }
      if (localStorage.getItem('FIND_NOTHING')){
        setFindNoMovies(true);
      }
      if (localStorage.getItem('NO_FIND_MOVIES_COLLECTION')){
        setFindNoSavedMovies(true);
      }
    }
  }, [loggedIn, userData]);

  function arrIterating(array, str){
    if (str !==null  && array !==undefined){
      for (let i = 0; i < array.length; i++) {
        let res;
        res = str.toLowerCase().includes(array[i]);
        if (res === true){
          return res
        }
      }
      return
    }
    else {
      return
    }
  }


  function Search(movie, request){
    const Arr = movie.filter((item) => {
      return (arrIterating(request, item.nameRU) || arrIterating(request, item.nameEN) || arrIterating(request, item.director) || arrIterating(request, item.country))
    })
    return Arr;
  }


  function moviesSearch(request){
    if (request.movie !== '' && request.movie !== undefined){
      setPreloader(true);
      setMovies([]);
      setFindNoMovies(false);
      const handleRequest = requestConverter(request);
      setTimeout(()=>{
        if (Search(allMovies, handleRequest).length!==0){
          localStorage.setItem('MOVIES_FIND', JSON.stringify(Search(allMovies, handleRequest)));
          setMovies(Search(allMovies, handleRequest));
          localStorage.removeItem('FIND_NOTHING')
          setFindNoMovies(false);
          setPreloader(false);
        }
        else {
          setMovies([]);
          localStorage.removeItem('MOVIES_FIND');
          setFindNoMovies(true);
          localStorage.setItem('FIND_NOTHING', true)
          setPreloader(false);
        }
      }, 3000)
    } else {
      setErrorText({text: "Нужно ввести ключевое слово"});
      setTimeout(()=>{setErrorText({text: ""})}, 4000);
    }
  }

  function savedMoviesSearch(request){
    if (request.movie !== '' && request.movie !== undefined){
      setPreloader(true);
      setFindSavedMovies([]);
      setFindNoSavedMovies(false);
      const handleRequest = requestConverter(request);
      setTimeout(()=>{
        if (Search(savedMovies, handleRequest).length!==0){
          localStorage.setItem('SAVED_MOVIES_FIND', JSON.stringify(Search(savedMovies, handleRequest)));
          setFindSavedMovies(Search(savedMovies.filter(movie => (movie.owner === userData.id)), handleRequest));
          localStorage.removeItem('NO_FIND_MOVIES_COLLECTION')
          setFindNoSavedMovies(false);
          setPreloader(false);
        }
        else {
          setFindSavedMovies([]);
          localStorage.removeItem('SAVED_MOVIES_FIND');
          setFindNoSavedMovies(true);
          localStorage.setItem('NO_FIND_MOVIES_COLLECTION', true)
          setPreloader(false);
        }
      }, 3000)
    } else {
      setErrorText({text: "Нужно ввести ключевое слово"});
      setTimeout(()=>{setErrorText({text: ""})}, 4000);
    }
  }

  function addMovie(movie) {
    MainApi.addCard(movie)
      .then((newCard) => {
        setSavedMovies(savedMovies => ([...savedMovies, newCard]));
      })
      .catch((error) => {
        console.log(`На сервере произошла ошибка: ${error}`);
      });
  }

  function deleteMovie(movie) {
    const id = savedMovies.find((card) => (card.movieId === movie.movieId && card.owner === userData.id))._id;
    MainApi.removeCard(id)
      .then(() => {
        setSavedMovies(savedMovies.filter(state => state._id !== id));
        setFindSavedMovies(findSavedMovies.filter(state => state._id !== id));
      })
      .catch((error) => {
        console.log(`На сервере произошла ошибка: ${error}`);
      });
  }

  useEffect(() => {
    loggedIn && localStorage.setItem('SAVED_MOVIES', JSON.stringify(savedMovies))
  }, [loggedIn, savedMovies]);

  useEffect(() => {
    loggedIn && localStorage.setItem('SAVED_MOVIES_FIND', JSON.stringify(findSavedMovies))
  }, [loggedIn, findSavedMovies]);

  function isLiked(movie) {
    return savedMovies.some((item) => item.movieId === movie.movieId && item.owner === userData.id);
  }

  return (
    <CurrentUserContext.Provider value={userData}>
      <>
    < div="app">
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
          userData={userData}
          isOpen={editForm}
          onEditBtnClick={handleEditBtnClick}
          onSave={handleUpdateUser}
          onClose={closeAll}
          onLogOut={()=>{LogOut()}}
          error={errorText}
          success={successText}
        />
        <Route path="/signup">
          {isAuth ? <Redirect to="/" /> :
            <Register
              handleRegister={handleRegister}
              error={errorText}
            />}
        </Route>
        <Route path="/signin">
          {isAuth ? <Redirect to="/" /> :
            <Login
              handleLogin={handleLogin}
              error={errorText}
            />}
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      {isHidden && isHiddenFooter && <Footer />}
    </div>
    </>
      </CurrentUserContext.Provider>
  );
}

export default App;
