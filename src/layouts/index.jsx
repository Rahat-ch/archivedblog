import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import logo from '../../static/logo/mee.png'
import styled from 'styled-components'


const NavBar = styled.div`
display: inline-block;
width: 100%;
h4{

  margin-left: 5%;
  text-decoration: none;

}
`;


const Menu = styled.div`
  padding-bottom: 10%;
img{
  width: 10%;
  height: 10%;
  border-radius: 50%;
  margin-right: 5%;
  float:left;
  margin-left: 5%;
  text-decoration: none;

}

h6{
  float: left;
  margin-top: 3%;
  text-decoration: none;
}
`;

const SocialMenu = styled.div`
display: inline-block;
width: 100%;
margin-top: 5%;
  a{
  float: left;
  margin-left: 15%;

  }
  h6{
    color: #6C62FF;
  }
`;



export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
      <NavBar>

        <Link to ='/' ><h4>Rahat Codes</h4></Link>
        </NavBar>
          <Menu>
          {/* style={{ textDecoration: 'none' }} */}
          {/* <h3>{data.site.siteMetadata.title}</h3> */}
          <img src={logo} alt='Rahat Profile' id='profile' />
          <h6>A Personal blog by Rahat Chowdhury</h6>
          </Menu>


        {children}


    <SocialMenu>
      <a href= "https://www.linkedin.com/in/rahatc/" target="_blank" rel="noopener noreferrer"><h6>linkedin</h6></a>
      <a href= "https://twitter.com/Rahat_Music" target="_blank" rel="noopener noreferrer"><h6>twitter</h6></a>
      <a href= "https://github.com/Rahat-ch" target="_blank" rel="noopener noreferrer"><h6>github</h6></a>
      <a href= "https://rahatcodes.com/" target="_blank" rel="noopener noreferrer"><h6>portfolio</h6></a>
    </SocialMenu>

        </div>


    )}
  />
)
