import React from 'react'
import GalleryBox from './GalleryBox';

export default function GalleryRow(props) {
    const row = {
        display: 'flex',
        flexDirection: window.innerWidth < 660 ? 'column' : 'row',
        justifyContent: 'space-between'
    }
    return (
        <div style={row}>
            {props.imageObjs.map((obj, index) => {
                const newIndex = (props.imgIndex * 3) + index + 1;
                return <GalleryBox key={index} imageObj={obj} imggIndex={newIndex} />
            })}
        </div>
    )
}
