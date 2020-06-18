import React from 'react'
import './YouTubeComp.css'
const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper mt-1">
            <div className="img-thumb">
                <img src={props.image} alt=""/>
    <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here pada props Youtube Prawito',
    desc: 'Ditoton sebanyak 0x',
    image: 'https://rpl.smkn1bawang.sch.id/wp-content/uploads/2020/03/Belajar-Mudah-Cloning-Gojek-App-Implementasi-Scan-QR-Code-20-React-Native-Tutorial-Indonesia.jpg?x79303'
}
export default YouTubeComp;