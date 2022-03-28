import React from 'react'
import { MdPlace } from 'react-icons/md'
import PText from './PText'
import styled from 'styled-components'

const ItemStyles = styled.div`
    padding: 2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon {
        color: var(--white);
        background-color: var(--gray-2);
        padding: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    svg {
        width: 3.5rem;
    }
`;

function SubContactInfo(
    {
        icon = <MdPlace />,
        text = 'This is a contact info'
    }
) {
    return (
        <ItemStyles>
            <div className="icon">{icon}</div>
            <div className="info">
                <PText>{text}</PText>
            </div>
        </ItemStyles>
    )
}

export default SubContactInfo
