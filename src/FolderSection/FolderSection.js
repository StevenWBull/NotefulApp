import React from 'react';
import FolderItem from './FolderItem';

export default function FolderSection(props) {

  const folderItems = props.foldersFromState.map( (folder, index) => <FolderItem {...folder} key={index} /> );

  return (
    <ul>
      {folderItems}
    </ul>
  )
}