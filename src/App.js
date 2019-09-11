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
        <Route exact path='/folder/:id'
               render={ ({match}) => <FolderSection foldersFromState={this.state.store.folders} /> }
        />
      </main>
      <section>
        <Route exact path='/note/:id'
               render={ ({match}) => <NoteSection itemsFromState={this.state.store.notes} /> }
        />
      </section>
      </>
    );
  }
}
