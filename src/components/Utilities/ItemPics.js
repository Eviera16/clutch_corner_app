import React from 'react'
import { useState, useEffect } from 'react';

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
}

const picture_box = {
    display: 'flex',
    padding: window.innerWidth * 0.01,
    height: window.innerWidth < 660 ? window.innerHeight * 0.4 : window.innerHeight * 0.7,
    width: window.innerWidth,
    borderBottom: '0.5px solid grey'
}

const comment = {
    color: 'white',
    fontSize: window.innerWidth * 0.03,
    height: window.innerHeight * 0.7,
    width: window.innerWidth * 0.45,
    margin: window.innerWidth * 0.005
}

const picture = {
    height: '100%',
    width: '40%',
    margin: window.innerWidth * 0.005
}
export default function ItemPics(props) {
    const [height, width] = useWindowSize();

    const pic_height = height * 0.7;
    const pic_width = width * 0.5;

    switch (props.num) {
        case 0:
            return (
                <div style={picture_box}>
                    <img src={require('../../images/items/IMG_1256.jpg')} style={picture} />
                    <div style={comment} >lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                        sunt, ratione
                        ullam
                        nesciunt harum aliquid a suscipit aperiam aliquam sapiente eveniet fugit, animi provident alias
                        magni, accusamus cupiditate quo magnam?</div>
                </div>
            );
        case 1:
            return (
                <div style={picture_box}>
                    <img src={require('../../images/items/IMG_1258.jpg')} style={picture} />
                    <div style={comment} >lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                        sunt, ratione
                        ullam
                        nesciunt harum aliquid a suscipit aperiam aliquam sapiente eveniet fugit, animi provident alias
                        magni, accusamus cupiditate quo magnam?</div>
                </div>
            );
        case 2:
            return (
                <div style={picture_box}>
                    <img src={require('../../images/items/IMG_1260.jpg')} style={picture} />
                    <div style={comment}>lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                        sunt, ratione
                        ullam
                        nesciunt harum aliquid a suscipit aperiam aliquam sapiente eveniet fugit, animi provident alias
                        magni, accusamus cupiditate quo magnam?</div>
                </div>
            );
        case 3:
            return (
                <div style={picture_box}>
                    <img src={require('../../images/items/IMG_1261.jpg')} style={picture} />
                    <div style={comment} >lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                        sunt, ratione
                        ullam
                        nesciunt harum aliquid a suscipit aperiam aliquam sapiente eveniet fugit, animi provident alias
                        magni, accusamus cupiditate quo magnam?</div>
                </div>
            );
        case 4:
            return (
                <div style={picture_box}>
                    <img src={require('../../images/items/IMG_1266.jpg')} style={picture} />
                    <div style={comment} >lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                        sunt, ratione
                        ullam
                        nesciunt harum aliquid a suscipit aperiam aliquam sapiente eveniet fugit, animi provident alias
                        magni, accusamus cupiditate quo magnam?</div>
                </div>
            );
        default:
            return (
                <div style={picture_box}>
                    <img src={require('../../images/items/IMG_1256.jpg')} style={picture} />
                    <div style={comment} >lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                        sunt, ratione
                        ullam
                        nesciunt harum aliquid a suscipit aperiam aliquam sapiente eveniet fugit, animi provident alias
                        magni, accusamus cupiditate quo magnam?</div>
                </div>
            );
    }
}
