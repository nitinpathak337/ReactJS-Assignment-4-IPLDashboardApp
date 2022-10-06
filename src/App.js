import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Home exact path="/" />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <NotFound />
  </Switch>
)
export default App
