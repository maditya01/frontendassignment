import React from 'react'
import "../App.css"
import RandomHeadingContainer from './RandomHeadingContainer'


const DiscoverAvailableServicesContainer = () => {
	const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const year = currentDate.getFullYear();

	return (
		<div style={{}}>
			<section class="sect1 container px-6">
				<h1>
					Discover available services
				</h1>
				<div style={{}} class="container">
					<div style={{}} class="row gx-5">
						<div class="col-sm">
							<div class="column-cell p-3" id="day">
								<h1>
									{month}
								</h1>
								<div>Sample Heading</div>
								<div><RandomHeadingContainer /> </div>
							</div>
							
							
						</div>
						<div class="col-sm">
							<div class="column-cell p-3" id="month">
								<h1>
									{day}
								</h1>
								<div>Sample Heading</div>
								<div><RandomHeadingContainer /> </div>
							</div>
							
						</div>
						<div class="col-sm">
							<div class="column-cell p-3" id="year">
								<h1>
									{year}
								</h1>
								<div>Sample Heading</div>
								<div><RandomHeadingContainer /> </div>
							</div>
							
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default DiscoverAvailableServicesContainer