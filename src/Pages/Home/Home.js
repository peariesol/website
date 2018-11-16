import React, { Component } from 'react'
import CenterColumn from './CenterColumn/CenterColumn'
import Netscape from 'Components/Netscape/Netscape'
import Alert from 'Components/Alert/Alert'
import './Home.css'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mouseX: null,
			mouseY: null,
			netscapeFollow: false,
			invertColors: false,
			catSpin: '',
			secretGlow: false,
			secretClicked: false
		}
	}

	trackMouse = e => {
		this.setState({
			mouseX: e.clientX,
			mouseY: e.clientY
		})
	}

	setNetscapeFollow = () => {
		this.setState({ netscapeFollow: true })
	}

	setInvertColors = () => {
		this.setState({ invertColors: !this.state.invertColors })
	}

	catSpin = () => {
		this.setState({ catSpin: 'catSpin' })
		setTimeout(() => this.setState({ catSpin: '' }), 600)
	}

	handleHorseHover = () => {
		this.setState({ secretGlow: true })
	}

	handleHorseUnHover = () => {
		this.setState({ secretGlow: false })
	}

	handleSecret = () => {
		this.setState({ secretClicked: !this.state.secretClicked })
	}

	render() {
		const {
			mouseX,
			mouseY,
			netscapeFollow,
			invertColors,
			catSpin,
			secretGlow,
			secretClicked
		} = this.state

		return (
			<div
				className="home"
				onMouseMove={this.trackMouse}
				style={{
					backgroundImage: `url(${
						!secretClicked
							? 'textures/hauntedhouselightening-compress.gif'
							: 'textures/angel-with-bone-wings.jpg'
					})`
				}}
			>
				<img
					className="bloodDrip"
					src="gifs/blood_drip.gif"
					alt="blood drip"
					style={{ marginTop: -2 }}
				/>
				<div className="homeTop">
					<img
						className="cat"
						src="images/cat-compress.gif"
						alt="cat walk"
						onClick={this.setInvertColors}
					/>

					<CenterColumn
						handleHorseHover={this.handleHorseHover}
						handleHorseUnHover={this.handleHorseUnHover}
						invertColors={invertColors}
						setInvertColors={this.setInvertColors}
					/>
					<div>
						<img
							className={`imgHorizontalFlip cat ${catSpin}`}
							src="images/cat-compress.gif"
							alt="cat walk"
							onClick={this.catSpin}
						/>
						<div
							onClick={this.handleSecret}
							className={`secretBox ${secretGlow && 'secretGlow'}`}
						/>
					</div>
				</div>
				<div className="homeBottom">
					<img src="icons/lightening_break-compress.gif" alt="lightening" />
				</div>
				<Alert />
				<img
					className="bloodDrip"
					src="gifs/blood_drip.gif"
					alt="blood drip"
					style={{
						margin: window.innerWidth < 500 ? '3px 0' : 0,
						transform: 'rotate(180deg)'
					}}
				/>
				<Netscape
					setNetscapeFollow={this.setNetscapeFollow}
					netscapeFollow={netscapeFollow}
					mouseX={mouseX}
					mouseY={mouseY}
				/>
			</div>
		)
	}
}

export default Home
