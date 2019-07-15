import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
const config = require('./node_modules/config');

import './style.scss'

class SiteIndex extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle }>
                <div className='index'>

                </div>
            </DocumentTitle>
        )
    }
}

export default SiteIndex