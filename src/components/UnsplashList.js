import React from "react";
import "./UnsplashImage.css"

const UnsplashList = (props) => {
    const images = props.images.map(( image )=> {
        return <ImageCard key= {image.id} image= {image}/>;
    });
    return  <div className="grid-wrapper">{images}</div>;
};

class ImageCard extends React.Component {
    constructor  (props) {
        super (props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    };
    componentDidMount() {
        this.imageRef.current.addEventListener ("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil (height / 9.5);
        this.setState ({ spans });
    };
     render () {
        return <img src= {this.props.image.urls.regular} alt= {this.props.image.description} ref = {this.imageRef}  style = {{gridRowEnd: `span ${this.state.spans}`}} />;
     }
}

export default UnsplashList;