/* eslint-disable no-unused-vars */
import './style.css'
import memesData from '../../memeData'
import { useEffect, useState } from 'react'

export default function Content() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	})

	const [allMemes, setAllMemes] = useState([])

	function randomURL() {
		const memeUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url

		setMeme((prevState) => ({
			...prevState,
			randomImage: memeUrl,
		}))
	}

	function atChange(e) {
		const { name, value } = e.target

		setMeme((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes))
	}, [])

	return (
		<main className="container">
			<div className="content--inputs">
				<label className="input">
					<p className="input--text">Top text</p>
					<input className="input--bar" type="text" placeholder="Shut up" name="topText" onChange={atChange} value={meme.topText} />
				</label>

				<label className="input">
					<p className="input--text">Bottom text</p>
					<input className="input--bar" type="text" placeholder="And take my money" name="bottomText" onChange={atChange} value={meme.bottomText} />
				</label>
			</div>

			<button onClick={randomURL} className="content--button">
				Get a new meme image 🖼
			</button>

			<div className="content--meme">
				<img className="meme--img" src={meme.randomImage} alt="" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	)
}
