
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/quizcarousel.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                // background: "black", // Set arrow color to black
                zIndex: 1,
                // padding: "1rem",
                // margin:"0.5rem"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                // background: "black", // Set arrow color to black
                zIndex: 1,
                // padding: "1rem",
                // margin: "0.5rem",
            }}
            onClick={onClick}
        />
    );
}

const QuizCarousel = () => {
    let carouselStyle = { padding: "0 .2rem" };

    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint according to your needs
                settings: {
                    slidesToShow: 1, // Show 2 items per slide on smaller screens
                },
            },
            {
                breakpoint: 992, // Adjust this breakpoint according to your needs
                settings: {
                    slidesToShow: 2, // Show 3 items per slide on medium screens
                },
            },
            {
                breakpoint: 1200, // Adjust this breakpoint according to your needs
                settings: {
                    slidesToShow: 4, // Show 4 items per slide on larger screens
                },
            },
        ],
    };
    return (
        <div className="mySlider_container">
            <div className="slider-container mySlider">
                <Slider {...settings}>
                    <div>
                        <a href="/" className="media_element ">
                            <div
                                className="items_even self_center sliderItem"
                                style={carouselStyle}
                            >
                                <span>
                                    <img
                                        src="/defence-police.svg"
                                        alt="defence & police"
                                        width="30px"
                                    />
                                </span>
                                <p className="title">Current Affairs</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/" className="media_element ">
                            <div
                                className="items_even self_center sliderItem"
                                style={carouselStyle}
                            >
                                <span>
                                    <img
                                        src="/defence-police.svg"
                                        alt="defence & police"
                                        width="30px"
                                    />
                                </span>
                                <p className="title">Current Affairs</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/" className="media_element ">
                            <div
                                className="items_even self_center sliderItem"
                                style={carouselStyle}
                            >
                                <span>
                                    <img
                                        src="/defence-police.svg"
                                        alt="defence & police"
                                        width="30px"
                                    />
                                </span>
                                <p className="title">Current Affairs</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/" className="media_element ">
                            <div
                                className="items_even self_center sliderItem"
                                style={carouselStyle}
                            >
                                <span>
                                    <img
                                        src="/defence-police.svg"
                                        alt="defence & police"
                                        width="30px"
                                    />
                                </span>
                                <p className="title">Current Affairs</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/" className="media_element ">
                            <div
                                className="items_even self_center sliderItem"
                                style={carouselStyle}
                            >
                                <span>
                                    <img
                                        src="/defence-police.svg"
                                        alt="defence & police"
                                        width="30px"
                                    />
                                </span>
                                <p className="title">Current Affairs</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/" className="media_element ">
                            <div
                                className="items_even self_center sliderItem"
                                style={carouselStyle}
                            >
                                <span>
                                    <img
                                        src="/defence-police.svg"
                                        alt="defence & police"
                                        width="30px"
                                    />
                                </span>
                                <p className="title">Current Affairs</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/" className="media_element ">
                            <div
                                className="items_even self_center sliderItem"
                                style={carouselStyle}
                            >
                                <span>
                                    <img
                                        src="/defence-police.svg"
                                        alt="defence & police"
                                        width="30px"
                                    />
                                </span>
                                <p className="title">Current Affairs</p>
                            </div>
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default QuizCarousel;
