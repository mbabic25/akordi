 import React from "react";
import axios from "axios";
import { navigate } from "gatsby";
export class PopisPjesama extends React.Component {
  state = { izvodaci: [], pisme: [] };
  componentDidMount = () => {
    let url;
    if( window.history.state.idIzvodaca)
      url=`http://localhost:3000/pisme?izvodac=${
        window.history.state.idIzvodaca
      }`
    else url="http://localhost:3000/pisme";

    axios.get(url).then(response => {
      console.log(response);
      this.setState({ pisme: response.data });
    });
  };

  klikNaPismu = e => {
   
     const idPisme = e.target.innerText.substr(0, e.target.innerText.indexOf('.'));
      navigate("song#" + idPisme)
  };

  render = () => {
   
    if (!this.state.pisme.length) return null;
    return (
      <>
        <h1>Popis pjesama</h1>
        <div id="sve">
        <div id="left">
          <h3>Najposjećenije:</h3>
            <ol>
              
            <li><a href="http://localhost:8000/song#3">Ruzinavi brod</a></li>
            <li><a href="http://localhost:8000/song#9">Hodaj</a></li>
            <li><a href="http://localhost:8000/song#2">Tamara</a></li>
            <li><a href="http://localhost:8000/song#7">Boem u duši</a></li>
            <li><a href="http://localhost:8000/song#5">Neka mi ne svane</a></li>
            
            </ol>
          </div>
          <div id="central">
            {this.state.pisme.map((pisma, index) => (
              <div className="ime-pisme" onClick={this.klikNaPismu}>
              {(index !== 0  && index % 6 === 0)?
               <><br></br><div className="popispis">{`${pisma.id}. ${pisma.ime}`}</div></>
                :
               <div className="popispis">{`${pisma.id}. ${pisma.ime}`}</div>
              }
              </div>
            ))}
          </div>
          <div id="right">
            reklame
          </div>
        </div>
      </>
    );
  };
}
export default PopisPjesama;
