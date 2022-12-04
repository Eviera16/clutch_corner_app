import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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

const error = {
    color: 'red',
    backgroundColor: 'black'
}

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [height, width] = useWindowSize();
    const [password, setPassword] = useState('Input Password');
    const [hasError, setHasError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let url = 'https://clutch-corner-server.herokuapp.com/api/login';
        let data = "?password=" + password;

        fetch(url + data, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => {
                if (response.status == 200) {
                    setHasError(false);
                    navigate('home')
                }
                else {
                    setHasError(true);
                }
            })
            .catch(e => {
                console.log(e);
            })
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
                        {hasError ? <p style={error}>Invalid Password</p> : <p></p>}
                        <button style={button} type="submit">Login</button>
                    </form>
                </div>
                <form style={form1}>
                    <label style={label}>Subscribe now or regret later.</label>
                    <input style={email_input} type="email" placeholder="Enter email" />
                    <button style={button2}>Submit</button>
                </form>


            </div>
        </div>
    )
}
