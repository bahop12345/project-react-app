import React from 'react'
import Button from '../components/Button'
import PText from '../components/PText'
import AboutIng from '../assets/images/about1.png'
import styled from 'styled-components'
import AboutInfoItems from '../components/AboutInfoItems'
import ContactBanner from '../components/ContactBanner'

const AboutStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top_section{
      display:flex;
      align-items: center;
      justify-content: center;
      gap : 2rem;
    }
    .left{
      flex: 3;
    }
    .right{
      flex: 2;
    }
    .about_subheading{
      font-size: 2.2rem;
      margin-bottom : 2rem;
      color : var(--gray-1);
      span{
        background-color: var(--deep-dark);
        padding : 0.5rem;
        border-radius : 8px;
         color : var(--gray-1);

      }
    }
      .about_heading{
        font-size: 3.6rem;
        margin-bottom : 3rem;
        color : var(--gray-1);
      }
      .about_info{
        margin-bottom: 4rem;
        .para{
          max-width : 100%;
        }
      }
      .right{
        img{
          border : 2px solid var(--gray-1);
        }
      }

      .about_info_items{
        margin-top : 15rem;
      }
      .about_info_item{
        margin-bottom : 10rem;
      }
      .about_info_heading{
        text-transform : uppercase;
        font-size: 3.6rem;
        color : var(--gray-1);

      }
      @media only screen and (max-width: 768px){
        padding : 10rem 0;
        .top_section{
          flex-direction: column;
          gap : 5rem;
        }
        .about_heading{
          font-size: 1.8rem;
        }
        .about_info_heading{
          font-size: 3rem;
        text-transform : uppercase;
        }
        .about_heading{
          font-size: 2.8rem;
        }
      }
`;

function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="top_section">
          <div className="left">
            <p className="about_subheading">
              Hi , I am <span>.....</span>
            </p>
            <h2 className="about_heading">
              It is a long established fact that a reader will
            </h2>
            <div className="about_info">
              <PText>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book.
                <br /> <br />
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book.
                <br /> <br />
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book.
              </PText>
            </div>
            <Button btnText="Download Now" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutIng} alt="img " />
          </div>
        </div>
        <div className="about_info_items">
          <div className="about_info_item">
            <h1 className="about_info_heading">Education</h1>
            <AboutInfoItems
              title="Lorem"
              items={['Lorem Ipsum. is. dummy text.']}
            />
            <AboutInfoItems
              title="It is a"
              items={['t is. a long established. fact that.']}
            />
            <AboutInfoItems
              title="There many"
              items={['There are many. variations of passages. of Lorem.']}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about_info_heading">My Skill</h1>
            <AboutInfoItems
              title="Front End"
              items={['"HTML", "CSS", "JS", "REACJS"']}
            />
            <AboutInfoItems
              title="Back end"
              items={[' "NODE", "PHP", SQL ']}
            />
            <AboutInfoItems
              title="Design"
              items={[' "Photoshop" ,"..."']}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about_info_heading">Experience</h1>
            <AboutInfoItems
              title="19-7-2000"
              items={['It is a long established fact that a reader']}
            />
            <AboutInfoItems
              title="2012-2016"
              items={[' There are many variations of passages.']}
            />
            <AboutInfoItems
              title="8-10-2001"
              items={['Contrary to popular belief.']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutStyles>
  )
}

export default About
