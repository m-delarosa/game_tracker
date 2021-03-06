import React from 'react'
import { StyledGameCarousel } from '../styles/StyledGameCarousel'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"


const GameCarousel = ({ video, preview, background, screenshots, gameSlug }) => {
    const screenshotsCollection = screenshots.map((image, index) => {
        return <img className="screenshot" src={image.image} alt={gameSlug} key={`img${index}`} />
    })

    return (
        <StyledGameCarousel>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {screenshotsCollection}
                <video className='video' controls={true} name="media" ><source src={video} type="video/mp4" /></video>
            </Carousel>
        </StyledGameCarousel >
    )



}

export default GameCarousel