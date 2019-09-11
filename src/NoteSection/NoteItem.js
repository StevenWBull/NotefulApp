import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteItem(props) {

  const itemPath = `/note/${props.id}`;

  return (
    <Link to={itemPath}>
      <li key={props.id} inFolder={props.folderId}>
        <h3>{props.name}</h3>
        <p>{props.modified}</p>
      </li>
    </Link>
  )
}