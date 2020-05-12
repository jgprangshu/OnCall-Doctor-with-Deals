import React, { Component } from 'react'

const footer = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '2.5rem',
    background:'white'
}

export default class Footer extends Component {
    render() {
        return (
              <div style={footer}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
              </div>  
        )
    }
}
