import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GalleryBox(props) {
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();
    const box = {
        height: window.innerHeight * 0.5,
        width: window.innerHeight * 0.5,
        padding: window.innerWidth * 0.01,
        backgroundColor: 'transparent',
        border: 'none'
    }
    const imageBox = {
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
        zIndex: '0'
    }

    const cover = {
        zIndex: '1',
        backgroundColor: 'grey',
        height: window.innerHeight * 0.47,
        width: window.innerHeight * 0.47,
        opacity: '0.5',
        marginTop: window.innerHeight * -0.47,
        marginLeft: window.innerWidth * -0.003,
        display: isHovering ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const desc = {
        zIndex: '2',
        height: window.innerHeight * 0.47,
        width: window.innerHeight * 0.47,
        marginTop: window.innerHeight * -0.47,
        marginLeft: window.innerWidth * -0.003,
        display: isHovering ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const setGalleryViewPage = () => {
        let url = 'https://clutch-corner-server.herokuapp.com/api/setGView';
        let data = "?data=" + props.imageObj['galleryimageobj_id'];

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
                    navigate('gView')
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
        <button onClick={() => {
            setGalleryViewPage();
        }} style={box} onMouseEnter={() => { setIsHovering(true) }} onMouseLeave={() => { setIsHovering(false) }}>
            <img src={"data:image/png;base64," + props.imageObj['imgbuffer']} alt={props.imageObj['title']} style={imageBox} />
            <div style={cover}></div>
            <strong style={desc}>{props.imageObj['title']}</strong>
        </button>
    )
}
