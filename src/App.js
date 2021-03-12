import Header from './Containers/Header/index'
import Footer from './Containers/Footer/index'
import './App.css';
import Home from './Containers/HeaderLinks/Home/index';
import Newest from './Containers/HeaderLinks/New/index'
import Ask from './Containers/HeaderLinks/Ask/index'
import Jobs from './Containers/HeaderLinks/Jobs/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const headerlinks=['new','ask','show','jobs'];
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <center>
        <table id="main" border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef">
          <tbody>
            
              <tr bgcolor="#ff6600"><td><Header links={headerlinks}/></td></tr>
              <tr id="pagespace" title="New Links" style={{height:'10px'}}></tr>
              <tr>
                <td>
                    <Switch>
                      <Route exact path="/"><Home /></Route>
                      <Route path="/top"><Home /></Route>
                      <Route path="/new"><Newest /></Route>
                      <Route path="/ask"><Ask /></Route>
                      <Route path="/jobs"><Jobs /></Route>
                    </Switch>
                </td></tr>
              <tr><td><img src="s.gif" height="10" width="0" alt=""/>
              <Footer />
              </td></tr>
          </tbody>
        </table>  
      </center>
      </BrowserRouter>
    </div>
  );
}

export default App;
