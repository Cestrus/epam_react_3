import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({component: Component, ...rest}) => (
// 	<Route {...rest} render={ props => (
// 		props.isLogin === true
// 			? <Component {...props} />
// 			: <Redirect to={'/login'} />
// 		)}/>
// 	)


const PrivateRoute = (Component, path) => (props) => (

	<Route path={path} exact render={(props) => (
		props.isLogin === true
			? <Component {...props} />
			: <Redirect to={'/login'}/>
	)}/>
)


export default PrivateRoute;