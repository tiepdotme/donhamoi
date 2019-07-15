import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconFacebook from '../../static/img/svg-icons/facebook.svg'
import iconSmartphone from '../../static/img/svg-icons/smartphone.svg'

class SocNav extends React.Component {
    render() {

        return (
            <div className='socnav'>

                <a href={ config.siteFacebookUrl } className='socnav__link' target='_blank'>
                    <img className='socnav__link-icon' src={ prefixLink(iconFacebook) }/>
                    <span className='socnav__link-name'>facebook</span>
                    <Ink />
                </a>

                <a href={ config.sitePhoneLink } className='socnav__link' target='_blank'>
                    <img className='socnav__link-icon' src={ prefixLink(iconSmartphone) }/>
                    <span className='socnav__link-name'>{ config.sitePhone }</span>
                    <Ink />
                </a>
            </div>
        );
    }
}

export default SocNav
