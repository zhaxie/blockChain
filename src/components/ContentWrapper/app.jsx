import React from 'react'
import './app.less'

function ContentWrapper(props) {
    console.info('props.children', props.children)
    return (
        <div className="content-wrapper">
            {props.children}
        </div>
    )
}
export default ContentWrapper