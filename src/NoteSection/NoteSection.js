import React from 'react';
import NoteItem from './NoteItem';

export default function NoteSection(props) {
  
  const noteItems = props.itemsFromState.map( (item, index) => <NoteItem {...item} key={index} />) ;

  return (
    <ul>
      {noteItems}
    </ul>
  )
}