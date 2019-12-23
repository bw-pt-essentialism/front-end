import React, { useState } from 'react'

function Carousel({ values }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const gotToSlide = index => {
        setActiveIndex(index)
    }

    const goToPrevSlide = e => {
        e.preventDefault()
        let index = activeIndex
        let slidesLength = values.length
        if (index < 1) {
            index = slidesLength
        }
        --index;
        setActiveIndex(index)
    }
    const goToNextSlide = () => {
        let index = activeIndex
        let slidesLength = values.length - 1;
        if (index === slidesLength) {
            index = -1
        }
        ++index;
        setActiveIndex(index)
    }
    return (
        
    )
}

export default Carousel

  
  
    render() {
      return (
        <div className="carousel">
          <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
  
          <ul className="carousel__slides">
            {this.props.slides.map((slide, index) =>
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            )}
          </ul>
  
          <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
  
          <ul className="carousel__indicators">
            {this.props.slides.map((slide, index) =>
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex==index} 
                onClick={e => this.goToSlide(index)}
              />
            )}
          </ul>
        </div>
      );
    }
  }