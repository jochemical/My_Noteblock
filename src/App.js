
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import NotesPage from './pages/NotesPage'
import NotePage from './pages/NotePage'
// Mind the 's'


function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">

          <Header />

          {/* Routing */}
          <Route component={NotePage} path="/note/:id" />
          <Route component={NotesPage} path="/" exact />
          {/* 'exact' makes sure this route is only used when the URL exactly match the path */}
          
        </div>
      </div>
    </Router>
  );
}

export default App;