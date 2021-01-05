import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export class Home extends React.Component {
    render() {
        return (//display slide
            <Carousel height="800" width="300">
                <Carousel.Item>
                    <img height="800" width="300"
                        className="d-block w-100"
                        src="https://img4.goodfon.com/wallpaper/nbig/c/51/italian-food-pizza-pasta-bread-rasta-pitstsa-muka-khleb-iait.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>FOOD</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="800" width="300"
                        className="d-block w-100"
                        src="https://www.highreshdwallpapers.com/wp-content/uploads/2014/01/a-74.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height="800" width="300"
                        className="d-block w-100"
                        src="https://s1.1zoom.me/big0/342/Sweets_Ice_cream_445736.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}