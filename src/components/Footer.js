import React , { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import { NavLink , Link } from 'react-router-dom';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { Icon } from 'react-icons-kit';
class Footer extends Component {
    render ()
    {
        return(
            <FooterComponent >
              
            <div className="animation-card-container">
            
            <h4>Questions? Contact us.</h4>
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
                <ul>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Netflix Originals</li>
                </ul>
                <ul>
                    <li>Media center</li>
                    <li>Terms of use</li>
                    <li>Contact us </li>
                    <li>  <br></br></li>
        
                </ul>
            </div>
          
            
            </FooterComponent>
        )
    }
}

export default Footer;

const FooterComponent = styled.div`
div {
    display: block;
}

h4{
    margin-left:39px;
    color:grey;
    font-weight:2px;
}
li {
    margin-right:20px;
    margin-bottom:30px;
    color:grey;

    font-size:13px;
}
ul {
    list-style-type:none;
    float:left;
}

.our-story-card {
    position: relative;
   
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
    margin:50px 20px 0px 100px;
   
   
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



