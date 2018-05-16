import React from 'react';
import Papa from 'papaparse';
import { Text } from 'bappo-components';

export default () => {
  return (
    <input
      type="file"
      id="fileUploader"
      onChange={() => {
        const file = document.getElementById("fileUploader").files[0];
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (res) => console.log(res)
        })
      }}
    />
  )
};
