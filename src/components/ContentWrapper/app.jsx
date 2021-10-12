import React from 'react'
import './app.less'

function ContentWrapper(props) {
    return (
        <div className="content-wrapper">
            {props.children}
        </div>
    )
}
export default ContentWrapper