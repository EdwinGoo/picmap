import React, { Component } from 'react';

export class PicWolrdMap extends Component {
  clicktest = e => {
    const pixel = e.target;
    pixel.setAttribute('fill', '#d11ddd');
  };

  dclick = e => {
    const pixel = e.target;
    pixel.setAttribute('fill', '#ffffff');
  };

  render() {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="944">
          <path
            d="M0.5,0.5 L1919.5,0.5 L1919.5,943.5 L0.5,943.5 Z"
            fill="#1e2e50"
            stroke="#000"
            className="amcharts-bg"
          />
          <path
            d="M-5.5,6.5 L6.5,6.5 L6.5,-5.5 L-5.5,-5.5 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.005"
            transform="translate(780 .262)"
            className="amcharts-map-image"
            onClick={this.clicktest}
          />
          <path
            d="M-5.5,6.5 L6.5,6.5 L6.5,-5.5 L-5.5,-5.5 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.008"
            transform="translate(768.007 12.255)"
            className="amcharts-map-image"
            onClick={this.clicktest}
            onDoubleClick={this.dclick}
          />
          <path
            d="M-5.5,6.5 L6.5,6.5 L6.5,-5.5 L-5.5,-5.5 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.008"
            transform="translate(780 12.255)"
            className="amcharts-map-image"
            onClick={this.clicktest}
          />
          <path
            d="M-5.5,6.5 L6.5,6.5 L6.5,-5.5 L-5.5,-5.5 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.008"
            transform="translate(791.993 12.255)"
            className="amcharts-map-image"
            onClick={this.clicktest}
          />
        </svg>
      </div>
    );
  }
}

export default PicWolrdMap;

/* <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="944">
  <path
    d="M0.5,0.5 L1919.5,0.5 L1919.5,943.5 L0.5,943.5 Z"
    fill="#000000"
    stroke="#000"
    className="amcharts-bg"
  />
  <path
    d="M-5.5,6.5 L6.5,6.5 L6.5,-5.5 L-5.5,-5.5 Z"
    fill="#ffffff"
    stroke="#ffffff"
    strokeWidth="0.008"
    transform="translate(780 .262)"
    className="amcharts-map-image"
  />
  <path
    d="M-5.5,6.5 L6.5,6.5 L6.5,-5.5 L-5.5,-5.5 Z"
    fill="#ffffff"
    stroke="#ffffff"
    strokeWidth="0.008"
    transform="translate(768.007 12.255)"
    className="amcharts-map-image"
  />
</svg>; */
