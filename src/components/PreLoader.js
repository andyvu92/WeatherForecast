import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

// styles
const flash = keyframes`
    0%,  95%,  98% {background-color:transparent}
    96%, 99%, 100% {background-color:#fff} 
`;

const float = keyframes`
    0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.$loaded ? 'white' : 'black'};;
    transition: all 1s ease-in;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: ${flash} 5s linear infinite;
        transition: all 1s ease-in;
        opacity: ${props => props.$loaded ? 0 : 1};
    }

    img {
        width: 150px;
        height: 150px;
        opacity: ${props => props.$loaded ? 1 : 0};
        animation: ${float} 3s ease-in-out infinite;
        transition: all 1s ease-in;
    }
`;

const PreLoader = props => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 6000)
    }, [])

    return (
        <Wrapper $loaded={loaded}>
            <img src="/images/storm.svg" alt="Preloader" />
        </Wrapper>
    )
}

export default PreLoader
