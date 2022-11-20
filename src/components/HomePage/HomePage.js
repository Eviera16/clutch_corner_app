import React from 'react';
import { useState, useEffect } from 'react';
import ItemPics from '../Utilities/ItemPics';

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

export default function HomePage() {
    const [height, width] = useWindowSize();

    const text = {
        color: 'white'
    }

    const itemPictures = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    return (
        <div>
            <div style={itemPictures}>
                <ItemPics num={0} />
                <ItemPics num={1} />
                <ItemPics num={2} />
                <ItemPics num={3} />
                <ItemPics num={4} />
            </div>
        </div>
    )
}
