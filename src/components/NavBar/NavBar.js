import React from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { navLinks } from '../../Utils/NavLinks'
import Home from '../../Pages/Home/Home'
import Press from '../../Pages/Press/Press'
import Shows from '../../Pages/Shows/Shows'
import MoreCat from '../../Pages/MoreCat/MoreCat'
import './NavBar.scss'

const [red, green, blue, alpha] = [
	Math.random() * 255,
	Math.random() * 255,
	Math.random() * 255,
	Math.random()
]

const NavBar = () => {
	return (
		<React.Fragment>
			<nav
				style={{ background: `rgba(${red}, ${green}, ${blue}, ${alpha})` }}
				className="navContainer"
			>
				{navLinks.map(link => (
					<span key={link.value} className="navLink">
						{link.external ? (
							<a href={link.path}>
								<p id={link.value} className="navText">
									{link.text}
								</p>
							</a>
						) : (
							<Link to={link.path}>
								<p id={link.value} className="navText">
									{link.text}
								</p>
							</Link>
						)}
					</span>
				))}
			</nav>
			<Switch>
				<Route path="/press" render={props => <Press {...props} />} />
				<Route path="/shows" render={props => <Shows {...props} />} />
				<Route path="/ok" render={props => <MoreCat {...props} />} />
				<Route path="/" render={props => <Home {...props} />} />
				<Route path="/*" render={props => <Redirect to="/" {...props} />} />
			</Switch>
		</React.Fragment>
	)
}

export default NavBar
