import React , { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

class Download extends Component {
    render ()
    {
        return(
            <DownComponent >
            
            <div className="animation-card-container our-story-card">
            <img alt="" className="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
             
              <div className="downloading cadre">
              <img className="netimg" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                <div className="row">
               <div id="" class="text-0" data-uia="">Stranger Things</div>
              
               <div id="" class="text-1" data-uia=""><span>Downloading...</span></div>
               </div>
               <img  className="gif" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"/>
               </div>
            <div>
               <Title>Download your shows to watch offline.</Title>
               <SubTitle>Save your favorites easily and always have something to watch.</SubTitle>
               </div>
              </div>
            </DownComponent>
        )
    }
}

export default Download;

const DownComponent = styled.div`
div {
    display: block;
}
span {
    color:blue;
}
.gif{
    width:48px;
    height:60px;
}
.netimg{
    width:45px;
    height:64.7px;
}
.story-card-img{
    
    width:500px;
    z-index:-1;
}
.cadre{
    position:absolute;
    top:300px;
    left:165px;
}
.downloading{
    border:solid 1px grey;
    display:flex;
    flex-direction:row;
    align-items: center;
    z-index:2;
    width:300px;
    height:83.19px;
    color:white;
    font-size:  16px;
    background:black;
    padding: 5.6px 12px;
    border-radius:10px;
    
}
.row {
    display:flex;
    flex-direction:column;
    margin-left:20px;
   width:500px;
   align-items:left;
    
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

.animation-card-container {
    position:relative;
    height:430px;
    max-width: auto;
    display: flex;
    align-items: center;
    flex-direction:row;
    -webkit-box-align: center;
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