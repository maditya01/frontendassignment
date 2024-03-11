import React from 'react'
import CoruselComponent from './CoruselComponent'
import SearchContainer from './Common/SearchContainer'
import Rectangle35 from '../assets/Rectangle 35.png'
import Group50 from '../assets/Group 50.svg'
import userpng from './user.png'
import Polygon1 from '../assets/Polygon 1.svg'
import Path23 from "../assets/Path 23.svg"
import './HeaderContainer.css'
//`url(${Rectangle35})`

const HeaderContainer = () => {
    const divStyle = {
        margin: '4px',
        height: '60vh',
        borderRadius: '20px',
        backgroundImage: 'url(https://4kwallpapers.com/images/walls/thumbs_2t/3957.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '10px',
    }
    return (
        <div style={divStyle}>
            <header style={{
                padding: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <ul className='list-container'>
                    <li><img src={Group50} style={{
                        height: '30px',
                        width: '30px',
                        borderRadius: '4px'
                    }} /></li>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Services</li>
                    <li>ContactUs</li>
                </ul>
                <section style={{
                    width: '30%',
                    borderRadius:'10px',
                    backgroundColor: 'white'
                }}>
                    <SearchContainer />

                </section>
                <section style={{
                    marginRight: '4%',
                    display: 'flex',
                }}>
                    <img src={userpng} style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '100%',
                    }} alt="" />

                    <div style={{
                        backgroundColor: 'white',
                        color: 'purple',
                        fontFamily: 'Helvetica Neue',
                        display: 'flex',
                        height: '40px',
                        alignItems: 'center',
                        paddingRight: '4px',
                        paddingLeft: '4px',
                        marginLeft: '4px',
                        width: '92px',
                        borderRadius: '4px'
                    }}>John Doe <img style={{ marginLeft: '10px' }} src={Polygon1}></img></div>

                </section>
            </header>
            <div style={{
                height: '400px'
            }}>
                <CoruselComponent />
            </div>
        </div>
    )
}

export default HeaderContainer