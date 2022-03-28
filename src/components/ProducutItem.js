import React from 'react'
import { Link } from 'react-router-dom'
import proImg from '../assets/images/projectImg.png';
import styled from 'styled-components'

const ProductStyle = styled.div`
  .producutItem__img{
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border : 3px solid var(--gray-2);
    img{
      height: 100%;
    }
  }

  .products__info{
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding : 1rem;
    border-radius : 12px;
  }
  .products__title{
    font-size :2.2rem;
    color : #fff;
  }
  .products__desc{
    font-size : 1.6rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px){
    .producutItem__img{
      height: 360px;
    }
  }
`;


function ProducutItem(
  { img = img,
    title = 'Product Name',
    desc = 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et' }
) {
  return (
    <ProductStyle>
      <Link to="/products" className="producutItem__img">
        <img src={img} alt="" />
      </Link>
      <div className="products__info">
        <Link to="#">
          <h3 className="products__title">{title}</h3>
        </Link>
        <p className="products__desc">
          {desc}
        </p>
      </div>
    </ProductStyle>
  )
}

export default ProducutItem
