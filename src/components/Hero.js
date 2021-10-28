import React from 'react'

import "../css/App.css"
import "../css/utilities.css"

const Hero = (props) => {
    //https://css-tricks.com/css-only-carousel/
    return (
        <section className={props.addSliderState ? "" : "hide"}>
            <div className="carousel">
                <ol className="carousel__viewport">
                    <li id="carousel__slide1"
                        tabIndex="0"
                        className="carousel__slide">
                        <div className="carousel__snapper">
                            <a href="#carousel__slide3" className="carousel__prev">Go to last slide</a>
                            <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
                        </div>
                    </li>
                    <li id="carousel__slide2"
                        tabIndex="0"
                        className="carousel__slide">
                        <div className="carousel__snapper"></div>
                            <a href="#carousel__slide1" className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide3"
                        tabIndex="0"
                        className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide2" className="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide1" className="carousel__next">Go to next slide</a>
                    </li>
                </ol>
            </div>

        <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
                </li>
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
                </li>
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
                </li>
            </ol>
        </aside>
    </section>
    )    
}

export default Hero