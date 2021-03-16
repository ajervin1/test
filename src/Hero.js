export function Hero () {
	return (
		<section className="hero pt-5 pb-5 mb-5">
			<div className="row align-items-center">
				<div className="col-6 text-center">
					<h2 className="display-5">
						We Help To Pass Your Classes For Free
					</h2>
					<p className="text-muted">
						We are always available to consult on taking your education to the next
						level so you can acheive your goal
					</p>
					<button className="btn btn-primary">
						Learn Now
					</button>
					<div className="socials">
					
					</div>
				</div>
				<div className="col-6">
					<div className={ 'w-50 mx-auto' }>
						<img src="./student.png" className="img-fluid"/>
					</div>
				
				</div>
			</div>
		</section>
	)
}
