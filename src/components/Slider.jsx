import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import cats from '../providers/cats.png'
import cats2 from '../providers/cats2.jpg'
import cats3 from '../providers/cats3.jpg'



export default function Slider() {

    return (
        <Carousel>
            <Carousel.Item style={{'height':'900px'}}>
                <img className='d-block w-100' src={cats} alt='Cats' />
                <Carousel.Caption>
                    <h3 style={{'color':'black'}}>котики</h3>
                    <p style={{'color':'black'}}>бери любого</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height':'900px'}}>
                <img className='d-block w-100' src={cats2} alt='Cats' />
                <Carousel.Caption>
                    <h3 style={{'color':'black'}}>котики</h3>
                    <p style={{'color':'black'}}>бери любого</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height':'900px'}}>
                <img className='d-block w-100' src={cats3} alt='Cats' />
                <Carousel.Caption>
                    <h3 style={{'color':'black'}}>котики</h3>
                    <p style={{'color':'black'}}>бери любого</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}