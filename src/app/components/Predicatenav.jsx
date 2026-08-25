import React, { useRef } from "react";
import { Container, Row, Col, Image, Tab, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Predicatenav = () => {
    const carouselRef = useRef(null);

    const responsive = {
        mobile: {
            breakpoint: { max: 575, min: 0 },
            items: 2,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 991, min: 576 },
            items: 4,
            slidesToSlide: 1,
        },
        laptop: {
            breakpoint: { max: 1199, min: 992 },
            items: 5,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 5000, min: 1200 },
            items: 7,
            slidesToSlide: 1,
        },
    };

    const navItems = [
        "Trending",
        "Politics",
        "Crypto",
        "Economy",
        "GeoPolitics",
        "Tech",
        "Climate & Science",
        "Finance",
        "Culture",
        "Weather",
        "Sports",
        "Software Products",
        "Test 1",
        "Test 2",
        "Test 3",
        "Test 4",
        "Test 5",
    ];

    return (
        <div className="pre-pages ">
            <div className="projectbg">

                <div className="wallet-page pb-4">
                    <Container className="sitecontainer rxt-wrapper-bg p-3">
                        <Row className="wlltpageblnce align-items-center">

                            <Col lg={9} md={7} sm={7} className="d-flex gap-2">
                                <div className="balanceshowt totblance p-2 w-100">
                                    <h5>
                                        Total Portfolio
                                        <span className="ps-2">
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                    </h5>

                                    <h4 className="h4">$ 0.00000</h4>
                                </div>

                                <div className="balanceshowt totblance p-2 w-100">
                                    <h5>
                                        Total Cash
                                        <span className="ps-2">
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                    </h5>

                                    <h4 className="h4">$ 0.00000</h4>
                                </div>
                            </Col>

                            <Col lg={3} md={5} sm={5} className="text-end">
                                <Image
                                    className="img-fluid-x"
                                    src="assets/images/prediction-market-image.svg"
                                />
                            </Col>

                        </Row>
                    </Container>
                </div>

             
                    <div className="boxtabb mb-3 mt-3">

                        <Carousel
                            responsive={responsive}
                            ref={carouselRef}
                            autoPlaySpeed={3000}
                            arrows={true}
                            infinite={true}
                            autoPlay={true}
                            className="raodmap py-2 tabbanner"
                        >
                            {navItems.map((item, index) => (
                                <div
                                    className="d-flex align-items-center justify-content-center gap-1"
                                    key={index}
                                >
                                    <button
                                        eventKey={item}
                                        href="/pre-home"
                                        className="tabbanner-link"
                                    >
                                        {item}
                                    </button>
                                </div>
                            ))}
                        </Carousel>

                    </div>
                

            </div>
        </div>
    );
};

export default Predicatenav;