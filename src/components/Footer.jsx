import * as React from 'react';
import './Footer.css'
import {Link } from 'react-router-dom'

export const Footer = () => {

  return (
    <div className='main-footer'>
        <div className='container'>
        
          <div className='row'>
            <div className='col'>
              <h5>web develop</h5>
              <ul className='list-unstyled'>
                <li>+7-123-123-2222</li>
                <li>Barnaul, Russia</li>
              </ul>
            </div>
            <div className='col'>
              <h5>Tasks</h5>
              <ul className='list-unstyled'>
                <li><Link to="/authors">List of authors</Link> </li>
                <li><Link to="/login">Add author</Link></li>
              </ul>
            </div>

          </div>
          <hr></hr>
          <div className='col-sm'>
            &copy;{new Date().getFullYear()} All right reserved
          </div>
        </div>
    </div>
  )
}
