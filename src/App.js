import './App.css'

import { NavBar } from './NavBar'
import { Hero } from './Hero'
import { Courses } from './Courses'





function App () {
	return (
		<div className="App container">
			{/*NavBar*/ }
			<NavBar/>
			{/*Hero*/ }
			<Hero/>
			{/*	Courses*/ }
			<Courses/>
			
			<section className="news">
				<h2>News</h2>
			</section>
			<section className="testimonials">
				<h2>Testimonials</h2>
			</section>
			<section className="footer">
				<h2>Footer</h2>
			</section>
		</div>
	)
}

export default App
