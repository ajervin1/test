export function NavBar () {
	return (
		<header className="d-flex justify-content-between pt-4 align-items-center mb-5">
			<div className="header-left">
				<h4 className={ 'm-0' }>Twelfth Level</h4>
			</div>
			<form>
				<input type="text" className="form-control" placeholder="Search Courses"/>
			</form>
			<div className="header-right">
				<nav className="nav">
					<a className="nav-item nav-link" href="/">Home</a>
					<a className="nav-item nav-link" href="/">About</a>
					<a className="nav-item nav-link" href="/">Courses</a>
					<a className="nav-item nav-link" href="/">Contact</a>
					<button className={ 'btn btn-outline-accent' }>Sign Up</button>
				</nav>
			</div>
		</header>
	)
}
