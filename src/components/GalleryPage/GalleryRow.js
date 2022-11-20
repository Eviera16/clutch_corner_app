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
                return <GalleryBox key={index} imageObj={obj} />
            })}
        </div>
    )
}
