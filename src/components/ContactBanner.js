import React from 'react'
import Button from './Button'
import PText from './PText'
import styled from 'styled-components'

const ContactBannerStyles = styled.div`
    padding: 10rem 0;
    .contactBanner__wapper{
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding : 5rem 0rem;
        text-align: center;
    }
    .contactBanner__heading{
        font-size: 4rem;
        margin-bottom : 2rem;
        color : var(--gray-1);


    }
    @media only screen and (max-width: 768px){
        .contactBanner__heading{
            font-size: 2.8rem;
        }
    }
`;

function ContactBanner() {
    return (
        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner__wapper">
                    <PText>
                        Heve a products in mind
                    </PText>
                    <h3 className="contactBanner__heading">
                        Let me
                    </h3>
                    <Button btnText="Contact Now" btnLink="/contact" />
                </div>
            </div>
        </ContactBannerStyles>
    )
}

export default ContactBanner
