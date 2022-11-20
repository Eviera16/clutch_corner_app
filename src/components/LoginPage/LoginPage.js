import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

const title = {
    marginLeft: '30%',
    marginTop: '5%'
}

const body = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '26rem',
    width: '60%',
    marginLeft: '20%',
    marginTop: '10%'
}

const form_body = {
    height: '100%',
    width: '50%',
    padding: '2%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '40%'
}


const text_title = {
    color: 'white',
    textDecoration: 'underline',
    src: 'https://fonts.googleapis.com/css?family=Orbitron',
    fontFamily: "'Orbitron', sans-serif"
}

const text = {
    color: 'white',
    src: 'https://fonts.googleapis.com/css?family=Orbitron',
    fontFamily: "'Orbitron', sans-serif"
}

const text_password = {
    color: 'white',
    src: 'https://fonts.googleapis.com/css?family=Orbitron',
    fontFamily: "'Orbitron', sans-serif",
    textDecoration: 'underline',
}

const form = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
}

const form1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '30%',
    width: '50%'
}

const email_input = {
    height: '20%'
}

const button = {
    height: '35%',
    width: '35%',
    backgroundColor: 'green',
    color: 'white',
    marginTop: '1rem',
    src: 'https://fonts.googleapis.com/css?family=Orbitron',
    fontFamily: "'Orbitron', sans-serif"
}

const button2 = {
    height: '25%',
    width: '25%',
    backgroundColor: 'green',
    color: "white",
    src: 'https://fonts.googleapis.com/css?family=Orbitron',
    fontFamily: "'Orbitron', sans-serif"
}

const label = {
    fontSize: '.7rem',
    color: 'white',
    src: 'https://fonts.googleapis.com/css?family=Orbitron',
    fontFamily: "'Orbitron', sans-serif"
}

export default function LoginPage() {
    const [height, width] = useWindowSize();
    const [password, setPassword] = useState('Input Password');
    // useEffect(() => {
    //     fetch('https://clutch-corner-dev.herokuapp.com/api')
    //         .then((res) => { return res.json(); })
    //         .then((data) => {
    //             console.log("GETTING THE DATA");
    //             console.log(data);
    //         })
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("PRESSING SUBMIT");

        // fetch('https://clutch-corner-dev.herokuapp.com/api', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         data: "Data Here"
        //     })
        // })
        //     .then((res) => { console.log(res) })
    }

    return (
        <div>
            <div style={body}>
                <div style={form_body}>
                    <h1 style={text_title}>Login</h1>
                    <form style={form} onSubmit={handleSubmit}>
                        <div>
                            <label style={text_password}>Password: </label>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button style={button} type="submit">Login</button>
                    </form>
                </div>
                {/* <div style={footer}>

                </div> */}
                <form style={form1}>
                    <label style={label}>Subscribe now or regret later.</label>
                    <input style={email_input} type="email" placeholder="Enter email" />
                    <button style={button2}>Submit</button>
                </form>

            </div>
        </div>
    )
}
