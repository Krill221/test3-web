import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Provides from './__providers';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import PrivateMainLayout from './layouts/PrivateMainLayout';
import PublicMainLayout from './layouts/PublicMainLayout';
import Users from './pages/users';
import Profile from './pages/users/profile';

//top for generator
import Likes from './pages/likes';
import Comments from './pages/comments';
import Rooms from './pages/rooms';

//<Route exact path="/" component={Menu} />


function App() {
  return (
    <Provides>
      <BrowserRouter>
          <Route path="/" render={history => <Menu history={history}/>} />
          <Route exact path="/"><Redirect to="/profile" /></Route>
          {/*users*/}
          <PrivateMainLayout path="/users" component={Users} />
          <PublicMainLayout exact path="/profile" component={Profile} />
          {/*list for generator*/}
          <PublicMainLayout path="/likes" component={Likes} />
          <PublicMainLayout path="/comments" component={Comments} />
          <PublicMainLayout path="/rooms" component={Rooms} />
          {/*single for generator*/}
          <Route exact path="/:menu([\D]*)" component={Footer} />
      </BrowserRouter>
    </Provides>
  );
}

export default App;
