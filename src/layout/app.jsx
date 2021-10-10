import React from 'react'
import Header from './components/Header/app'
import LeftSideNav from './components/LeftSideNav/app'

class LayOut extends React.Component {
    render() {
        console.info('this.props', this.props)
        return (
            <div>
                <Header></Header>
                <LeftSideNav></LeftSideNav>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default LayOut