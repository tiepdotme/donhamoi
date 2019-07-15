import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {

    const AdsenseSponsorAds = buildAdsenseSponsorAds();
    const AdsenseSponsorAdsEnds = buildAdsenseSponsorAdsEnds();

        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor <br />
		<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
		{ process.env.NODE_ENV === 'production' ? AdsenseSponsorAds : null }
		{ process.env.NODE_ENV === 'production' ? AdsenseSponsorAdsEnds : null }
		</div>
                <div className='sidebar__title'>Important</div>
		<div className='sidebar__link'>
		<a href='/about/'>Odayaka Web & Advertising</a>
		<a href='https://odayaka.vn/nangluongmattroi'>Năng lượng mặt trời</a>
		<a href='https://thuexehonda.com'>Thuê xe Honda Phú Quốc</a>
		<a href='/payments/'>How to pay? Thanh toán</a>
		<a href='/help'>Hướng dẫn sử dụng</a>
		</div>
            </div>
        );
    }
}

function buildAdsenseSponsorAds() {
  const js = `
  <!-- Sponsor Right Sidebar -->
<ins class='adsbygoogle'
     style='display:block'
     data-ad-client='ca-pub-IDHERE'
     data-ad-slot='8665159676'
     data-ad-format='auto'></ins>
  `;

  return <script
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}

function buildAdsenseSponsorAdsEnds() {
  const js = `
  (adsbygoogle = window.adsbygoogle || []).push({});
  `;

  return <script
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}

export default SideBar
