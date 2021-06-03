import React , { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

class Everywhere extends Component {
    render ()
    {
        return(
            <WhereComponent >
                <div className="animation-card-container our-story-card">
             <div>
               <Title> Watch everywhere.</Title>
               <SubTitle>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</SubTitle>
               </div>
            <div className="animation-card-container">
            <img alt="" className="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png">
             </img>
             <div >
                 <video className="our-story-card-animation" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" autoPlay="true"  loop/>
                    
                 </div>
              </div>
              </div>
            

            </WhereComponent>
        )
    }
}

export default Everywhere;

const WhereComponent = styled.div`
div {
    display: block;
}

.our-story-card {
    position: relative;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    margin-bottom: 0;
    background: 0 0;
    color: #fff;
    /*padding:40px 80px;
    border:solid red;
    margin-top: 0;*/
   
}
.story-card-img{
    position:relative;
    width:700px;
    height:400px;
    z-index:2;
}
.animation-card-container {
    position:relative;
    height:430px;
    max-width: auto;
    display: flex;
    align-items: center;
    flex-direction:row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
   
}

.our-story-card-animation {
    position:absolute;
    top:75px;
    left:99px;
    width:330px;
    height: 180px;
    z-index:-1;

} ` ;


const Title = styled.h1`
margin: 0 0 1.2rem;
font-size: 2.5rem;
font-weight:600;
line-height: 1.1em;


`;

const SubTitle = styled.h2`
font-weight:400;
font-size:1rem;
line-height: 1.25em;
margin: 0 0 1.875rem;


`;