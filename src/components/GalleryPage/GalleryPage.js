import React from 'react';
import GalleryRow from './GalleryRow';
import { useGlobalState, setGlobalState } from '../../state';
// import { InstagramEmbed } from 'react-social-media-embed';
{/* <InstagramEmbed url="https://www.instagram.com/p/Ck3neUxuhhJ/" width={328} /> */ }

export default function GalleryPage() {

    const text = {
        color: 'white'
    }

    const numImages = 22;
    setGlobalState("numImages", numImages);

    const imageObjs = [];
    for (var i = numImages; i > 0; i -= 3) {
        if (i < 10) {
            if (i < 3) {
                switch (i) {
                    case 2:
                        imageObjs.push(
                            [
                                {
                                    "image": 'IMG-000' + i.toString() + '.jpg',
                                    "title": "Title here",
                                    "description": "Description Here",
                                    "index": i
                                },
                                {
                                    "image": 'IMG-000' + (i - 1).toString() + '.jpg',
                                    "title": "Title here",
                                    "description": "Description Here",
                                    "index": i
                                }
                            ]
                        );
                        break;
                    case 1:
                        imageObjs.push(
                            [
                                {
                                    "image": 'IMG-000' + i.toString() + '.jpg',
                                    "title": "Title here",
                                    "description": "Description Here",
                                    "index": i
                                }
                            ]
                        );
                        break;
                }
            }
            else {
                imageObjs.push(
                    [
                        {
                            "image": 'IMG-000' + i.toString() + '.jpg',
                            "title": "Title here",
                            "description": "Description Here",
                            "index": i
                        },
                        {
                            "image": 'IMG-000' + (i - 1).toString() + '.jpg',
                            "title": "Title here",
                            "description": "Description Here",
                            "index": i
                        },
                        {
                            "image": 'IMG-000' + (i - 2).toString() + '.jpg',
                            "title": "Title here",
                            "description": "Description Here",
                            "index": i
                        },
                    ]
                );
            }
        }
        else {
            imageObjs.push(
                [
                    {
                        "image": 'IMG-00' + i.toString() + '.jpg',
                        "title": "Title here",
                        "description": "Description Here"
                    },
                    (i - 1) < 10 ?
                        {
                            "image": 'IMG-000' + (i - 1).toString() + '.jpg',
                            "title": "Title here",
                            "description": "Description Here"
                        }
                        :
                        {
                            "image": 'IMG-00' + (i - 1).toString() + '.jpg',
                            "title": "Title here",
                            "description": "Description Here"
                        }
                    ,
                    (i - 2) < 10 ?
                        {
                            "image": 'IMG-000' + (i - 2).toString() + '.jpg',
                            "title": "Title here",
                            "description": "Description Here"
                        }
                        :
                        {
                            "image": 'IMG-00' + (i - 2).toString() + '.jpg',
                            "title": "Title here",
                            "description": "Description Here"
                        }
                    ,
                ]
            );
        }
    }

    setGlobalState("imageObjs", imageObjs);

    return (
        <div>
            {imageObjs.map((objs, index) => {
                return <GalleryRow key={index} imageObjs={objs} />
            })}
        </div>
    )
}
