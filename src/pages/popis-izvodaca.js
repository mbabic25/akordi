import React from "react";
import axios from 'axios'
import { navigate } from "gatsby"
export class PopisIzvodaca extends React.Component {
  state = { izvodaci: [], pisme: [] };
  componentDidMount = () => {
    console.log("jeeee");
    axios.get("http://localhost:3000/izvodaci").then(response => {
      console.log(response);
      this.setState({ izvodaci: response.data });
    });
  };
  klikNaIzvodaca = e => {
   
    const idIzvodaca = e.target.innerText.substr(0, e.target.innerText.indexOf('.'));
    navigate("popis-pjesama",
    {
      state: { idIzvodaca },
    })

  };
  render = () => {
    console.log("refresh", this.state);
    if (this.state.izvodaci.length) {
      return (
        <>
          <h1>Popis izvođača</h1>
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
              <ul>
                { this.state.izvodaci.map((izvodac, index) => (
                  <div className="ime-izvodaca" onClick={this.klikNaIzvodaca}>
                    {(index % 6 === 0 && index !== 0 ) ?
                     <><br></br><div>{`${izvodac.id}. ${izvodac.ime} ${izvodac.prezime}`}</div></>
                      :
                     <div>{`${izvodac.id}. ${izvodac.ime} ${izvodac.prezime}`}</div>
                    }
                  </div>
                ))}
              </ul>
            </div>

            <div id="right">
              reklame
            </div>
          </div>
        </>
      );
    }
    return  (
      <>
        <h1>Popis izvođača</h1>
        <div id="sve">
          <div id="left">
          <h3>Najposjećenije:</h3>
            <ol>
              
            <li><a href="">Sve još miriše na nju</a></li>
            <li><a href="">Cesarica</a></li>
            <li><a href="">Ako me ostaviš</a></li>
            <li><a href="">Moja domovina</a></li>
            <li><a href="">Morska vila</a></li>
            
            </ol>
          </div>

        <div id="central">
          <ul>
          </ul>
        </div>

        <div id="right">
          reklame
      </div>
        </div>
      </>
    );

  };
}

export default PopisIzvodaca;



