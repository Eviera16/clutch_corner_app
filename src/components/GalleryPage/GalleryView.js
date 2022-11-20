import { useState, React } from 'react';
import { useGlobalState, setGlobalState } from '../../state';
import { IconName } from "react-icons/bi";
import 'boxicons';

// function useSetPrevAndNext(gImage, setIsFirst, setIsLast, setNext, setPrev) {
//     const imagess = useGlobalState("imageObjs");
//     if (gImage != "Null") {
//         var newSplit = gImage.split("00")[1].split(".");
//         var num = parseInt(newSplit[0]);
//         if (num == useGlobalState("numImages")) {
//             setIsFirst(true);
//             setIsLast(false);
//             const next = imagess[0][0][1];
//             setNext(next);
//         }
//         else if (num == 1) {
//             setIsLast(true);
//             setIsFirst(false);
//             const prev = imagess[0][0][1];
//             setPrev(prev);
//         }
//         else {
//         }
//     }
//     return null;
// }

export default function GalleryView(props) {
    const [isFirst, setIsFirst] = useState(false);
    const [isLast, setIsLast] = useState(false);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const gView = useGlobalState("gView");
    // useSetPrevAndNext(gView[0]['image'], setIsFirst, setIsLast, setNext, setPrev);
    console.log("GVIEW BELOW");
    console.log(gView);
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

    const rotateimg180 = {
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

    return (
        <div style={wrapper}>
            <div style={image}>
                <button style={button}>
                    <img style={rotateimg180} src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" />
                </button>
                {gView[0]['image'] != "Null" ? <img src={require('../../images/gallery/' + gView[0]['image'])} style={imageBox} /> : <h1 style={error}>Null</h1>}
                <button style={button} onClick={() => {
                    setGlobalState("gView", props.imageObj);
                }}>
                    <img style={rightArrow} src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" />
                </button>
            </div>
            <div style={description}>
                <h1 style={title}>{gView[0]['title']}</h1>
                <h5 style={info}>{gView[0]['description']}</h5>
            </div>
        </div>
    )
}
