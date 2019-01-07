import React from 'react';
import styled from 'styled-components'

import {
  RedditShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share'

import {
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
  RedditIcon
} from 'react-share';

const ShareWrapper = styled.div`
  display: flex;

  margin-left: 20%;
  margin-top: 5%;
  font-size: 75%;
  width: 75%;

`;



// componentDidMount(){
//   this.setState({Canonical: window.location.href})
// }

 const SocialShare = ({ list }) => {
   if (typeof window === `undefined`) {
     return null
   } else {
     return (
       <ShareWrapper>
        <TwitterShareButton url={window.location.href} children={<TwitterIcon size={32} round={true} />} />
        <LinkedinShareButton url={window.location.href} children={<LinkedinIcon size={32} round={true} />} />
        <RedditShareButton url={window.location.href} children={<RedditIcon size={32} round={true} />} />
        <EmailShareButton url={window.location.href} children={<EmailIcon size={32} round={true} />} />
      </ShareWrapper>
     )
   }
 }

 export default SocialShare
