import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
                  <Route exact path='/'>
                    <App />
                  </Route>
                </BrowserRouter>, 
                document.getElementById('root')
              );