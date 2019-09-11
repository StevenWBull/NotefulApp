import React, { Component } from 'react';
import store from './dummyStore';
import Header from './Header/Header';
import FolderSection from './FolderSection/FolderSection';
import NoteSection from './NoteSection/NoteSection';
import { Route } from 'react-router-dom';

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
        <Route path='/folder/:id'
          <FolderSection foldersFromState={this.state.store.folders} />
        />
      </main>
      <section>
        <Route path='/note/:id'
          <NoteSection itemsFromState={this.state.store.notes} />
        />
      </section>
      </>
    );
  }
}
