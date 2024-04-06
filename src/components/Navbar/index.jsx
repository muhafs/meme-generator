import './style.css'
import Logo from '../../assets/logo.png'

export default function Navbar() {
	return (
		<nav className="nav">
			<div className="nav--logo">
				<img src={Logo} alt="logo icon" />
				<h1>Meme Generator</h1>
			</div>

			<h2 className="nav--title">React Course - Project 3</h2>
		</nav>
	)
}
