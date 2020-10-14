import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { 
    searchLocationByName,
    searchLocationByLatLng
} from '../lib/api/Weather'

import { getLocation } from '../lib/global/Helpers'
import styled, { keyframes } from 'styled-components'

// styles
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} .5s ease-in;
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 0;
`;

const SubHeading = styled.h3`
    margin-bottom: 0;
    margin-top: .5rem;
    font-weight: 400;
`;

const BtnsWrapper = styled.div`
    display: flex;
    margin-top: 2rem;
`;

const StyledButton = styled.button`
    margin: 0 .5rem;
    padding: .5rem;
    min-width: 120px;
    border-radius: 0;
    background: transparent;
    border: 1px solid ${props => props.$color};
    color: ${props => props.$color};
    font-weight: 600;
    font-size: 1rem;
    transition: all .35s ease;

    &:hover {
        color: white;
        background: ${props => props.$color};
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`;

const StyledInput = styled.input`
    text-align: center;
    margin-top: 2rem;
    width: 300px;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 25px;
    animation: ${fadeIn} .5s ease;

    &:focus {
        outline: none;
    }
`;

const Suggestion = styled.button`
    background: transparent;
    border: 0;
    margin: .5rem;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    &:focus {
        outline: none;
    }
`;

const Spinner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
        content: '';
        width: 50px;
        height: 50px;
        border-top: 3px solid white;
        border-radius: 50%;
        animation: ${spin} 1.2s linear infinite;
    }
`;

const LocationInput = props => {
    const {
        getDataHandler
    } = props

    const [useInputLocation, setUseInputLocation] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchRes, setSearchRes] = useState(null)
    const [loading, setLoading] = useState(false)

    const searchTermHandler = () => {
        setLoading(true)
        searchLocationByName(searchTerm)
        .then(res => {
            if (res.length === 1) {
                getDataHandler(res[0].woeid)
            } else {
                setSearchRes(res)
                setLoading(false)
            }
        } )
    }

    const selectSuggestionHandler = (id) => {
        setLoading(true)
        getDataHandler(id)
    }

    const currentLocationHandler = () => {
        setLoading(true)
        getLocation()
        .then(res => {
            let lat = res.coords.latitude;
            let lng = res.coords.longitude;

            searchLocationByLatLng(lat, lng)
            .then(res => {
                if (res.length === 1) {
                    getDataHandler(res[0].woeid)
                } else {
                    setSearchRes(res)
                    setLoading(false)
                }
            } )
        })
        .catch(err => {
            setLoading(false)
            setUseInputLocation(true)
        })
    }

    return (
        <Wrapper>
            { loading &&
                <Spinner />
            }
            
            <Heading>
                Weather Forecast
            </Heading>

            <SubHeading>
                { useInputLocation ? 
                    'Type city name and hit enter to search' : 'Would you like to use your current location?'
                }
            </SubHeading>

            { useInputLocation ? (
                <StyledInput 
                    type="text" 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.currentTarget.value)}
                    onKeyDown={e => e.key === 'Enter' && searchTermHandler()}
                    placeholder="Melbourne, Sydney..." />
            ) : (
                !searchRes ? (
                    <BtnsWrapper>
                        <StyledButton $color="#2196f3" onClick={() => currentLocationHandler()}>Yes</StyledButton>

                        <StyledButton $color="#f44336" onClick={() => setUseInputLocation(true)}>No</StyledButton>
                    </BtnsWrapper>
                ) : (
                    <p>Please select one of the location below</p>
                )
            ) }

            { searchRes && searchRes.length > 1 &&
                searchRes.map( city =>
                    <Suggestion 
                        key={city.woeid}
                        onClick={() => selectSuggestionHandler(city.woeid)}
                    >
                        {city.title}
                    </Suggestion>
                )
            }

            { searchRes && searchRes.length < 1 &&
                <p>There is no results matching your search. Please try again.</p>
            }
        </Wrapper>
    )
}

LocationInput.propTypes = {
    getDataHandler: PropTypes.func
}

export default LocationInput
