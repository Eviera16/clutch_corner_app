import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    gView: {
        "image": 'Null',
        "title": "Null",
        "description": "Null"
    },
    numImages: 0,
    imageObjs: []
});

export { useGlobalState, setGlobalState };