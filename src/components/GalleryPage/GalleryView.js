import { useState, React, useEffect } from 'react';

export default function GalleryView(props) {
    const [gView, setGView] = useState({});
    const getNewView = () => {
        fetch('https://clutch-corner-server.herokuapp.com/api/getGView')
            .then((response) => response.json())
            .then((data) => {
                setGView(data);
            });
    }
    useEffect(() => {
        getNewView();
    }, [])
    const wrapper = {
        display: 'flex',
        height: window.innerHeight * 0.75,
        width: window.innerWidth * 0.8,
        justifyContent: 'space-between',
        padding: '0.5%'
    }
    const image = {
        height: '100%',
        width: '75%',
        padding: '0.5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const description = {
        height: '100%',
        width: '20%',
        padding: '0.5%',
        border: '0.5px solid white'
    }
    const title = {
        width: '100%',
        height: '7%',
        color: 'black',
        backgroundColor: 'white',
        margin: '0',
        padding: '0.5%'
    }
    const info = {
        width: '100%',
        height: '80%',
        padding: '0.5%',
        color: 'white'
    }
    const error = {
        color: 'red'
    }
    const imageBox = {
        height: '100%',
        width: '70%'
    }
    const leftArrow = {
        WebkitTransform: 'rotate(180deg)',
        MozTransform: 'rotate(180deg)',
        msTransform: 'rotate(180deg)',
        OTransform: 'rotate(180deg)',
        transform: 'rotate(180deg)',
        height: window.innerHeight * 0.1
    }
    const rightArrow = {
        height: window.innerHeight * 0.1
    }
    const button = {
        backgroundColor: 'transparent',
        border: 'none'
    }

    const setGalleryViewPage = (newId) => {
        let url = 'https://clutch-corner-server.herokuapp.com/api/setGView';
        let data = "?data=" + newId;

        fetch(url + data, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => {
                console.log(response.status);
                if (response.status == 200) {
                    getNewView();
                }
                else {
                    console.log("Error Occured");
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div style={wrapper}>
            <div style={image}>
                {gView['prev'] ? <button style={button} onClick={() => {
                    setGalleryViewPage(gView['prev']);
                }}>
                    <img style={leftArrow} src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" />
                </button> : <div></div>}
                {gView['imgbuffer'] ? <img src={"data:image/png;base64," + gView['imgbuffer']} alt={gView['title']} style={imageBox} /> : <h1 style={error}>Null</h1>}
                {gView['next'] ? <button style={button} onClick={() => {
                    setGalleryViewPage(gView['next']);
                }}>
                    <img style={rightArrow} src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" />
                </button> : <div></div>}
            </div>
            <div style={description}>
                <h1 style={title}>{gView['title']}</h1>
                <h5 style={info}>{gView['description']}</h5>
            </div>
        </div>
    )
}
