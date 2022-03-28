import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'
import styled from 'styled-components'
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md'


const ServicesItemStyle = styled.div`
    padding: 10rem 0;
    .services__allitem{
        display : flex;
        gap :10rem;
        justify-content : space-between;
        margin-top : 5rem;
    }
    @media only screen and (max-width: 768px){
        .services__allitem{
            flex-direction: column;
            max-width: 350px;
            margin : 0 auto;
            margin-top: 5rem;
            gap : 5rem;
        }
    }
`;

function ServiceSection() {
    return (
        <ServicesItemStyle>
            <div className="container">
                <SectionTitle
                    heading="Services"
                    subheading="What i will do for you"
                />
                <div className="services__allitem">
                    <ServicesSectionItem
                        icon={<MdDesktopMac />}
                        title="Website Developer"
                        direction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <ServicesSectionItem
                        icon={<MdCode />}
                        title="Website Design"
                        direction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <ServicesSectionItem
                        icon={<MdPhonelinkSetup />}
                        title="App Developer"
                        direction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />

                </div>
            </div>
        </ServicesItemStyle>
    )
}

export default ServiceSection
