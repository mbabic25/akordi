import React from "react";
import { Document, Page } from "react-pdf";



export class Song extends React.Component {
  render() {

    const broj=window.location.hash.substr(1);


    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Document file={broj +'.pdf'}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

export default Song;