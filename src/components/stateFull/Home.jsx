import React, { Component,Fragment } from 'react'
import Posts from './Posts'
// import YouTubeComp from '../YouTube/YouTubeComp'
// import StateComponent from './StateComponent'
// import CounterComp from './CounterComp'
// import FormInput from './FormInput'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                {/* <p className='mt-2'>Youtube component</p>
                <hr/>
                <YouTubeComp 
                time='22.11' 
                image='https://i.ytimg.com/vi/xCmG3zwMtOw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB4bi1Ft_XNR6yu390xdgDhW_7Aow' title='Cara membuat migration di Laravel'
                desc='Ditonton sebanyak 1000 views'/>
                <YouTubeComp 
                time='30.23' 
                image='https://i.ytimg.com/vi/4AsOTDdmx_I/maxresdefault.jpg' 
                title='Cara setup Eslint di javascript prawito hudoro' 
                desc='Ditonton sebanyak 1000 views'/>
                <YouTubeComp 
                time='10.90' 
                image='https://i.ytimg.com/vi/AxTpAXA1imI/maxresdefault.jpg' 
                title='Jatuh bangun seorang programmer'
                desc='Ditonton sebanyak 1000 views'/>
                <YouTubeComp 
                time='15.32' 
                image='https://rpl.smkn1bawang.sch.id/wp-content/uploads/2020/03/Belajar-Mudah-Global-API-Services-PUT-DELETE-Part-3-26-ReactJS-Tutorial-Indonesia.jpg?x52317' 
                title='Global Api service prawito hudoro' 
                desc='Ditonton sebanyak 1000 views'/>
                <YouTubeComp 
                time='11.34' 
                image='https://rpl.smkn1bawang.sch.id/wp-content/uploads/2020/03/Belajar-Mudah-Cloning-Gojek-App-Implementasi-Scan-QR-Code-20-React-Native-Tutorial-Indonesia.jpg?x79303'
                desc='Ditonton sebanyak 1000 views'
                title='Cloning gojek app prawito hudoro'/>
                <YouTubeComp/>
                <StateComponent/>
                <CounterComp/> */}
                {/* <FormInput/> */}
                <div className='mt-3'>
                    <Posts/>
                </div>
            </Fragment>
        )
    }
}
