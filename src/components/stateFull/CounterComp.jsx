import React, { Component } from 'react'

export default class CounterComp extends Component {
    state = {
        angka: 0
    }

    handleAngka = () => {
        this.setState( prevState =>  ({
            angka: prevState.angka + 1
        }))
    }
    render() {
        return (
            <div>
              <p className='ml-2'>{this.state.angka}</p>  
              <button className='btn btn-success p-2 ml-2' onClick={this.handleAngka}>+</button>
            </div>
        )
    }
}
