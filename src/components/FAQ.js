import React , { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import { NavLink , Link } from 'react-router-dom';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { Icon } from 'react-icons-kit';
import Faq from "react-faq-component";
class FAQ extends Component {

    render ()
    {
        return(
            <FaqComponent >
            
            <div className="animation-card-container our-story-card">
            <div>
               <Title>Frequently Asked Questions</Title>
              
               </div>

               <div>

             
               <Faq data={data} styles={styles} config={confg} className="faqc"/>
               
               </div>
            <div>
                <SubTitle>Ready to watch? Enter your email to create or restart your membership.</SubTitle>
                <Link to="/" className="main-offer-btn" >Get Started
                 <Icon className="icon" icon={ic_keyboard_arrow_right} size={37}/></Link>
            </div>
            </div>
            </FaqComponent>
        )
    }
}

export default FAQ ;

const data = 
{
rows: [
{
title: "What is Netflix ? ",
content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
},
{
title: "How much does Netflix cost ?",
content:
 "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD11.99 a month. No extra costs, no contracts.",
},
{
title: "Where can I watch ?",
content: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere. `,
},
{
title: "How do I cancel ?",
content: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
},
]
};


const FaqComponent = styled.div`
@media only screen and (max-width: 549px) and (min-width: 400px), only screen and (max-width: 399px) and (min-width: 350px), only screen and (max-width: 349px)
{.faqcard .animation-card-container .our-story-card{
    padding: 50px 0;
    width: 100%;
}
.animation-card-container {
    height:800px;
}
.main-offer-btn
{
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    font-size: 1rem;
    min-height: 40px;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin: .25em auto;
    padding: 0 1em;
    line-height: initial;
    width: auto;
    vertical-align: middle;
}
}

@media only screen and (min-width : 768px)
    {.faqcard .animation-card-container .our-story-card{
        padding: 50px 0;
        width: 100%;
    }
    .animation-card-container {
        height:700px;
    }
    .main-offer-btn
    {
        display: inline-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        font-size: 1rem;
        min-height: 40px;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        margin: .25em auto;
        padding: 0 1em;
        line-height: initial;
        width: auto;
        vertical-align: middle;
    }
}

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px)
 { .faqcard .animation-card-container .our-story-card{
    padding: 50px 0;
    width: 100%;
}
.animation-card-container {
    height:700px;
}
.main-offer-btn
{
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    font-size: 1rem;
    min-height: 40px;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin: .25em auto;
    padding: 0 1em;
    line-height: initial;
    width: auto;
    vertical-align: middle;
}
}


div {
    display: block;
}
.main-offer-btn{
    background:var(--main-red);
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    font-weight: 400;
    cursor: pointer;
    display: inline-block.
    align-items: center;
    margin:0 33%;
    padding:0.5rem;
    line-height: initial;
    width: auto;
    font-size:1rem;
    min-height: 40px;
    box-shadow: 0 1px 0 rgba(0,0,0,.45);
    transition: background 0.2s ease-in;
&:hover{
    background: var(--main-red-hover)
        }       
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
    height:600px;
    max-width: auto;
    display: flex;
    align-items: center;
    flex-direction:column;
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
margin-top:20px;
margin-bottom:100px;
margin: 0 0 1.2rem;
font-size: 2rem;
font-weight:600;
margin-bottom:70px;
line-height: 1.1em;


`;

const SubTitle = styled.h2`
font-weight:400;
font-size:1rem;
line-height: 1.25em;
margin:2rem 0 1.875rem;


`;

 const styles = {

    bgColor: '#202020',
    titleTextColor: 'white',
    rowTitleColor: 'white',
     rowContentColor: 'white',
     arrowColor: "red",
};
 
export const confg = {
     animate: true,
     arrowIcon: "V",
};                      