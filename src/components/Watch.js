import React , { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import '../css/res1280.css';


class Watch extends Component {
    render ()
    {
        return(
            <WatchComponent >
            
            <div className="animation-card-container our-story-card">
            <div>
               <Title>Enjoy on your Tv</Title>
               <SubTitle>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players,and more.</SubTitle>
               </div>
               <div>
               <img className="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
               <div>
               <video className="our-story-card-animation" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" autoPlay="true" loop/>
               </div>
            </div>
            </div>
            </WatchComponent>
        )
    }
}

export default Watch;

const WatchComponent = styled.div`
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
    width:500px;
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
    top:100px;
    bottom:;
    right:50px;
    left:;
    width: 500px;
    height: 190px;
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