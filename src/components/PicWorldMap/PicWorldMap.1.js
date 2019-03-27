/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import './PicWorldMap.css';
// import { Button, Popup } from 'semantic-ui-react';

export class PicWolrdMap extends Component {
  clicktest = e => {
    const pixel = e.target;
    pixel.setAttribute('fill', '#FFC700');
    console.log(e.target.getAttribute('transform'));
  };

  dclick = e => {
    const pixel = e.target;
    pixel.setAttribute('fill', '#ffffff');
  };

  render() {
    const star =
      'M 13.7962 5.10434 l -3.91405 -0.0601395 l -1.55804 -4.18443 c -0.300381 -0.772334 -1.34866 -0.772334 -1.64754 0 l -1.55804 4.18443 l -3.91405 0.0601395 c -0.810118 0.049077 -1.13932 1.111 -0.511254 1.64434 l 3.17372 2.87087 l -1.08167 3.92015 c -0.21239 0.805537 0.623517 1.47024 1.31227 1.04293 l 3.4028 -1.94187 l 3.4028 1.94031 c 0.688752 0.427307 1.52466 -0.237393 1.31227 -1.04295 l -1.08167 -3.92015 l 3.17372 -2.87086 C 14.9355 6.21378 14.6063 5.15182 13.7962 5.10434 Z';
    return (
      <div className="map">
        <svg version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="auto" viewBox="0 0 1920 1000" xmlSpace="preserve">
          <g
            transform="translate(0,40) scale(1)"
            onClick={this.clicktest}
            onDoubleClick={this.dclick}
            fill="#ffffff"
            fillOpacity={1}
            stroke="#6d6d6d"
            strokeOpacity={0.1} // default : value 1 , value :[0-1] | <percentage>
          >
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 16.258)" className="Greenland" />
            <path fill="#FFC700" d={star} transform="translate(768.007 16.258)" />

            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 16.258)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 16.258)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 16.258)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 32.254)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 32.254)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 32.254)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 32.254)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 32.254)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 32.254)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 48.264)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 48.264)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 48.264)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 48.264)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 48.264)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688.000 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(863.996 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 96.266)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 96.266)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 112.262)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 112.262)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 112.262)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 128.257)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 128.257)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 144.253)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 144.253)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 144.253)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 160.263)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 240.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 240.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 240.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 240.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 240.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 240.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 256.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 256.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 256.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 256.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 256.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 256.253)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 272.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 272.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 272.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 272.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 272.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(815.994 272.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 272.263)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 272.263)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 272.263)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 288.259)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 288.259)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 288.259)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784.003 288.259)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(799.999 288.259)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 288.259)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 288.259)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 288.259)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 304.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 304.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 304.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 304.255)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 304.255)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 304.255)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 304.255)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 320.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832.005 320.265)" className="Iceland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 320.265)" className="Iceland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 320.265)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 320.265)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 320.265)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 336.26)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 336.26)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 336.26)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 336.26)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 336.26)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 352.256)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 352.256)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 352.256)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 352.256)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 352.256)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 368.267)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 368.267)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 384.262)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 384.262)" className="Latvia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 400.258)" className="Lithuania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 400.258)" className="Lithuania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 400.258)" className="Belarus" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 416.254)" className="Netherlands" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 416.254)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 416.254)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 416.254)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 416.254)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 416.254)" className="Belarus" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 416.254)" className="Belarus" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 416.254)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 416.254)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 416.254)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 432.264)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 432.264)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 432.264)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 432.264)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 432.264)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 432.264)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 432.264)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 432.264)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 432.264)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 432.264)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 432.264)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 432.264)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 432.264)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 432.264)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 448.26)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 448.26)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 448.26)" className="Austria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 448.26)" className="Slovakia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 448.26)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 448.26)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 448.26)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 448.26)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 448.26)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 448.26)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 448.26)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 448.26)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 448.26)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 448.26)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 448.26)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 448.26)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 464.256)" className="Italy" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 464.256)" className="Slovenia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 464.256)" className="Croatia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 464.256)" className="Romania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 464.256)" className="Romania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 464.256)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 464.256)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 464.256)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 464.256)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 464.256)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 464.256)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 464.256)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 464.256)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 464.256)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 464.256)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 464.256)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 464.256)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 464.256)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 464.256)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 480.266)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 480.266)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 480.266)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 480.266)" className="Italy" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 480.266)" className="Croatia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 480.266)" className="Serbia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 480.266)" className="Bulgaria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 480.266)" className="Georgia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 480.266)" className="Uzbekistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 480.266)" className="Uzbekistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 480.266)" className="Uzbekistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 480.266)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 480.266)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 480.266)" className="Kyrgyzstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 480.266)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 480.266)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 480.266)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 496.262)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 496.262)" className="Italy" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 496.262)" className="Greece" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 496.262)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 496.262)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 496.262)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 496.262)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 496.262)" className="Azerbaijan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 496.262)" className="Azerbaijan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 496.262)" className="Turkmenistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 496.262)" className="Turkmenistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 496.262)" className="Turkmenistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 496.262)" className="Uzbekistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 496.262)" className="Tajikistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 496.262)" className="Kyrgyzstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 512.258)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 512.258)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 512.258)" className="Tunisia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 512.258)" className="Greece" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 512.258)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 512.258)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 512.258)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 512.258)" className="Syria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 512.258)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 512.258)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 512.258)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 512.258)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 512.258)" className="Turkmenistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 512.258)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 512.258)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 512.258)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 528.254)" className="Morocco" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 528.254)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 528.254)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 528.254)" className="Tunisia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 528.254)" className="Syria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 528.254)" className="Iraq" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 528.254)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 528.254)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 528.254)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 528.254)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 528.254)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 528.254)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 528.254)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 528.254)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 544.264)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 544.264)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 544.264)" className="Morocco" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 544.264)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 544.264)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 544.264)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 544.264)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 544.264)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 544.264)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 544.264)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 544.264)" className="Iraq" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 544.264)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 544.264)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 544.264)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 544.264)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 544.264)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 544.264)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 544.264)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 560.26)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 560.26)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 560.26)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 560.26)" className="Western Sahara" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 560.26)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 560.26)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 560.26)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 560.26)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 560.26)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 560.26)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 560.26)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 560.26)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 560.26)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 560.26)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 560.26)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 560.26)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 560.26)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 560.26)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 560.26)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 576.255)" className="Cuba" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(863.996 576.255)" className="Western Sahara" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 576.255)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 576.255)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 576.255)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 576.255)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 576.255)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 576.255)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 576.255)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 576.255)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 576.255)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 576.255)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 576.255)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 576.255)" className="United Arab Emirates" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 576.255)" className="Oman" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 592.266)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 592.266)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 592.266)" className="Haiti" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(863.996 592.266)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 592.266)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 592.266)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 592.266)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 592.266)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 592.266)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 592.266)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 592.266)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 592.266)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 592.266)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 592.266)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 592.266)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 592.266)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 592.266)" className="Oman" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 608.261)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 608.261)" className="Honduras" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 608.261)" className="Honduras" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(863.996 608.261)" className="Senegal" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 608.261)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 608.261)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 608.261)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 608.261)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 608.261)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 608.261)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 608.261)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 608.261)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 608.261)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 608.261)" className="Yemen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 608.261)" className="Yemen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 608.261)" className="Thailand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 608.261)" className="Vietnam" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 608.261)" className="Philippines" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 624.257)" className="Nicaragua" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 624.257)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(863.996 624.257)" className="Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 624.257)" className="Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 624.257)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 624.257)" className="Burkina Faso" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 624.257)" className="Benin" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 624.257)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 624.257)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 624.257)" className="Somalia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 624.257)" className="Vietnam" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 640.253)" className="Panama" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 640.253)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 640.253)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 640.253)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 640.253)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 640.253)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 640.253)" className="Liberia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 640.253)" className="Côte d'Ivoire" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 640.253)" className="Ghana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 640.253)" className="Benin" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 640.253)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 640.253)" className="Central African Republic" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 640.253)" className="South Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 640.253)" className="South Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 640.253)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 640.253)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 640.253)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 640.253)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 640.253)" className="Somalia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 640.253)" className="Sri Lanka" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 640.253)" className="Philippines" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 656.263)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 656.263)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 656.263)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 656.263)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 656.263)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 656.263)" className="Suriname" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 656.263)" className="French Guiana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 656.263)" className="Cameroon" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 656.263)" className="Cameroon" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 656.263)" className="Central African Republic" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 656.263)" className="Central African Republic" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 656.263)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 656.263)" className="South Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 656.263)" className="Uganda" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 656.263)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 656.263)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 656.263)" className="Somalia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 656.263)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 656.263)" className="Malaysia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 656.263)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 672.26)" className="Ecuador" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 672.26)" className="Ecuador" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 672.26)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 672.26)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 672.26)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 672.26)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 672.26)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 672.26)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 672.26)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 672.26)" className="Gabon" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 672.26)" className="Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 672.26)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 672.26)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 672.26)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 672.26)" className="Uganda" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 672.26)" className="Uganda" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 672.26)" className="Kenya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 672.26)" className="Somalia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 672.26)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 672.26)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 672.26)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 688.255)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 688.255)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 688.255)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 688.255)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 688.255)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 688.255)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 688.255)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 688.255)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 688.255)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 688.255)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 688.255)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 688.255)" className="Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 688.255)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 688.255)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 688.255)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 688.255)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 688.255)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 688.255)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 688.255)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 688.255)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 688.255)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 688.255)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768.007 704.265)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 704.265)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 704.265)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 704.265)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 704.265)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 704.265)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 704.265)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 704.265)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 704.265)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 704.265)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 720.261)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 720.261)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 720.261)" className="Bolivia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 720.261)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 720.261)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 720.261)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 720.261)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 720.261)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 720.261)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 720.261)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 720.261)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 720.261)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 720.261)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 720.261)" className="Zambia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 720.261)" className="Zambia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 720.261)" className="Malawi" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 720.261)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 720.261)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 736.257)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 736.257)" className="Bolivia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 736.257)" className="Bolivia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 736.257)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 736.257)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 736.257)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 736.257)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 736.257)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 736.257)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 736.257)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 736.257)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 736.257)" className="Zambia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 736.257)" className="Zambia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 736.257)" className="Zimbabwe" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 736.257)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 736.257)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 736.257)" className="Madagascar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 736.257)" className="Madagascar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 736.257)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 736.257)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 736.257)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 736.257)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 736.257)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 752.253)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 752.253)" className="Bolivia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 752.253)" className="Paraguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 752.253)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 752.253)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 752.253)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 752.253)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 752.253)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 752.253)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 752.253)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 752.253)" className="Botswana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 752.253)" className="Botswana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 752.253)" className="Zimbabwe" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 752.253)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 752.253)" className="Madagascar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 752.253)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 752.253)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 752.253)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 752.253)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 752.253)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 752.253)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 768.263)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 768.263)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 768.263)" className="Paraguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 768.263)" className="Paraguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 768.263)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 768.263)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 768.263)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 768.263)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 768.263)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 768.263)" className="Botswana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 768.263)" className="Botswana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 768.263)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 768.263)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 768.263)" className="Madagascar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 768.263)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 784.259)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 784.259)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 784.259)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 784.259)" className="Paraguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 784.259)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 784.259)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 784.259)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 784.259)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 784.259)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 784.259)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 784.259)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 800.254)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 800.254)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 800.254)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 800.254)" className="Uruguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 800.254)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 800.254)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 800.254)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 800.254)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 800.254)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 800.254)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 816.265)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 816.265)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 816.265)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 816.265)" className="Uruguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 816.265)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 816.265)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 816.265)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 816.265)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 816.265)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 816.265)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 816.265)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 816.265)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 816.265)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 832.26)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 832.26)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 832.26)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 832.26)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 832.26)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 832.26)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 832.26)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 832.26)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1631.997 832.26)" className="New Zealand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 848.256)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 848.256)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 848.256)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1631.997 848.256)" className="New Zealand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 864.267)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 864.267)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 864.267)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 864.267)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1616.001 864.267)" className="New Zealand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 880.262)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 880.262)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1600.005 880.262)" className="New Zealand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 896.258)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 896.258)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 912.254)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 928.264)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 928.264)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 640.253)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 640.253)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 624.257)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 624.257)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 640.253)" className="Cameroon" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 624.257)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 624.257)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 624.257)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 624.257)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 608.261)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 608.261)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 608.261)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 592.266)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 592.266)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 592.266)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 624.257)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 624.257)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 608.261)" className="Eritrea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 592.266)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 576.255)" className="Myanmar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 560.26)" className="Myanmar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 592.266)" className="Myanmar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 592.266)" className="Thailand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 576.255)" className="Taiwan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 464.256)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 704.265)" className="Papua New Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 688.255)" className="Papua New Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 704.265)" className="Solomon Islands" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 704.265)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 688.255)" className="Papua New Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 528.254)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 512.258)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 496.262)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 480.266)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 480.266)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 512.258)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 512.258)" className="South Korea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 592.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 576.255)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 576.255)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 576.255)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 560.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 560.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 576.255)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 560.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 560.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 560.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 464.256)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 544.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 528.254)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 576.255)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 512.258)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 496.262)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 480.266)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 464.256)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 464.256)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 560.26)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 464.256)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 464.256)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 464.256)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 464.256)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 448.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 448.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 448.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 448.26)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 432.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 432.264)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 608.261)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 624.257)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 608.261)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 592.266)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 592.266)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 592.266)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 592.266)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 576.255)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 576.255)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 576.255)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 576.255)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 576.255)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 576.255)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 576.255)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 560.26)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 560.26)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 560.26)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 560.26)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 544.264)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 528.254)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 560.26)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 624.257)" className="Cambodia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 608.261)" className="Thailand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 592.266)" className="Vietnam" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 576.255)" className="Vietnam" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 576.255)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 560.26)" className="Nepal" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 544.264)" className="Nepal" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 544.264)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 576.255)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 576.255)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 560.26)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 560.26)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 560.26)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 560.26)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 544.264)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992.006 544.264)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 544.264)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 544.264)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 576.255)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008.002 576.255)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 560.26)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1023.998 544.264)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(863.996 560.26)" className="Western Sahara" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 544.264)" className="Morocco" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 528.254)" className="Morocco" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 496.262)" className="North Korea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 480.266)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 560.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 544.264)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 544.264)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 544.264)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 544.264)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 544.264)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 528.254)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 512.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 512.258)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 496.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 496.262)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 480.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 464.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 448.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 448.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 448.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 448.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 448.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 448.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 448.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 448.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 400.258)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 384.262)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(367.996 368.267)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 368.267)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(303.999 368.267)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 368.267)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272.007 368.267)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336.005 352.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(319.995 352.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(303.999 352.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 352.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272.007 352.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(255.997 352.256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336.005 336.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(319.995 336.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(303.999 336.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 336.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272.007 336.26)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336.005 320.265)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(319.995 320.265)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(303.999 320.265)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 320.265)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272.007 320.265)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(255.997 320.265)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240.001 320.265)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336.005 304.255)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(319.995 304.255)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(303.999 304.255)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 304.255)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272.007 304.255)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(255.997 304.255)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336.005 288.259)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(319.995 288.259)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(303.999 288.259)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 288.259)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272.007 288.259)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(255.997 288.259)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240.001 288.259)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336.005 272.263)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(319.995 272.263)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(303.999 272.263)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 272.263)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272.007 272.263)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(255.997 272.263)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 256.253)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 592.266)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880.007 416.254)" className="Ireland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 400.258)" className="United Kingdom" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288.003 592.266)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 240.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 80.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 64.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 48.264)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 32.254)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(751.997 16.258)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 480.266)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 464.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 448.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 464.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 464.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 464.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 464.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 448.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 448.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 448.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 448.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 448.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 448.26)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 432.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 416.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 400.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 432.264)" className="United Kingdom" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 384.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896.002 384.262)" className="United Kingdom" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 368.267)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 368.267)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(367.996 352.256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 352.256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(367.996 336.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 336.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(367.996 320.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 320.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(367.996 304.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 304.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384.007 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(367.996 288.259)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 288.259)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400.002 272.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 272.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 256.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 256.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 240.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(415.998 224.261)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 208.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 208.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 208.265)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 192.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 192.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 192.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 192.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(479.996 192.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 192.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448.004 192.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 176.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 176.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 176.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 176.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 176.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 176.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 176.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 160.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 160.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 160.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(431.994 160.263)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 144.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 144.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 144.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 144.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512.002 144.253)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 128.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 128.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 128.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 128.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 128.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496.006 128.257)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 112.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 112.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 112.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 112.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 112.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 112.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 112.262)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 96.266)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 96.266)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 96.266)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 96.266)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(527.998 96.266)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 80.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 80.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 80.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 80.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 80.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 80.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(543.994 80.255)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 64.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 64.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 64.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 64.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 64.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 64.26)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 48.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 48.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 48.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 48.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 48.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 48.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560.004 48.264)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 32.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 32.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 32.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 32.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(591.995 32.254)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624.001 16.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608.006 16.258)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 464.256)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 480.266)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 464.256)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944.004 464.256)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 704.265)" className="Papua New Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 448.26)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 432.264)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 432.264)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 432.264)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(927.994 432.264)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 416.254)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(911.998 416.254)" className="United Kingdom" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(975.996 400.258)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 384.262)" className="Denmark" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 368.267)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 352.256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 336.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736.001 320.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 288.259)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 272.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 256.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 240.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 224.261)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 208.265)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(703.995 192.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 176.26)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 160.263)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(639.997 144.253)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(655.993 128.257)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 112.262)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672.003 96.266)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 480.266)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 464.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 464.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 464.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 464.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 448.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 448.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 448.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 448.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 448.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 448.26)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 432.264)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1552.004 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 416.254)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1552.004 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 400.258)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 384.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1583.995 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 368.267)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1616.001 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1600.005 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1552.004 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 352.256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1631.997 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1616.001 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1600.005 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1583.995 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1552.004 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 336.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1679.999 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1647.993 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1631.997 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1616.001 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1600.005 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1583.995 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1552.004 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1087.995 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 320.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1679.999 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1664.003 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1647.993 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1631.997 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1616.001 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1600.005 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1583.995 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1552.004 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720.005 304.255)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 304.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1647.993 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1631.997 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1616.001 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1600.005 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1583.995 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1552.004 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216.005 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104.006 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056.004 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1039.993 288.259)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1631.997 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1616.001 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1568 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1552.004 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 272.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1647.993 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1535.993 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1471.996 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1456 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 256.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1519.998 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440.004 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1407.998 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1199.995 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 240.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1423.994 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392.002 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264.007 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1247.997 224.261)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 208.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 208.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 208.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 208.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 208.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280.003 208.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 208.265)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1504.002 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1488.006 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376.006 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168.003 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1151.993 192.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1359.996 176.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 176.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 176.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1183.999 176.26)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 160.263)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 144.253)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328.005 128.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 128.257)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 112.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 112.262)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 96.266)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1295.999 96.266)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120.001 96.266)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1311.994 80.255)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1135.997 480.266)" className="Kazakhstan" />
          </g>
        </svg>
      </div>
    );
  }
}

export default PicWolrdMap;
