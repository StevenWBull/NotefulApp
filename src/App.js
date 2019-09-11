import React, { Component } from 'react';
import store from './dummyStore';
import Header from './Header/Header';

export default class App extends Component {

  state = {
    store
  }

  render() {
    return (
      <>
      <header> 
        <Header />
      </header>
      <main> 

      </main>
      <section>

      </section>
      </>
    );
  }
}
