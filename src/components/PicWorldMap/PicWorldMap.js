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
            transform="translate(240,40) scale(1)"
            onClick={this.clicktest}
            onDoubleClick={this.dclick}
            fill="#ffffff"
            fillOpacity={1}
            stroke="#6d6d6d"
            strokeOpacity={0.1} // default : value 1 , value :[0-1] | <percentage>
          >
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 0)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 0)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 0)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 0)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 16)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 16)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 16)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 16)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 16)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 16)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 32)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 32)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 32)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 32)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 32)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 80)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 80)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 96)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 96)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 96)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 112)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 112)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 128)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 128)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 128)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 144)" className="Svalbard and Jan Mayen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 224)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 224)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 224)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 224)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 224)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 224)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 240)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 240)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 240)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 240)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 240)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 240)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(576 256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 256)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 256)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 256)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 272)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 272)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 272)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(544 272)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(560 272)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 272)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 272)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 272)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 288)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 288)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 288)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 288)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 288)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 288)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 288)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 304)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(592 304)" className="Iceland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(608 304)" className="Iceland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 304)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 304)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 304)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 320)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 320)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 320)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 320)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 320)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 336)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 336)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 336)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 336)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 336)" className="Finland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 352)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 352)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 368)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 368)" className="Latvia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 384)" className="Lithuania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 384)" className="Lithuania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 384)" className="Belarus" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 400)" className="Netherlands" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 400)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 400)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 400)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 400)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 400)" className="Belarus" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 400)" className="Belarus" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 400)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 400)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 400)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 416)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 416)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 416)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 416)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 416)" className="Poland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 416)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 416)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 416)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 416)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 416)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 416)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 416)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 416)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 416)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 432)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 432)" className="Germany" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 432)" className="Austria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 432)" className="Slovakia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 432)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 432)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 432)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 432)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 432)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 432)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 432)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 432)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 432)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 432)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 432)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 432)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 448)" className="Italy" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 448)" className="Slovenia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 448)" className="Croatia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 448)" className="Romania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 448)" className="Romania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 448)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 448)" className="Ukraine" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 448)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 448)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 448)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 448)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 448)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 448)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 448)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 448)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 448)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 448)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 448)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 448)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 464)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 464)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 464)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 464)" className="Italy" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 464)" className="Croatia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 464)" className="Serbia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 464)" className="Bulgaria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 464)" className="Georgia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 464)" className="Uzbekistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 464)" className="Uzbekistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 464)" className="Uzbekistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 464)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 464)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 464)" className="Kyrgyzstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 464)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 464)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 464)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 480)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 480)" className="Italy" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 480)" className="Greece" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 480)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 480)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 480)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 480)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 480)" className="Azerbaijan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 480)" className="Azerbaijan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 480)" className="Turkmenistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 480)" className="Turkmenistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 480)" className="Turkmenistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 480)" className="Uzbekistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 480)" className="Tajikistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 480)" className="Kyrgyzstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 496)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 496)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 496)" className="Tunisia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 496)" className="Greece" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 496)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 496)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 496)" className="Turkey" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 496)" className="Syria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 496)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 496)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 496)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 496)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 496)" className="Turkmenistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 496)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 496)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 496)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 512)" className="Morocco" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 512)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 512)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 512)" className="Tunisia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 512)" className="Syria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 512)" className="Iraq" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 512)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 512)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 512)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 512)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 512)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 512)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 512)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 512)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 528)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 528)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 528)" className="Morocco" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 528)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 528)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 528)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 528)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 528)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 528)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 528)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 528)" className="Iraq" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 528)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 528)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 528)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 528)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 528)" className="Afghanistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 528)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 528)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 544)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 544)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 544)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 544)" className="Western Sahara" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 544)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 544)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 544)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 544)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 544)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 544)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 544)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 544)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 544)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 544)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 544)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 544)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 544)" className="Iran" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 544)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 544)" className="Pakistan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 560)" className="Cuba" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624 560)" className="Western Sahara" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 560)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 560)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 560)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 560)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 560)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 560)" className="Algeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 560)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 560)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 560)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 560)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 560)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 560)" className="United Arab Emirates" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 560)" className="Oman" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 576)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 576)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 576)" className="Haiti" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624 576)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 576)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 576)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 576)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 576)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 576)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 576)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 576)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 576)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 576)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 576)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 576)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 576)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 576)" className="Oman" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 592)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 592)" className="Honduras" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 592)" className="Honduras" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624 592)" className="Senegal" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 592)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 592)" className="Mauritania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 592)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 592)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 592)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 592)" className="Niger" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 592)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 592)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 592)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 592)" className="Yemen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 592)" className="Yemen" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 592)" className="Thailand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 592)" className="Vietnam" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 592)" className="Philippines" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 608)" className="Nicaragua" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 608)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624 608)" className="Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 608)" className="Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 608)" className="Mali" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 608)" className="Burkina Faso" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 608)" className="Benin" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 608)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 608)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 608)" className="Somalia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 608)" className="Vietnam" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 624)" className="Panama" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 624)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 624)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 624)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 624)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 624)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 624)" className="Liberia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 624)" className="Côte d'Ivoire" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 624)" className="Ghana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 624)" className="Benin" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 624)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 624)" className="Central African Republic" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 624)" className="South Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 624)" className="South Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 624)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 624)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 624)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 624)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 624)" className="Somalia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 624)" className="Sri Lanka" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 624)" className="Philippines" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 640)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 640)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 640)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 640)" className="Venezuela" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 640)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 640)" className="Suriname" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 640)" className="French Guiana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 640)" className="Cameroon" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 640)" className="Cameroon" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 640)" className="Central African Republic" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 640)" className="Central African Republic" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 640)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 640)" className="South Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 640)" className="Uganda" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 640)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 640)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 640)" className="Somalia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 640)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 640)" className="Malaysia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 640)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 656)" className="Ecuador" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 656)" className="Ecuador" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 656)" className="Colombia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 656)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 656)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 656)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 656)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 656)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 656)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 656)" className="Gabon" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 656)" className="Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 656)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 656)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 656)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 656)" className="Uganda" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 656)" className="Uganda" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 656)" className="Kenya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 656)" className="Somalia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 656)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 656)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 656)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 672)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 672)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 672)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 672)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 672)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 672)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 672)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 672)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 672)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 672)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 672)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 672)" className="Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 672)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 672)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 672)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 672)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 672)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 672)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 672)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 672)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 672)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 672)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(528 688)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 688)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 688)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 688)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 688)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 688)" className="Democratic Republic of Congo" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 688)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 688)" className="Tanzania" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 688)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 688)" className="Indonesia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 704)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 704)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 704)" className="Bolivia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 704)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 704)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 704)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 704)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 704)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 704)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 704)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 704)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 704)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 704)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 704)" className="Zambia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 704)" className="Zambia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 704)" className="Malawi" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 704)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 704)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 720)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 720)" className="Bolivia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 720)" className="Bolivia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 720)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 720)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 720)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 720)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 720)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 720)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 720)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 720)" className="Angola" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 720)" className="Zambia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 720)" className="Zambia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 720)" className="Zimbabwe" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 720)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 720)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 720)" className="Madagascar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 720)" className="Madagascar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 720)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 720)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 720)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 720)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 720)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 736)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 736)" className="Bolivia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 736)" className="Paraguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 736)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 736)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 736)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 736)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 736)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 736)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 736)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 736)" className="Botswana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 736)" className="Botswana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 736)" className="Zimbabwe" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 736)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 736)" className="Madagascar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 736)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 736)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 736)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 736)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 736)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 736)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 752)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 752)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 752)" className="Paraguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 752)" className="Paraguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 752)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 752)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 752)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 752)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 752)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 752)" className="Botswana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 752)" className="Botswana" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 752)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 752)" className="Mozambique" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 752)" className="Madagascar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 752)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 768)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 768)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 768)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 768)" className="Paraguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 768)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 768)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 768)" className="Namibia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 768)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 768)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 768)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 768)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 784)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 784)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 784)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 784)" className="Uruguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 784)" className="Brazil" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 784)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 784)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 784)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 784)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 784)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 800)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 800)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 800)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 800)" className="Uruguay" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 800)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 800)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 800)" className="South Africa" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 800)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 800)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 800)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 800)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 800)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 800)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 816)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 816)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 816)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 816)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 816)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 816)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 816)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 816)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392 816)" className="New Zealand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 832)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 832)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 832)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392 832)" className="New Zealand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 848)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 848)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 848)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 848)" className="Australia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376 848)" className="New Zealand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 864)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 864)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1360 864)" className="New Zealand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 880)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 880)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 896)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 912)" className="Chile" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 912)" className="Argentina" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 624)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 624)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 608)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 608)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 624)" className="Cameroon" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 608)" className="Chad" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 608)" className="Nigeria" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 608)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 608)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 592)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 592)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 592)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 576)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 576)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 576)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 608)" className="Sudan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 608)" className="Ethiopia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 592)" className="Eritrea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 576)" className="Saudi Arabia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 560)" className="Myanmar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 544)" className="Myanmar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 576)" className="Myanmar" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 576)" className="Thailand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 560)" className="Taiwan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 448)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 688)" className="Papua New Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 672)" className="Papua New Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 688)" className="Solomon Islands" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 688)" className="Peru" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 672)" className="Papua New Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 512)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 496)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 480)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 464)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 464)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 496)" className="Japan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 496)" className="South Korea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 576)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 560)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 560)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 560)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 544)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 544)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 560)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 544)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 544)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 544)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 448)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 528)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 512)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 560)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 496)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 480)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 464)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 448)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 448)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 544)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 448)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 448)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 448)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 448)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 432)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 432)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 432)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 432)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 416)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 416)" className="China" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 592)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 608)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 592)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 576)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 576)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 576)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 576)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 560)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 560)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 560)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 560)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 560)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 560)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 560)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 544)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 544)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 544)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 544)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 528)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 512)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 544)" className="India" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 608)" className="Cambodia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 592)" className="Thailand" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 576)" className="Vietnam" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 560)" className="Vietnam" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 560)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 544)" className="Nepal" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 528)" className="Nepal" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 528)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 560)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 560)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 544)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 544)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 544)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 544)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 528)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(752 528)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 528)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 528)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 560)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(768 560)" className="Libya" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 544)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(784 528)" className="Egypt" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(624 544)" className="Western Sahara" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 528)" className="Morocco" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 512)" className="Morocco" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 480)" className="North Korea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 464)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 544)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 528)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 528)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 528)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 528)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 528)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 512)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 496)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 496)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 480)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 480)" className="Spain" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 464)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 448)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 432)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 432)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 432)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 432)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 432)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 432)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 432)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 432)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 384)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 368)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(128 352)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(112 352)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(64 352)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 352)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(32 352)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(96 336)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(80 336)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(64 336)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 336)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(32 336)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(16 336)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(96 320)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(80 320)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(64 320)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 320)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(32 320)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(96 304)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(80 304)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(64 304)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 304)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(32 304)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(16 304)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(0 304)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(96 288)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(80 288)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(64 288)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 288)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(32 288)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(16 288)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(96 272)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(80 272)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(64 272)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 272)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(32 272)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(16 272)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(0 272)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(96 256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(80 256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(64 256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(32 256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(16 256)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 240)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 576)" className="Mexico" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(640 400)" className="Ireland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 384)" className="United Kingdom" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(48 576)" className="United States" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 224)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 64)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 48)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 32)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 16)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(512 0)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 464)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 448)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 432)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(112 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(112 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(112 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(112 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 448)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 448)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 448)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 448)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 432)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 432)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 432)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 432)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 432)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 432)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 416)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(448 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 400)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 384)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 416)" className="United Kingdom" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 368)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(656 368)" className="United Kingdom" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 352)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(112 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 352)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(128 336)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 336)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(128 320)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 320)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(128 304)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 304)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(128 288)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 288)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(144 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(128 272)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 272)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(160 256)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 240)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 240)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 224)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(176 208)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 192)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 192)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 192)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 176)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 176)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 176)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 176)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(240 176)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(224 176)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(208 176)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 160)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 160)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 160)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 160)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 160)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 160)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 160)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 144)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 144)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 144)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(192 144)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 128)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 128)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 128)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 128)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(272 128)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 112)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 112)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 112)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 112)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 112)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(256 112)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 96)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 96)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 96)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 96)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 96)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 96)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 96)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 80)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 80)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 80)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 80)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(288 80)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 64)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 64)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 64)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 64)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 64)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 64)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(304 64)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 48)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 48)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 48)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 48)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 48)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 48)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 32)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 32)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 32)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 32)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 32)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(336 32)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(320 32)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 16)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 16)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 16)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 16)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(352 16)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(384 0)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(368 0)" className="Canada" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 448)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 464)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 448)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(704 448)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 688)" className="Papua New Guinea" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 432)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 416)" className="Mongolia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 416)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 416)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(688 416)" className="France" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 400)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(672 400)" className="United Kingdom" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(736 384)" className="Sweden" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 368)" className="Denmark" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(720 352)" className="Norway" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 336)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 320)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(496 304)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 272)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 256)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 240)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 224)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 208)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 192)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(464 176)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 160)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 144)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(400 128)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(416 112)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 96)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(432 80)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 464)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 448)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 448)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 448)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 448)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 432)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 432)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 432)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 432)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 432)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 432)" className="Kazakhstan" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 416)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1312 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 400)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1312 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 384)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 368)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 352)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1360 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1312 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 336)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1360 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1312 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 320)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1408 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1360 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1312 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(848 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 304)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1440 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1424 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1408 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1360 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1312 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(480 288)" className="Greenland" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 288)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1408 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1360 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1344 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1312 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(976 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(864 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(832 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(816 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(800 272)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1392 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1376 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1328 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1312 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 256)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1408 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1296 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1232 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1216 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(992 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 240)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1280 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1200 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1168 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(960 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 224)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1184 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1152 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1024 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1008 208)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 192)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 192)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 192)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 192)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 192)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1040 192)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 192)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1264 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1248 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1136 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(928 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(912 176)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1120 160)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 160)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 160)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(944 160)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1104 144)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 128)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1088 112)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 112)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 96)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 96)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 80)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1056 80)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(880 80)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(1072 64)" className="Russia" />
            <rect width="15" height="15" rx="1.5" ry="1.5" transform="translate(896 464)" className="Kazakhstan" />
          </g>
        </svg>
      </div>
    );
  }
}

export default PicWolrdMap;
