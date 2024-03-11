import React , {useState , useEffect} from 'react'

export const DiscoverAvailableServicesContainer = () => {
    const [day, setDay] = useState('loading ...');
    const [month, setMonth] = useState('loading ...');
    const [year, setYear] = useState('loading ...');

    const [day1, setDay1] = useState('');
    const [month1, setMonth1] = useState('');
    const [year1, setYear1] = useState('');

    useEffect(() => {
        const fetchDate = async () => {
            const d = new Date();
            setDay1(d.getDate());
            setMonth1(d.getMonth() + 1);
            setYear1(d.getFullYear());

            const fetchTrivia = async (url) => {
                try {
                    const response = await fetch(url);
                    const data = await response.text();
                    console.log(data);
                    return data;
                } catch (error) {
                    console.error('Error fetching trivia:', error);
                    return null;
                }
            };

            try {
                const [dayTrivia, monthTrivia, yearTrivia] = await Promise.all([
                    fetchTrivia(`http://numbersapi.com/${d.getDate()}`),
                    fetchTrivia(`http://numbersapi.com/${d.getMonth() + 1}`),
                    fetchTrivia(`http://numbersapi.com/${d.getFullYear()}/year`)
                ]);
                setDay(dayTrivia);
                setMonth(monthTrivia);
                setYear(yearTrivia);
            } catch (error) {
                console.error('Error fetching trivia:', error);
            }
        };

        fetchDate();
    }, []);

  return (
    <div>
        <div>
      <div className="cont">
        <p className="fs-4 fw-bold">Discover Availabe Service</p>
      </div>

      <section className="p-6">
        <div className="three-box text-start p-4">
          <div className="row gx-5">
            <div className="col-sm">
              <div className="bg-light p-3" id="month" style={{ minHeight: '150px' }}>
                <h1 className="box-heading">{month1}</h1>
                <h5 className="fw-bold box-subheading">Month</h5>
                <span>{month}</span>
              </div>
            </div>
            <div className="col-sm">
              <div className="bg-light p-3" id="day" style={{ minHeight: '150px' }}>
                <h1 className="box-heading">{day1}</h1>
                <h5 className="box-subheading fw-bold">Day</h5>
                <span className="box-subheading">{day}</span>
              </div>
            </div>
            <div className="col-sm">
              <div className="bg-light p-3" id="year" style={{ minHeight: '150px' }}>
                <h1 className="box-heading">{year1}</h1>
                <h5 className="box-subheading fw-bold">Year</h5>
                <span>{year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
