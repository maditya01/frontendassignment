import React from 'react'
import Card_1 from '../assets/Images/Card-1.png';
import Card_2 from '../assets/Images/Card-2.png';
export const RecommendedServicesContainer = () => {
  return (
    <div>
         <div>
      <div className="cont">
        <p className="fs-4 fw-bold">Explore recommended services for you</p>
      </div>
      <div className="cont">
        <p className="fs-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga iure perspiciatis earum, unde provident explicabo esse incidunt, aspernatur dolores possimus sequi exercitationem dignissimos voluptatibus consequatur quae culpa aliquid temporibus voluptatum?</p>
      </div>

      <section className="sect2 container px-6">
        <div>
          <div className="row gx-5">
            <div className="col-sm">
              <div className="column-cell p-3" id="day">
                <img src={Card_1} alt="Card 1" />
                <div className="card-overlay p-3">
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
            <div className="col-sm">
              <div className="column-cell p-3" id="month">
                <img src={Card_2} alt="Card 2" />
                <div className="card-overlay p-3">
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
    </div>
  )
}
