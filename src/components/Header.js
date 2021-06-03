import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { NavLink , Link } from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component 
{
    render()
    {
        return (
            <HeaderComponent className="header-container">
             <div className="header-top">
                <img alt="logo" className="logo" src={logo} />
                <NavLink to="/" className="signIn-btn">Sign in</NavLink>

             </div>
             <div className="header-content">
                 <Title>Unlimited movies, TV <br></br>shows, and more.</Title>
                 <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
                 <Link to="/" className="main-offer-btn" >Try it now
                 <Icon className="icon" icon={ic_keyboard_arrow_right} size={37}/></Link>
             </div>
            </HeaderComponent>
        )
    }
}

export default Header;

const HeaderComponent = styled.div`

        .signIn-btn {
        line-height: normal;
        padding: 7px 17px;
        font-weight: 200;
        font-size: 0.8rem;
        float: right;
        margin-top: 22px;
        margin-right:30px;
        right: 0;
        line-height : normal; 
        border-radius:3px;
        background: var(--main-red);
        position: absolute;
        translate: transforme(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-red-hover);
        }
    }
        .header-top {
            position: -webkit-sticky;
            position: sticky;
            top: 20px;
        }
        .header-content {
            width:65%;
            position:relative;
            margin:2.5rem auto 0;
            display:flex;
            justify-content: center;
            align-content: center;
            text-align: center;
            flex-direction: column;
            z-index:1;
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

        .icon svg {
            vertical-align:bottom;
            margin-left:0.3rem;
        } 
    }`;

//Main Title
const Title = styled.h1`
margin: 0 0 1.2rem;
font-size: 2.5rem;
font-weight:600;
line-height: 1.1em;


`;

const SubTitle = styled.h2`
font-weight:400;
font-size:1.3rem;
line-height: 1.25em;
margin: 0 0 1.875rem;


`;