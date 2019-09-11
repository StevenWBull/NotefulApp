import React, { Component } from 'react';
import store from './dummyStore';
import Header from './Header/Header';
import FolderSection from './FolderSection/FolderSection';

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
        <FolderSection foldersFromState={this.state.store.folders} />
      </main>
      <section>

      </section>
      </>
    );
  }
}
