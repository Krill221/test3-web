import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Provides from './__providers';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import PrivateMainLayout from './layouts/PrivateMainLayout';
import PublicMainLayout from './layouts/PublicMainLayout';
import { Users, Profile } from './pages/users';
//top for generator
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
          <PublicMainLayout path="/comments" component={Comments} />
          <PublicMainLayout path="/rooms" component={Rooms} />
          {/*single for generator*/}
          <Route exact path="/:menu([\D]*)" component={Footer} />
      </BrowserRouter>
    </Provides>
  );
}

export default App;
