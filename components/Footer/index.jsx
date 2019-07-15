import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconEagle from '../../static/img/svg-icons/nihonsuruinline.svg'
import iconKamon from '../../static/img/svg-icons/nihonsuruinline.svg'
import iconOdayaka from '../../static/img/svg-icons/odayaka.svg'

class Footer extends React.Component {
  render() {
    const {location} = this.props
    const {route} = this.props
    const page = route.page.data

    return (
      <div className='footer'>
        <div className='footer__wrapper'>

	<div className='footer__container-floating'>

  <div className='footer__floating-button' data-toggle='tooltip' data-placement='left' data-original-title='Create' onclick='newmail()'>
        <Link to={ config.sitePhoneLink } className='footer__plus' >
                    <span className='footer__plus'>Gọi</span>
          <Ink />
        </Link> 
  </div>

</div>


	  <div className='footer__copyright'>
          </div>
       <div className='footer__left'>

	    <div><img className='footer__powered-svg' src={ prefixLink(iconOdayaka) }/> { config.siteTitle }</div>


        </div>

	
	
	<div className='footer__right'>
            
          
	    
	     <div className='footer__powered'>
            <span>Thành viên của </span>
            <a href='https://odayaka.vn' className='footer__powered-link' target='_blank'>
              <img className='footer__powered-svg' src={ prefixLink(iconEagle) }/>
              <span className='footer__powered-fx'>Odayaka</span>
            </a>
          </div>


        </div>



        <div className='footer__centered'>


         <nav className='footer__versions'>
	    <h3>{ config.siteAddress }</h3>
	    <h3>{ config.siteAddress2 }</h3>
            <a href='/tos/privacy'>Privacy</a>
            <a href='/tos'>Terms of service</a>
            <a href='/about' className='is-selected'><img className='footer__powered-svg' src={ prefixLink(iconKamon) }/> Giới thiệu { config.siteTitle }</a>
	    <a href='https://odayaka.vn/'>© Odayaka Phú Quốc. <strong>{ config.sitePhone }</strong></a>
          </nav>
        </div>
        </div>
      </div>
    );
  }
}

export default Footer
