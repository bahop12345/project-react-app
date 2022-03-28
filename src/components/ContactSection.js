import React from 'react'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'
import SubContactInfo from './SubContactInfo';
import { MdLocalPhone, MdEmail } from 'react-icons/md'
import SubContactForm from './SubContactForm';


const ContactSectionStyles = styled.div`
    padding : 10rem 0;
    .contactSection_wrapper{
        display : flex;
        gap : 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position : relative;
    }
    .contactSection_wrapper::after{
        position : absolute;
        content : "";
        width : 2px;
        height : 50%;
        background-color : var(--gray-1);
        left : 50%;
        top : 30%;
        transform : translate(-50% , -50%);
    }
    .contact_left{
        width : 100%;
        max-width: 500px;
    }
    .contact_right{
        max-width: 500px;
        width : 100%;
        border-radius : 12px;
    }
    @media only screen and (max-width: 768px) {
        .contactSection_wrapper {
            flex-direction: column;
    }
        .contactSection_wrapper::after {
            display: none;
        }
        .contact_left,
        .contact_right {
            max-width: 100%;
        }
        .contact_right {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`;

function ContactSection() {
    return (
        <ContactSectionStyles>
            <div className="container">
                <SectionTitle heading="Contact" subheading="Get in touch" />
                <div className="contactSection_wrapper">
                    <div className="contact_left">
                        <SubContactInfo
                            icon={<MdLocalPhone />}
                            text="+0984228518"
                        />

                        <SubContactInfo
                            icon={<MdEmail />}
                            text="web@gmail.com"
                        />
                        <SubContactInfo
                            text="VietNam"
                        />
                    </div>
                    <div className="contact_right">
                        <SubContactForm

                        />
                    </div>
                </div>
            </div>
        </ContactSectionStyles>
    )
}

export default ContactSection
