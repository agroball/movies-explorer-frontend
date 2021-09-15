import React from "react";
import { Route, Switch } from 'react-router-dom';
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


export const App = () => {

  const [isAuth, setIsAuth] = React.useState(true);
  const [isSavedMovies, setIsSavedMovies] = React.useState(true);
  const [isHidden, setIsHidden] = React.useState(true);
  const [isHiddenFooter, setIsHiddenFooter] = React.useState(true);

  function handleLink(boolean) {
    setIsAuth(boolean);
  }

  const [moviesBackground, setMoviesBackground] = React.useState('');
  const getMoviesUrl = window.location.pathname;

  React.useEffect(() => {
    if (getMoviesUrl ==="/movies") {
      setMoviesBackground('header_active');
    } else if (getMoviesUrl === "/saved-movies") {
      setMoviesBackground('header_active');
    } else {
      setMoviesBackground('');
    }
  }, [getMoviesUrl]);


  return (
    <div className="app">
      {isHidden && <Header isAuth={isAuth} moviesBackground={moviesBackground}/>}
      <Switch>
        <Route exact path="/">
          <Main setAuth={handleLink} />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies isSavedMovies={isSavedMovies} />
        </Route>
        <Route path="/profile">
          <Profile onIsHiddenFooter={setIsHiddenFooter} />
        </Route>
        <Route path="/signup">
          <Register onIsHidden={setIsHidden} />
        </Route>
        <Route path="/signin">
          <Login onIsHidden={setIsHidden} />
        </Route>
        <Route path="*">
          <Error404 onIsHidden={setIsHidden} />
        </Route>
      </Switch>
      {isHidden && isHiddenFooter && <Footer />}
    </div>
  );
}
