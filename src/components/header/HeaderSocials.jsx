import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {ImDribbble} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div classame="header__socials">
        <a href="https://linkedin.com" target="_blank" ><ImLinkedin/></a>
        <a href="https://github.com" target="_blank" ><ImGithub/></a>
        <a href="https://dribbble.com" target="_blank" ><ImDribbble/></a>

        </div>
  )
}

export default HeaderSocials