import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="lNav">
            <svg width="40" height="40" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><rect width="240" height="240" rx="44" fill="url(#paint0_linear_2_2)"></rect><path d="M134.415 78.2608L175.976 144.738C183.055 156.061 174.915 170.75 161.561 170.75H78.4386C65.0852 170.75 56.945 156.061 64.024 144.738L105.585 78.2608C112.244 67.6102 127.756 67.6102 134.415 78.2608Z" stroke="white" stroke-width="14"></path><defs><linearGradient id="paint0_linear_2_2" x1="0" y1="120" x2="240" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="#8E2DE2"></stop><stop offset="1" stop-color="#4A00E0"></stop></linearGradient></defs></svg>
              tip top</div>
            <div className="rNav">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-brands fa-shopify"></i>
              <i class="fa-regular fa-circle-user"></i>
              </div>
        </nav>
      </div>
    )
  }
}
