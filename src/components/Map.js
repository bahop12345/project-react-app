import React from 'react'
import PText from './PText'
import MapImg from '../assets/images/map.png'
import styled from 'styled-components'

const MapStyle = styled.div`
    background: url(${MapImg}) no-repeat rgba(197, 255, 138, 1);
    min-height : 400px;
    .container{
        position : relative;
        min-height : 400px;
    }
    .map_card{
        position : absolute;
        right : 15%;
        bottom : 9%;
        padding : 2rem;
        background : var(--deep-dark);
        width : 100%;
        max-width : 300px;
        border-radius : 12px;
    }
    .map_card_heading{
        font-size : 3rem;
        margin-bottom : 1rem;
    }
    .map_link{
        display : inline-block;
        font-size: 1.6rem;
        margin-top : 3rem;
        text-decoration : underline;
    }
    @media only screen and (max-width: 768px) {
        background-position: 80% center;
    }
    @media only screen and (max-width: 400px) {
        .map_card {
            max-width: none;
            right: auto;
        }
  }
`;

function Map() {
    return (
        <MapStyle>
            <div className="container">
                <div className="map_card">
                    <h3 className="map_card_heading">Here is me</h3>
                    <PText>
                        Lorem ipsum dolor sit amet, consectetur.
                    </PText>
                    <a href="https://www.google.com/maps"
                        className="map_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </MapStyle>
    )
}

export default Map
