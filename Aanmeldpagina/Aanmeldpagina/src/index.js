import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

function loadTeam() {
  ReactDOM.render(<TeamInschrijving/>, document.getElementById('root'));
  ReactDOM.render(<Menu2/>, document.getElementById('navigation'));
}
function loadIndividu() {
  ReactDOM.render(<IndividuInschrijving/>, document.getElementById('root'));
  ReactDOM.render(<Menu/>, document.getElementById('navigation'));
}
function loadMessage() {
  ReactDOM.render(<VeelDank/>, document.getElementById('dankuwel'));
}

class Menu extends React.Component{
  render(){
    return(
      <section>
      <h1>Schrijf je in voor de Verbeeten Challenge!</h1>
      <nav>
        <ul>
          <li id="one" class="selectedItem" onClick={loadIndividu}>Individueel</li>
          <li id="mult" onClick={loadTeam}>Team</li>
          <li>School</li>
          <li>Vrijwilliger</li>
        </ul>
      </nav>
      </section>
    );
  }
}
class Menu2 extends React.Component{
  render(){
    return(
      <section>
      <h1>Schrijf je in voor de Verbeeten Challenge!</h1>
      <nav>
        <ul>
          <li id="one"onClick={loadIndividu}>Individueel</li>
          <li id="mult" class="selectedItem" onClick={loadTeam}>Team</li>
          <li>School</li>
          <li>Vrijwilliger</li>
        </ul>
      </nav>
      </section>
    );
  }
}
class IndividuInschrijving extends React.Component{
  render(){
    return(
        <form id="individu">
          <input type="text" id="fname" name="fname" placeholder="Naam"/>
          <select className="large" id="locatie" name="locatie">
            <option className="no" value="">Locatie</option>
            <option value="tilburg">Tilburg</option>
            <option value="breda">Breda</option>
          </select>
          <select className="large" id="sport" name="sport">
            <option className="no" value="">Sport</option>
            <option value="wielRn">Wielrennen</option>
            <option value="hardL">Hardlopen</option>
            <option value="skeel">Skeeleren</option>
            <option value="bootC">Bootcamp</option>
          </select>
          <input type="text" id="eMail" name="eMail"  placeholder="E-Mail"/>
          <input type="text" id="telefn" name="telefn" placeholder="Telefoonnummer"/>
          <input type="text" id="leefTijd" name="leefTijd" placeholder="Volwassen/Kind"/>
        </form>
    );
  }
}
class TeamInschrijving extends React.Component{
  render(){
    return(
      <form id="team">
        <input type="text" id="fName" name="fName" placeholder="Naam"/>
        <input type="text" id="tName" name="tName" placeholder="Naam Teamcaptain"/>
        <select className="large" id="locatie"  placeholder="Naam">
          <option className="no" value="Locatie">Locatie</option>
          <option value="tilburg">Tilburg</option>
          <option value="breda">Breda</option>
        </select>
        <select className="large" id="sport" name="sport">
          <option className="no" value="">Sport</option>
          <option value="wielRn">Wielrennen</option>
          <option value="hardL">Hardlopen</option>
          <option value="skeel">Skeeleren</option>
          <option value="bootC">Bootcamp</option>
        </select>
        <input type="text" id="eMail" name="eMail" placeholder="E-Mail"/>
        <input type="text" id="telefn" name="telefn" placeholder="Telefoonnummer"/>
      </form>
    );
  }
}
class PrivacyVerklaring extends React.Component{
  render(){
    return(
      <div id="privacy">
        <input form="team" className="box" type="checkbox"/>
        <p className="akrd">Ik ga akkoord met de <a> privacy-en cookiestatement</a></p>
      </div>
    );
  }
}
class VolgendeStap extends React.Component{
  render(){
    return(
      <input onClick={loadMessage} className="knop" type="submit" value="Volgende stap"/>
    );
  }
}
class VeelDank extends React.Component{
  render(){
    return(
      <section id="dank">
        <h1>Bedankt voor uw aanmelding!</h1>
        <p id="textDank">U zult een E-mail bevestiging van ons krijgen met de inloggegevens om uw account te kunnen inzien.</p>
      </section>
    );
  }
}
ReactDOM.render(<Menu/>, document.getElementById('navigation'));
ReactDOM.render(<TeamInschrijving/>, document.getElementById('root'));
ReactDOM.render(<IndividuInschrijving/>, document.getElementById('root'));
ReactDOM.render(<PrivacyVerklaring/>, document.getElementById('statement'));
ReactDOM.render(<VolgendeStap/>, document.getElementById('button'));
