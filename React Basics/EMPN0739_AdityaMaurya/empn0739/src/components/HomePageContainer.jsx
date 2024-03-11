import '../../src/App.css';
import { HeaderContainer } from './HeaderContainer';
import { FooterContainer } from './FooterContainer';
import { RecommendedServicesContainer } from './RecommendedServicesContainer';
import { DiscoverAvailableServicesContainer } from './DiscoverAvailableServicesContainer';

function HomePageContainer() {
  return (
    <div className="App">
      <HeaderContainer />
      <DiscoverAvailableServicesContainer />
      <RecommendedServicesContainer />
      <FooterContainer />
    </div>
  );
}

export default HomePageContainer;
