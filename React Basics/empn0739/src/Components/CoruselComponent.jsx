import React from 'react'

import Button from './Common/Button'

const CoruselComponent = () => {
    return (
        <div style={{
            height: '100%'
        }}><div id="carouselExample" className="carousel slide" style={{
            height: '60%'
        }}>
                <div className="carousel-inner" >
                    <div className="carousel-item active" style={{
                        paddingTop: '100px',
                        paddingLeft: '130px'
                    }}>
                        <h1>Corousel 1</h1>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquam accusamus sunt!<br /> Aliquid porro consectetur cum facere, modi nisi sequi!
                        </div>
                        <Button />
                    </div>
                    <div className="carousel-item " style={{
                        paddingTop: '100px',
                        paddingLeft: '130px'
                    }}>
                        <h1>Corousel 2</h1>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquam accusamus sunt!<br /> Aliquid porro consectetur cum facere, modi nisi sequi!
                        </div>
                        <Button />

                    </div>
                    <div className="carousel-item" style={{
                        paddingTop: '100px',
                        paddingLeft: '130px'
                    }}>
                        <h1>Corousel 3</h1>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquam accusamus sunt!<br /> Aliquid porro consectetur cum facere, modi nisi sequi!
                        </div>
                        <Button />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div></div>
    )
}

export default CoruselComponent