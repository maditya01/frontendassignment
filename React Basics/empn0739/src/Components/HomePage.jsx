import React from 'react'
import HeaderContainer from '../Components/HeaderContainer';
import DiscoverAvailableServicesContainer from '../Components/DiscoverAvailableServicesContainer';
import RecommendedServicesContainer from '../Components/RecommendedServicesContainer';
import FooterContainer from '../Components/FooterContainer';


const HomePage = () => {
    return (
        <div>
            <HeaderContainer />
            <DiscoverAvailableServicesContainer />
            <RecommendedServicesContainer />
            <FooterContainer />
        </div>
    )
}

export default HomePage