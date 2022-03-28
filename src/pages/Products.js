import React, { useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'
import ProducutItem from '../components/ProducutItem'
import DataProduct from '../assets/data/DataProduct'
import { useState } from 'react'
import ContactBanner from '../components/ContactBanner'

const ProductStyle = styled.div`
  padding : 10rem 0;
  .product_allitems{
    display : grid;
    grid-template-columns :repeat(auto-fill,minmax(300px, 1fr));
    gap : 5rem;
    margin-top: 5rem;
  }
  .product_search{
    position: relative;
    width : 300px;
    margin-top: 5rem;
  }
  .product_search input{
    width: 100%;
    font-size: 2rem;
    padding : 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .product_search .searchIcon{
    position : absolute;
    width: 2rem;
    right: 1rem;

  } 
  .product_search .searchIcon{
    color : var(--deep-dark);
  }
  @media only screen and (max-width: 768px){
    .product_search,
    .product_search input,
    .product_search form{
      width : 100%;
    }
  }
`;

function Products() {
  const [searchText, setSearchText] = useState('')
  const [proData, setProData] = useState(DataProduct)

  const handleText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProData(DataProduct);
    }
  }

  useEffect(() => {
    if (searchText === '') return;
    setProData(() =>
      DataProduct.filter((item) => item.name.toLowerCase().match(searchText.toLowerCase()))
    )
  }, [searchText])

  return (
    <ProductStyle>
      <div className="container">
        <SectionTitle heading="Product" subheading="Lorem Ipsum is simply dummy text" />
        <div className="product_search">
          <from>
            <input
              type="text"
              value={searchText}
              onChange={handleText}
              placeholder="Search name ..."
            />
            <MdSearch className="searchIcon" />
          </from>
        </div>
        <div className="product_allitems">
          {
            proData.map((item, index) => (
              <ProducutItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />

            ))
          }
        </div>
      </div>
      <ContactBanner />
    </ProductStyle>
  )
}

export default Products
