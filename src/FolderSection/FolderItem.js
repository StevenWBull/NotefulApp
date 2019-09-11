import React from 'react';
import { Link } from 'react-router-dom';

export default function FolderItem(props) {

  const folderPath = `/folder/${props.id}`;

  return (
    <Link to ={ folderPath }>
      <li key={props.id}>
        {props.name}
      </li>
    </Link>
  )
}