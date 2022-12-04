import React, { useState, useEffect } from 'react';
import GalleryRow from './GalleryRow';
// import { InstagramEmbed } from 'react-social-media-embed';
{/* <InstagramEmbed url="https://www.instagram.com/p/Ck3neUxuhhJ/" width={328} /> */ }

export default function GalleryPage() {
    const [allImages, setAllImages] = useState(null);
    const [gotImages, setGotImages] = useState(false);

    const getAllImages = async () => {
        try {
            const response = await fetch('https://clutch-corner-server.herokuapp.com/api/getGalleryImages');
            const jsonData = await response.json();
            setImageRows(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const setImageRows = (imageArr) => {
        var newImageArr = [];
        var tempArr = [];
        var count = 0;
        for (var i = imageArr.length - 1; i >= -1; i--) {
            if (count < 3) {
                if (i < 0) {
                    newImageArr.push(tempArr);
                    break;
                }
                tempArr.push(imageArr[i]);
                count++;
            }
            else {
                newImageArr.push(tempArr);
                count = 0;
                tempArr = [];
                tempArr.push(imageArr[i]);
                count++;
            }
        }
        setAllImages(newImageArr);
        setGotImages(true);
    }

    useEffect(() => {
        getAllImages();
    }, []);



    const whiteText = {
        color: 'white',
        backgroundColor: 'black'
    }

    return (
        <div>
            {gotImages ?
                allImages.map((img, index) => {
                    return (<GalleryRow key={index} imageObjs={img} imgIndex={index} />)
                })
                : <p style={whiteText}>Nothing is Here Yet</p>}
        </div>
    )
}
