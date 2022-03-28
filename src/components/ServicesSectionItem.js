import React from 'react'
import { MdDesktopMac } from 'react-icons/md'
import PText from './PText'
import styled from 'styled-components'

const ItemStyled = styled.div`
    text-align: center;
    .servicesItem__icon{
        svg{
            width : 3rem;
            color : #fff;
        }
    }
    .servicesItem__title{
        font-size : 2.5rem;
        color : #fff;
    }
    .para{
        margin-top : 2rem;
    }
`;

function ServicesSectionItem({icon = <MdDesktopMac />, title = "Web Services", direction = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}) {
    return (
        <ItemStyled>
            <div className="servicesItem__icon">
                {icon}
            </div>
            <div className="servicesItem__title">
                {title}
            </div>
            <PText>
                {direction}
            </PText>
        </ItemStyled >
    )
}

export default ServicesSectionItem
