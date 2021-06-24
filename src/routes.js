import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home'
import Register from './components/pages/register'
import Login from './components/pages/login'
import Notes from './components/pages/notes'
import PrivateRoute from './components/privateRoute'
import { AppContexts } from './contexts'

const Routes = () => {
  return (
    <BrowserRouter>
      <AppContexts>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/notes" component={Notes} />
          <Route path="/" component={() => <>Page not found!</>} />
        </Switch>
      </AppContexts>
    </BrowserRouter>
  )
}

export default Routes
