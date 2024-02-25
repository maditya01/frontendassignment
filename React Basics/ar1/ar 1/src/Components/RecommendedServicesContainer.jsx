import React from 'react'
import "../App.css"
import RandomHeadingContainer from './RandomHeadingContainer'
import Rectangle3_1 from ".././assets/Rectangle 3-1.png"

const RecommendedServicesContainer = () => {
	return (
		<div style={{ backgroundColor: 'red' }} className="rec">
			<section class="sect2 container px-6">
				<h1>
					Explore recommended services for you
				</h1>

				<span class="container-fluid" style={{ display: 'inline-block', marginBottom: '10px' }}>
					<RandomHeadingContainer />
					<a  href="#" style={{color:'#007BFF'}}>Click here to Know more.</a>
				</span>

				<div class="container">
					<div class="row gx-5">
						<div class="col-sm">
							<div class="column-cell p-3" id="day">
							<img style={{height:'100%', width:'50%'}} src={Rectangle3_1} />
								<div class="card-overlay p-3">
									<h1>
										Questions?
									</h1>
									<span>
										Learn about our services through frequently asked questions.
									</span>
									<p><button>View FAQs</button></p>
								</div>
							</div>
						</div>
						<div class="col-sm">
							<div class="column-cell p-3" id="month">
								<img style={{height:'100%', width:'50%'}} src={Rectangle3_1} />
								<div class="card-overlay p-3">
									<h1>
										Stay up to date
									</h1>
									<span>
										Learn about our product updates
									</span>
									<p><button>View FAQs</button></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default RecommendedServicesContainer