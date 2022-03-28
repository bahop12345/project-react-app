import React from 'react'
import SectionTitle from './SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import DataProduct from '../assets/data/DataProduct'
import ProducutItem from './ProducutItem'
import styled from 'styled-components'
import 'swiper/css';
import 'swiper/css/navigation';


SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: #394653;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

function Products() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle heading="Product" subheading="Lorem Ipsum is products" />
        <div className="product__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {DataProduct.map((pro, index) => {
              if (index >= 50) return;
              return (
                <SwiperSlide key={pro.id}>
                  <ProducutItem 
                    title={pro.name}
                    img={pro.img}
                    desc={pro.desc}
                  />
                </SwiperSlide>

              )
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle >
  )
}

export default Products
