import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './assets/css/materialize.css'
import './assets/css/style.css'
import './assets/css/bootstrap.css'
import './assets/css/font-awesome.min.css'



export default class App extends React.Component {
  static displayName = App.name;

  render() {
    return (

        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element}    />;
          })}
        </Routes>

    );
  }
}
