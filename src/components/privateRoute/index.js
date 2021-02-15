import { Route, Redirect } from 'react-router-dom'

export default function PrivateRouteComponent ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  )
}
