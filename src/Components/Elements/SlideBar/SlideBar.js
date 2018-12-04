import React, { Component } from 'react';
import SlideArrow from './SlideArrow';
import SlideImage from './SlideImage';
import './SlideBar.css';

class SlideBar extends Component{

    state = {
        images: [],
        currentImageIndex: 0
    };

    componentDidMount(){
        this.setState({
            images: [
                './images/slider_1.jpg',
                './images/slider_2.jpg'
            ]
        });
    }
    previousSlide = () =>{

        const { currentImageIndex, images } = this.state;
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
            currentImageIndex: index
        });
    };

    nextSlide = () =>{

        const { currentImageIndex, images} = this.state;
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
        currentImageIndex: index
        });
    };
    
    render(){
        return(
            <div>
                <SlideArrow/>
                <SlideImage/>
                <SlideArrow/>
            </div>
        );
    };
    
};

export default SlideBar;