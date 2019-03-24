import React, { Component } from 'react';
import './PicWorldMap.css';

export class PicWolrdMap extends Component {
  clicktest = e => {
    const pixel = e.target;
    pixel.setAttribute('fill', '#FFC700');
    console.log(e.target.getAttribute('aria-label'));
  };

  dclick = e => {
    const pixel = e.target;
    pixel.setAttribute('fill', '#ffffff');
  };

  render() {
    return (
      <div className="map">
        <svg
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="auto"
          viewBox="0 0 1920 1080"
          xmlSpace="preserve"
        >
          {/* <path d="M.5.5h1919v1080H.5z" fill="#0070C6" fillOpacity={1} /> */}
          <g
            transform="translate(320,400) scale(0.9)"
            onClick={this.clicktest}
            fill="#ffffff"
            fillOpacity={1}
            strokeOpacity={0.1} // default : value 1 , value :[0-1] | <percentage>
            stroke="#3399FF"
            cursor="pointer"
          >
            <path d="M532.1-309.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-309.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-309.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-309.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-293.034h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-293.034h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-293.034h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-293.034h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-293.034h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-293.034h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-277.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-277.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-277.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-277.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-277.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M612.094-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M628.09-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M436.096-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M612.094-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M612.094-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M756.1-229.022h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M772.095-229.022h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M452.092-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M756.1-213.026h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M772.095-213.026h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M788.09-213.026h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M436.096-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M740.089-197.03h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M756.1-197.03h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M420.086-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M436.096-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M740.089-181.035h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M756.1-181.035h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M772.095-181.035h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M452.092-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M740.089-165.024h15v-15h-15z" aria-label="Svalbard and Jan Mayen " />
            <path d="M436.096-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-85.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-85.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-85.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-85.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-85.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-85.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-69.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-69.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-69.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-69.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-69.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M788.09-69.035h15v-15h-15z" aria-label="Norway " />
            <path d="M500.094-53.025h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-53.025h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-53.025h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-53.025h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-53.025h15v-15h-15z" aria-label="Greenland " />
            <path d="M580.087-53.025h15v-15h-15z" aria-label="Greenland " />
            <path d="M772.095-53.025h15v-15h-15z" aria-label="Norway " />
            <path d="M788.09-53.025h15v-15h-15z" aria-label="Norway " />
            <path d="M804.086-53.025h15v-15h-15z" aria-label="Norway " />
            <path d="M500.094-37.029h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-37.029h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-37.029h15v-15h-15z" aria-label="Greenland " />
            <path d="M548.096-37.029h15v-15h-15z" aria-label="Greenland " />
            <path d="M564.092-37.029h15v-15h-15z" aria-label="Greenland " />
            <path d="M756.1-37.029h15v-15h-15z" aria-label="Sweden " />
            <path d="M772.095-37.029h15v-15h-15z" aria-label="Sweden " />
            <path d="M788.09-37.029h15v-15h-15z" aria-label="Finland " />
            <path d="M500.094-21.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-21.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M532.1-21.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M740.089-21.033h15v-15h-15z" aria-label="Norway " />
            <path d="M756.1-21.033h15v-15h-15z" aria-label="Sweden " />
            <path d="M772.095-21.033h15v-15h-15z" aria-label="Sweden " />
            <path d="M788.09-21.033h15v-15h-15z" aria-label="Finland " />
            <path d="M516.09-5.023h15v-15h-15z" aria-label="Greenland " />
            <path d="M596.098-5.023h15v-15h-15z" aria-label="Iceland " />
            <path d="M612.094-5.023h15v-15h-15z" aria-label="Iceland " />
            <path d="M740.089-5.023h15v-15h-15z" aria-label="Sweden " />
            <path d="M756.1-5.023h15v-15h-15z" aria-label="Sweden " />
            <path d="M788.09-5.023h15v-15h-15z" aria-label="Finland " />
            <path d="M724.093 10.973h15v-15h-15z" aria-label="Norway " />
            <path d="M740.089 10.973h15v-15h-15z" aria-label="Sweden " />
            <path d="M756.1 10.973h15v-15h-15z" aria-label="Sweden " />
            <path d="M772.095 10.973h15v-15h-15z" aria-label="Finland " />
            <path d="M788.09 10.973h15v-15h-15z" aria-label="Finland " />
            <path d="M708.097 26.969h15v-15h-15z" aria-label="Norway " />
            <path d="M724.093 26.969h15v-15h-15z" aria-label="Norway " />
            <path d="M740.089 26.969h15v-15h-15z" aria-label="Sweden " />
            <path d="M772.095 26.969h15v-15h-15z" aria-label="Finland " />
            <path d="M788.09 26.969h15v-15h-15z" aria-label="Finland " />
            <path d="M740.089 42.979h15v-15h-15z" aria-label="Sweden " />
            <path d="M756.1 42.979h15v-15h-15z" aria-label="Sweden " />
            <path d="M740.089 58.975h15v-15h-15z" aria-label="Sweden " />
            <path d="M788.09 58.975h15v-15h-15z" aria-label="Latvia " />
            <path d="M772.095 74.97h15v-15h-15z" aria-label="Lithuania " />
            <path d="M788.09 74.97h15v-15h-15z" aria-label="Lithuania " />
            <path d="M804.086 74.97h15v-15h-15z" aria-label="Belarus " />
            <path d="M708.097 90.966h15v-15h-15z" aria-label="Netherlands " />
            <path d="M724.093 90.966h15v-15h-15z" aria-label="Germany " />
            <path d="M740.089 90.966h15v-15h-15z" aria-label="Poland " />
            <path d="M756.1 90.966h15v-15h-15z" aria-label="Poland " />
            <path d="M772.095 90.966h15v-15h-15z" aria-label="Poland " />
            <path d="M788.09 90.966h15v-15h-15z" aria-label="Belarus " />
            <path d="M804.086 90.966h15v-15h-15z" aria-label="Belarus " />
            <path d="M964.088 90.966h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M980.098 90.966h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M996.094 90.966h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M708.097 106.977h15v-15h-15z" aria-label="Germany " />
            <path d="M724.093 106.977h15v-15h-15z" aria-label="Germany " />
            <path d="M740.089 106.977h15v-15h-15z" aria-label="Germany " />
            <path d="M756.1 106.977h15v-15h-15z" aria-label="Poland " />
            <path d="M772.095 106.977h15v-15h-15z" aria-label="Poland " />
            <path d="M788.09 106.977h15v-15h-15z" aria-label="Ukraine " />
            <path d="M804.086 106.977h15v-15h-15z" aria-label="Ukraine " />
            <path d="M820.097 106.977h15v-15h-15z" aria-label="Ukraine " />
            <path d="M900.09 106.977h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M916.086 106.977h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M964.088 106.977h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M980.098 106.977h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M996.094 106.977h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M1012.09 106.977h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M708.097 122.972h15v-15h-15z" aria-label="France " />
            <path d="M724.093 122.972h15v-15h-15z" aria-label="Germany " />
            <path d="M740.089 122.972h15v-15h-15z" aria-label="Austria " />
            <path d="M756.1 122.972h15v-15h-15z" aria-label="Slovakia " />
            <path d="M772.095 122.972h15v-15h-15z" aria-label="Ukraine " />
            <path d="M788.09 122.972h15v-15h-15z" aria-label="Ukraine " />
            <path d="M804.086 122.972h15v-15h-15z" aria-label="Ukraine " />
            <path d="M820.097 122.972h15v-15h-15z" aria-label="Ukraine " />
            <path d="M836.093 122.972h15v-15h-15z" aria-label="Ukraine " />
            <path d="M900.09 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M916.086 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M932.096 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M948.092 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M964.088 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M980.098 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M996.094 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M1012.09 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M1028.1 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M1044.096 122.972h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1060.092 122.972h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1076.087 122.972h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1092.098 122.972h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1108.093 122.972h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1124.09 122.972h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1140.1 122.972h15v-15h-15z" aria-label="Mongolia " />
            <path d="M724.093 138.968h15v-15h-15z" aria-label="Italy " />
            <path d="M740.089 138.968h15v-15h-15z" aria-label="Slovenia " />
            <path d="M756.1 138.968h15v-15h-15z" aria-label="Croatia " />
            <path d="M772.095 138.968h15v-15h-15z" aria-label="Romania " />
            <path d="M788.09 138.968h15v-15h-15z" aria-label="Romania " />
            <path d="M804.086 138.968h15v-15h-15z" aria-label="Ukraine " />
            <path d="M820.097 138.968h15v-15h-15z" aria-label="Ukraine " />
            <path d="M916.086 138.968h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M932.096 138.968h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M948.092 138.968h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M964.088 138.968h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M980.098 138.968h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M996.094 138.968h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M1012.09 138.968h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M1076.087 138.968h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1092.098 138.968h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1108.093 138.968h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1124.09 138.968h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1140.1 138.968h15v-15h-15z" aria-label="Mongolia " />
            <path d="M660.095 154.979h15v-15h-15z" aria-label="Spain " />
            <path d="M676.091 154.979h15v-15h-15z" aria-label="Spain " />
            <path d="M692.087 154.979h15v-15h-15z" aria-label="France " />
            <path d="M740.089 154.979h15v-15h-15z" aria-label="Italy " />
            <path d="M756.1 154.979h15v-15h-15z" aria-label="Croatia " />
            <path d="M772.095 154.979h15v-15h-15z" aria-label="Serbia " />
            <path d="M788.09 154.979h15v-15h-15z" aria-label="Bulgaria " />
            <path d="M852.088 154.979h15v-15h-15z" aria-label="Georgia " />
            <path d="M916.086 154.979h15v-15h-15z" aria-label="Uzbekistan " />
            <path d="M932.096 154.979h15v-15h-15z" aria-label="Uzbekistan " />
            <path d="M948.092 154.979h15v-15h-15z" aria-label="Uzbekistan " />
            <path d="M964.088 154.979h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M980.098 154.979h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M996.094 154.979h15v-15h-15z" aria-label="Kyrgyzstan " />
            <path d="M1092.098 154.979h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1108.093 154.979h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1124.09 154.979h15v-15h-15z" aria-label="Mongolia " />
            <path d="M676.091 170.974h15v-15h-15z" aria-label="Spain " />
            <path d="M756.1 170.974h15v-15h-15z" aria-label="Italy " />
            <path d="M772.095 170.974h15v-15h-15z" aria-label="Greece " />
            <path d="M804.086 170.974h15v-15h-15z" aria-label="Turkey " />
            <path d="M820.097 170.974h15v-15h-15z" aria-label="Turkey " />
            <path d="M836.093 170.974h15v-15h-15z" aria-label="Turkey " />
            <path d="M852.088 170.974h15v-15h-15z" aria-label="Turkey " />
            <path d="M868.099 170.974h15v-15h-15z" aria-label="Azerbaijan " />
            <path d="M884.094 170.974h15v-15h-15z" aria-label="Azerbaijan " />
            <path d="M900.09 170.974h15v-15h-15z" aria-label="Turkmenistan " />
            <path d="M916.086 170.974h15v-15h-15z" aria-label="Turkmenistan " />
            <path d="M932.096 170.974h15v-15h-15z" aria-label="Turkmenistan " />
            <path d="M948.092 170.974h15v-15h-15z" aria-label="Uzbekistan " />
            <path d="M964.088 170.974h15v-15h-15z" aria-label="Tajikistan " />
            <path d="M980.098 170.974h15v-15h-15z" aria-label="Kyrgyzstan " />
            <path d="M692.087 186.97h15v-15h-15z" aria-label="Algeria " />
            <path d="M708.097 186.97h15v-15h-15z" aria-label="Algeria " />
            <path d="M724.093 186.97h15v-15h-15z" aria-label="Tunisia " />
            <path d="M772.095 186.97h15v-15h-15z" aria-label="Greece " />
            <path d="M804.086 186.97h15v-15h-15z" aria-label="Turkey " />
            <path d="M820.097 186.97h15v-15h-15z" aria-label="Turkey " />
            <path d="M836.093 186.97h15v-15h-15z" aria-label="Turkey " />
            <path d="M852.088 186.97h15v-15h-15z" aria-label="Syria " />
            <path d="M868.099 186.97h15v-15h-15z" aria-label="Iran " />
            <path d="M884.094 186.97h15v-15h-15z" aria-label="Iran " />
            <path d="M900.09 186.97h15v-15h-15z" aria-label="Iran " />
            <path d="M916.086 186.97h15v-15h-15z" aria-label="Iran " />
            <path d="M932.096 186.97h15v-15h-15z" aria-label="Turkmenistan " />
            <path d="M948.092 186.97h15v-15h-15z" aria-label="Afghanistan " />
            <path d="M964.088 186.97h15v-15h-15z" aria-label="Afghanistan " />
            <path d="M980.098 186.97h15v-15h-15z" aria-label="Pakistan " />
            <path d="M676.091 202.966h15v-15h-15z" aria-label="Morocco " />
            <path d="M692.087 202.966h15v-15h-15z" aria-label="Algeria " />
            <path d="M708.097 202.966h15v-15h-15z" aria-label="Algeria " />
            <path d="M724.093 202.966h15v-15h-15z" aria-label="Tunisia " />
            <path d="M836.093 202.966h15v-15h-15z" aria-label="Syria " />
            <path d="M852.088 202.966h15v-15h-15z" aria-label="Iraq " />
            <path d="M868.099 202.966h15v-15h-15z" aria-label="Iran " />
            <path d="M884.094 202.966h15v-15h-15z" aria-label="Iran " />
            <path d="M900.09 202.966h15v-15h-15z" aria-label="Iran " />
            <path d="M916.086 202.966h15v-15h-15z" aria-label="Iran " />
            <path d="M932.096 202.966h15v-15h-15z" aria-label="Afghanistan " />
            <path d="M948.092 202.966h15v-15h-15z" aria-label="Afghanistan " />
            <path d="M964.088 202.966h15v-15h-15z" aria-label="Afghanistan " />
            <path d="M980.098 202.966h15v-15h-15z" aria-label="Pakistan " />
            <path d="M228.093 218.976h15v-15h-15z" aria-label="Mexico " />
            <path d="M244.089 218.976h15v-15h-15z" aria-label="Mexico " />
            <path d="M660.095 218.976h15v-15h-15z" aria-label="Morocco " />
            <path d="M676.091 218.976h15v-15h-15z" aria-label="Algeria " />
            <path d="M692.087 218.976h15v-15h-15z" aria-label="Algeria " />
            <path d="M708.097 218.976h15v-15h-15z" aria-label="Algeria " />
            <path d="M804.086 218.976h15v-15h-15z" aria-label="Egypt " />
            <path d="M820.097 218.976h15v-15h-15z" aria-label="Egypt " />
            <path d="M836.093 218.976h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M852.088 218.976h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M868.099 218.976h15v-15h-15z" aria-label="Iraq " />
            <path d="M884.094 218.976h15v-15h-15z" aria-label="Iran " />
            <path d="M900.09 218.976h15v-15h-15z" aria-label="Iran " />
            <path d="M916.086 218.976h15v-15h-15z" aria-label="Iran " />
            <path d="M932.096 218.976h15v-15h-15z" aria-label="Afghanistan " />
            <path d="M948.092 218.976h15v-15h-15z" aria-label="Afghanistan " />
            <path d="M964.088 218.976h15v-15h-15z" aria-label="Pakistan " />
            <path d="M980.098 218.976h15v-15h-15z" aria-label="Pakistan " />
            <path d="M244.089 234.972h15v-15h-15z" aria-label="Mexico " />
            <path d="M260.1 234.972h15v-15h-15z" aria-label="Mexico " />
            <path d="M276.095 234.972h15v-15h-15z" aria-label="Mexico " />
            <path d="M644.1 234.972h15v-15h-15z" aria-label="Western Sahara " />
            <path d="M660.095 234.972h15v-15h-15z" aria-label="Algeria " />
            <path d="M676.091 234.972h15v-15h-15z" aria-label="Algeria " />
            <path d="M692.087 234.972h15v-15h-15z" aria-label="Algeria " />
            <path d="M708.097 234.972h15v-15h-15z" aria-label="Algeria " />
            <path d="M804.086 234.972h15v-15h-15z" aria-label="Egypt " />
            <path d="M820.097 234.972h15v-15h-15z" aria-label="Egypt " />
            <path d="M836.093 234.972h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M852.088 234.972h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M868.099 234.972h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M884.094 234.972h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M900.09 234.972h15v-15h-15z" aria-label="Iran " />
            <path d="M916.086 234.972h15v-15h-15z" aria-label="Iran " />
            <path d="M932.096 234.972h15v-15h-15z" aria-label="Iran " />
            <path d="M948.092 234.972h15v-15h-15z" aria-label="Pakistan " />
            <path d="M964.088 234.972h15v-15h-15z" aria-label="Pakistan " />
            <path d="M356.088 250.968h15v-15h-15z" aria-label="Cuba " />
            <path d="M628.09 250.968h15v-15h-15z" aria-label="Western Sahara " />
            <path d="M644.1 250.968h15v-15h-15z" aria-label="Mauritania " />
            <path d="M660.095 250.968h15v-15h-15z" aria-label="Mali " />
            <path d="M676.091 250.968h15v-15h-15z" aria-label="Algeria " />
            <path d="M692.087 250.968h15v-15h-15z" aria-label="Algeria " />
            <path d="M708.097 250.968h15v-15h-15z" aria-label="Algeria " />
            <path d="M724.093 250.968h15v-15h-15z" aria-label="Algeria " />
            <path d="M804.086 250.968h15v-15h-15z" aria-label="Egypt " />
            <path d="M820.097 250.968h15v-15h-15z" aria-label="Egypt " />
            <path d="M852.088 250.968h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M868.099 250.968h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M884.094 250.968h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M900.09 250.968h15v-15h-15z" aria-label="United Arab Emirates " />
            <path d="M916.086 250.968h15v-15h-15z" aria-label="Oman " />
            <path d="M276.095 266.978h15v-15h-15z" aria-label="Mexico " />
            <path d="M324.097 266.978h15v-15h-15z" aria-label="Mexico " />
            <path d="M388.094 266.978h15v-15h-15z" aria-label="Haiti " />
            <path d="M628.09 266.978h15v-15h-15z" aria-label="Mauritania " />
            <path d="M644.1 266.978h15v-15h-15z" aria-label="Mauritania " />
            <path d="M660.095 266.978h15v-15h-15z" aria-label="Mali " />
            <path d="M676.091 266.978h15v-15h-15z" aria-label="Mali " />
            <path d="M692.087 266.978h15v-15h-15z" aria-label="Mali " />
            <path d="M708.097 266.978h15v-15h-15z" aria-label="Niger " />
            <path d="M724.093 266.978h15v-15h-15z" aria-label="Niger " />
            <path d="M740.089 266.978h15v-15h-15z" aria-label="Niger " />
            <path d="M756.1 266.978h15v-15h-15z" aria-label="Chad " />
            <path d="M772.095 266.978h15v-15h-15z" aria-label="Chad " />
            <path d="M868.099 266.978h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M884.094 266.978h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M900.09 266.978h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M916.086 266.978h15v-15h-15z" aria-label="Oman " />
            <path d="M308.087 282.974h15v-15h-15z" aria-label="Mexico " />
            <path d="M324.097 282.974h15v-15h-15z" aria-label="Honduras " />
            <path d="M340.093 282.974h15v-15h-15z" aria-label="Honduras " />
            <path d="M628.09 282.974h15v-15h-15z" aria-label="Senegal " />
            <path d="M644.1 282.974h15v-15h-15z" aria-label="Mauritania " />
            <path d="M660.095 282.974h15v-15h-15z" aria-label="Mauritania " />
            <path d="M676.091 282.974h15v-15h-15z" aria-label="Mali " />
            <path d="M692.087 282.974h15v-15h-15z" aria-label="Niger " />
            <path d="M708.097 282.974h15v-15h-15z" aria-label="Niger " />
            <path d="M724.093 282.974h15v-15h-15z" aria-label="Niger " />
            <path d="M740.089 282.974h15v-15h-15z" aria-label="Chad " />
            <path d="M756.1 282.974h15v-15h-15z" aria-label="Chad " />
            <path d="M772.095 282.974h15v-15h-15z" aria-label="Chad " />
            <path d="M868.099 282.974h15v-15h-15z" aria-label="Yemen " />
            <path d="M884.094 282.974h15v-15h-15z" aria-label="Yemen " />
            <path d="M1108.093 282.974h15v-15h-15z" aria-label="Thailand " />
            <path d="M1124.09 282.974h15v-15h-15z" aria-label="Vietnam " />
            <path d="M1172.091 282.974h15v-15h-15z" aria-label="Philippines " />
            <path d="M340.093 298.97h15v-15h-15z" aria-label="Nicaragua " />
            <path d="M388.094 298.97h15v-15h-15z" aria-label="Colombia " />
            <path d="M628.09 298.97h15v-15h-15z" aria-label="Guinea " />
            <path d="M644.1 298.97h15v-15h-15z" aria-label="Guinea " />
            <path d="M660.095 298.97h15v-15h-15z" aria-label="Mali " />
            <path d="M676.091 298.97h15v-15h-15z" aria-label="Burkina Faso " />
            <path d="M692.087 298.97h15v-15h-15z" aria-label="Benin " />
            <path d="M772.095 298.97h15v-15h-15z" aria-label="Chad " />
            <path d="M852.088 298.97h15v-15h-15z" aria-label="Ethiopia " />
            <path d="M884.094 298.97h15v-15h-15z" aria-label="Somalia " />
            <path d="M1124.09 298.97h15v-15h-15z" aria-label="Vietnam " />
            <path d="M356.088 314.965h15v-15h-15z" aria-label="Panama " />
            <path d="M372.099 314.965h15v-15h-15z" aria-label="Colombia " />
            <path d="M388.094 314.965h15v-15h-15z" aria-label="Venezuela " />
            <path d="M404.09 314.965h15v-15h-15z" aria-label="Venezuela " />
            <path d="M420.086 314.965h15v-15h-15z" aria-label="Venezuela " />
            <path d="M436.096 314.965h15v-15h-15z" aria-label="Venezuela " />
            <path d="M644.1 314.965h15v-15h-15z" aria-label="Liberia " />
            <path d="M660.095 314.965h15v-15h-15z" aria-label="Côte d'Ivoire " />
            <path d="M676.091 314.965h15v-15h-15z" aria-label="Ghana " />
            <path d="M692.087 314.965h15v-15h-15z" aria-label="Benin " />
            <path d="M756.1 314.965h15v-15h-15z" aria-label="Chad " />
            <path d="M772.095 314.965h15v-15h-15z" aria-label="Central African Republic " />
            <path d="M788.09 314.965h15v-15h-15z" aria-label="South Sudan " />
            <path d="M804.086 314.965h15v-15h-15z" aria-label="South Sudan " />
            <path d="M820.097 314.965h15v-15h-15z" aria-label="Ethiopia " />
            <path d="M836.093 314.965h15v-15h-15z" aria-label="Ethiopia " />
            <path d="M852.088 314.965h15v-15h-15z" aria-label="Ethiopia " />
            <path d="M868.099 314.965h15v-15h-15z" aria-label="Ethiopia " />
            <path d="M884.094 314.965h15v-15h-15z" aria-label="Somalia " />
            <path d="M1012.09 314.965h15v-15h-15z" aria-label="Sri Lanka " />
            <path d="M1188.087 314.965h15v-15h-15z" aria-label="Philippines " />
            <path d="M372.099 330.976h15v-15h-15z" aria-label="Colombia " />
            <path d="M388.094 330.976h15v-15h-15z" aria-label="Colombia " />
            <path d="M404.09 330.976h15v-15h-15z" aria-label="Colombia " />
            <path d="M420.086 330.976h15v-15h-15z" aria-label="Venezuela " />
            <path d="M436.096 330.976h15v-15h-15z" aria-label="Brazil " />
            <path d="M452.092 330.976h15v-15h-15z" aria-label="Suriname " />
            <path d="M468.088 330.976h15v-15h-15z" aria-label="French Guiana " />
            <path d="M724.093 330.976h15v-15h-15z" aria-label="Cameroon " />
            <path d="M740.089 330.976h15v-15h-15z" aria-label="Cameroon " />
            <path d="M756.1 330.976h15v-15h-15z" aria-label="Central African Republic " />
            <path d="M772.095 330.976h15v-15h-15z" aria-label="Central African Republic " />
            <path d="M788.09 330.976h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M804.086 330.976h15v-15h-15z" aria-label="South Sudan " />
            <path d="M820.097 330.976h15v-15h-15z" aria-label="Uganda " />
            <path d="M836.093 330.976h15v-15h-15z" aria-label="Ethiopia " />
            <path d="M852.088 330.976h15v-15h-15z" aria-label="Ethiopia " />
            <path d="M868.099 330.976h15v-15h-15z" aria-label="Somalia " />
            <path d="M1076.087 330.976h15v-15h-15z" aria-label="Indonesia " />
            <path d="M1092.098 330.976h15v-15h-15z" aria-label="Malaysia " />
            <path d="M1156.095 330.976h15v-15h-15z" aria-label="Indonesia " />
            <path d="M356.088 346.971h15v-15h-15z" aria-label="Ecuador " />
            <path d="M372.099 346.971h15v-15h-15z" aria-label="Ecuador " />
            <path d="M388.094 346.971h15v-15h-15z" aria-label="Colombia " />
            <path d="M404.09 346.971h15v-15h-15z" aria-label="Brazil " />
            <path d="M420.086 346.971h15v-15h-15z" aria-label="Brazil " />
            <path d="M436.096 346.971h15v-15h-15z" aria-label="Brazil " />
            <path d="M452.092 346.971h15v-15h-15z" aria-label="Brazil " />
            <path d="M468.088 346.971h15v-15h-15z" aria-label="Brazil " />
            <path d="M484.098 346.971h15v-15h-15z" aria-label="Brazil " />
            <path d="M724.093 346.971h15v-15h-15z" aria-label="Gabon " />
            <path d="M740.089 346.971h15v-15h-15z" aria-label="Republic of Congo " />
            <path d="M756.1 346.971h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M772.095 346.971h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M788.09 346.971h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M804.086 346.971h15v-15h-15z" aria-label="Uganda " />
            <path d="M820.097 346.971h15v-15h-15z" aria-label="Uganda " />
            <path d="M836.093 346.971h15v-15h-15z" aria-label="Kenya " />
            <path d="M852.088 346.971h15v-15h-15z" aria-label="Somalia " />
            <path d="M1092.098 346.971h15v-15h-15z" aria-label="Indonesia " />
            <path d="M1140.1 346.971h15v-15h-15z" aria-label="Indonesia " />
            <path d="M1156.095 346.971h15v-15h-15z" aria-label="Indonesia " />
            <path d="M356.088 362.967h15v-15h-15z" aria-label="Peru " />
            <path d="M372.099 362.967h15v-15h-15z" aria-label="Peru " />
            <path d="M388.094 362.967h15v-15h-15z" aria-label="Peru " />
            <path d="M404.09 362.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M420.086 362.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M436.096 362.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M452.092 362.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M468.088 362.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M484.098 362.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M500.094 362.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M516.09 362.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M740.089 362.967h15v-15h-15z" aria-label="Republic of Congo " />
            <path d="M756.1 362.967h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M772.095 362.967h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M788.09 362.967h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M804.086 362.967h15v-15h-15z" aria-label="Tanzania " />
            <path d="M820.097 362.967h15v-15h-15z" aria-label="Tanzania " />
            <path d="M836.093 362.967h15v-15h-15z" aria-label="Tanzania " />
            <path d="M1108.093 362.967h15v-15h-15z" aria-label="Indonesia " />
            <path d="M1172.091 362.967h15v-15h-15z" aria-label="Indonesia " />
            <path d="M1236.089 362.967h15v-15h-15z" aria-label="Indonesia " />
            <path d="M1252.099 362.967h15v-15h-15z" aria-label="Indonesia " />
            <path d="M388.094 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M404.09 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M420.086 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M436.096 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M452.092 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M468.088 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M484.098 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M500.094 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M516.09 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M532.1 378.978h15v-15h-15z" aria-label="Brazil " />
            <path d="M740.089 378.978h15v-15h-15z" aria-label="Angola " />
            <path d="M756.1 378.978h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M772.095 378.978h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M788.09 378.978h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M804.086 378.978h15v-15h-15z" aria-label="Democratic Republic of Congo " />
            <path d="M820.097 378.978h15v-15h-15z" aria-label="Tanzania " />
            <path d="M836.093 378.978h15v-15h-15z" aria-label="Tanzania " />
            <path d="M1140.1 378.978h15v-15h-15z" aria-label="Indonesia " />
            <path d="M1252.099 378.978h15v-15h-15z" aria-label="Indonesia " />
            <path d="M372.099 394.973h15v-15h-15z" aria-label="Peru " />
            <path d="M388.094 394.973h15v-15h-15z" aria-label="Peru " />
            <path d="M404.09 394.973h15v-15h-15z" aria-label="Bolivia " />
            <path d="M420.086 394.973h15v-15h-15z" aria-label="Brazil " />
            <path d="M436.096 394.973h15v-15h-15z" aria-label="Brazil " />
            <path d="M452.092 394.973h15v-15h-15z" aria-label="Brazil " />
            <path d="M468.088 394.973h15v-15h-15z" aria-label="Brazil " />
            <path d="M484.098 394.973h15v-15h-15z" aria-label="Brazil " />
            <path d="M500.094 394.973h15v-15h-15z" aria-label="Brazil " />
            <path d="M516.09 394.973h15v-15h-15z" aria-label="Brazil " />
            <path d="M740.089 394.973h15v-15h-15z" aria-label="Angola " />
            <path d="M756.1 394.973h15v-15h-15z" aria-label="Angola " />
            <path d="M772.095 394.973h15v-15h-15z" aria-label="Angola " />
            <path d="M788.09 394.973h15v-15h-15z" aria-label="Zambia " />
            <path d="M804.086 394.973h15v-15h-15z" aria-label="Zambia " />
            <path d="M820.097 394.973h15v-15h-15z" aria-label="Malawi " />
            <path d="M836.093 394.973h15v-15h-15z" aria-label="Mozambique " />
            <path d="M1236.089 394.973h15v-15h-15z" aria-label="Australia " />
            <path d="M388.094 410.97h15v-15h-15z" aria-label="Peru " />
            <path d="M404.09 410.97h15v-15h-15z" aria-label="Bolivia " />
            <path d="M420.086 410.97h15v-15h-15z" aria-label="Bolivia " />
            <path d="M436.096 410.97h15v-15h-15z" aria-label="Brazil " />
            <path d="M452.092 410.97h15v-15h-15z" aria-label="Brazil " />
            <path d="M468.088 410.97h15v-15h-15z" aria-label="Brazil " />
            <path d="M484.098 410.97h15v-15h-15z" aria-label="Brazil " />
            <path d="M500.094 410.97h15v-15h-15z" aria-label="Brazil " />
            <path d="M516.09 410.97h15v-15h-15z" aria-label="Brazil " />
            <path d="M740.089 410.97h15v-15h-15z" aria-label="Angola " />
            <path d="M756.1 410.97h15v-15h-15z" aria-label="Angola " />
            <path d="M772.095 410.97h15v-15h-15z" aria-label="Zambia " />
            <path d="M788.09 410.97h15v-15h-15z" aria-label="Zambia " />
            <path d="M804.086 410.97h15v-15h-15z" aria-label="Zimbabwe " />
            <path d="M820.097 410.97h15v-15h-15z" aria-label="Mozambique " />
            <path d="M836.093 410.97h15v-15h-15z" aria-label="Mozambique " />
            <path d="M868.099 410.97h15v-15h-15z" aria-label="Madagascar " />
            <path d="M884.094 410.97h15v-15h-15z" aria-label="Madagascar " />
            <path d="M1188.087 410.97h15v-15h-15z" aria-label="Australia " />
            <path d="M1204.097 410.97h15v-15h-15z" aria-label="Australia " />
            <path d="M1220.093 410.97h15v-15h-15z" aria-label="Australia " />
            <path d="M1236.089 410.97h15v-15h-15z" aria-label="Australia " />
            <path d="M1268.095 410.97h15v-15h-15z" aria-label="Australia " />
            <path d="M404.09 426.965h15v-15h-15z" aria-label="Chile " />
            <path d="M420.086 426.965h15v-15h-15z" aria-label="Bolivia " />
            <path d="M436.096 426.965h15v-15h-15z" aria-label="Paraguay " />
            <path d="M452.092 426.965h15v-15h-15z" aria-label="Brazil " />
            <path d="M468.088 426.965h15v-15h-15z" aria-label="Brazil " />
            <path d="M484.098 426.965h15v-15h-15z" aria-label="Brazil " />
            <path d="M500.094 426.965h15v-15h-15z" aria-label="Brazil " />
            <path d="M516.09 426.965h15v-15h-15z" aria-label="Brazil " />
            <path d="M740.089 426.965h15v-15h-15z" aria-label="Namibia " />
            <path d="M756.1 426.965h15v-15h-15z" aria-label="Namibia " />
            <path d="M772.095 426.965h15v-15h-15z" aria-label="Botswana " />
            <path d="M788.09 426.965h15v-15h-15z" aria-label="Botswana " />
            <path d="M804.086 426.965h15v-15h-15z" aria-label="Zimbabwe " />
            <path d="M820.097 426.965h15v-15h-15z" aria-label="Mozambique " />
            <path d="M868.099 426.965h15v-15h-15z" aria-label="Madagascar " />
            <path d="M1188.087 426.965h15v-15h-15z" aria-label="Australia " />
            <path d="M1204.097 426.965h15v-15h-15z" aria-label="Australia " />
            <path d="M1220.093 426.965h15v-15h-15z" aria-label="Australia " />
            <path d="M1236.089 426.965h15v-15h-15z" aria-label="Australia " />
            <path d="M1252.099 426.965h15v-15h-15z" aria-label="Australia " />
            <path d="M1268.095 426.965h15v-15h-15z" aria-label="Australia " />
            <path d="M404.09 442.975h15v-15h-15z" aria-label="Chile " />
            <path d="M420.086 442.975h15v-15h-15z" aria-label="Argentina " />
            <path d="M436.096 442.975h15v-15h-15z" aria-label="Paraguay " />
            <path d="M452.092 442.975h15v-15h-15z" aria-label="Paraguay " />
            <path d="M468.088 442.975h15v-15h-15z" aria-label="Brazil " />
            <path d="M484.098 442.975h15v-15h-15z" aria-label="Brazil " />
            <path d="M500.094 442.975h15v-15h-15z" aria-label="Brazil " />
            <path d="M740.089 442.975h15v-15h-15z" aria-label="Namibia " />
            <path d="M756.1 442.975h15v-15h-15z" aria-label="Namibia " />
            <path d="M772.095 442.975h15v-15h-15z" aria-label="Botswana " />
            <path d="M788.09 442.975h15v-15h-15z" aria-label="Botswana " />
            <path d="M804.086 442.975h15v-15h-15z" aria-label="South Africa " />
            <path d="M820.097 442.975h15v-15h-15z" aria-label="Mozambique " />
            <path d="M868.099 442.975h15v-15h-15z" aria-label="Madagascar " />
            <path d="M1156.095 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M1172.091 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M1188.087 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M1204.097 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M1220.093 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M1236.089 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M1252.099 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M1268.095 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M1284.09 442.975h15v-15h-15z" aria-label="Australia " />
            <path d="M404.09 458.971h15v-15h-15z" aria-label="Chile " />
            <path d="M420.086 458.971h15v-15h-15z" aria-label="Argentina " />
            <path d="M436.096 458.971h15v-15h-15z" aria-label="Argentina " />
            <path d="M452.092 458.971h15v-15h-15z" aria-label="Paraguay " />
            <path d="M468.088 458.971h15v-15h-15z" aria-label="Brazil " />
            <path d="M484.098 458.971h15v-15h-15z" aria-label="Brazil " />
            <path d="M756.1 458.971h15v-15h-15z" aria-label="Namibia " />
            <path d="M772.095 458.971h15v-15h-15z" aria-label="South Africa " />
            <path d="M788.09 458.971h15v-15h-15z" aria-label="South Africa " />
            <path d="M804.086 458.971h15v-15h-15z" aria-label="South Africa " />
            <path d="M1156.095 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1172.091 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1188.087 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1204.097 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1220.093 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1236.089 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1252.099 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1268.095 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1284.09 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M1300.086 458.971h15v-15h-15z" aria-label="Australia " />
            <path d="M404.09 474.967h15v-15h-15z" aria-label="Argentina " />
            <path d="M420.086 474.967h15v-15h-15z" aria-label="Argentina " />
            <path d="M436.096 474.967h15v-15h-15z" aria-label="Argentina " />
            <path d="M452.092 474.967h15v-15h-15z" aria-label="Uruguay " />
            <path d="M468.088 474.967h15v-15h-15z" aria-label="Brazil " />
            <path d="M756.1 474.967h15v-15h-15z" aria-label="South Africa " />
            <path d="M772.095 474.967h15v-15h-15z" aria-label="South Africa " />
            <path d="M788.09 474.967h15v-15h-15z" aria-label="South Africa " />
            <path d="M804.086 474.967h15v-15h-15z" aria-label="South Africa " />
            <path d="M1156.095 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1172.091 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1188.087 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1204.097 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1220.093 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1236.089 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1252.099 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1268.095 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1284.09 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M1300.086 474.967h15v-15h-15z" aria-label="Australia " />
            <path d="M404.09 490.977h15v-15h-15z" aria-label="Argentina " />
            <path d="M420.086 490.977h15v-15h-15z" aria-label="Argentina " />
            <path d="M436.096 490.977h15v-15h-15z" aria-label="Argentina " />
            <path d="M452.092 490.977h15v-15h-15z" aria-label="Uruguay " />
            <path d="M756.1 490.977h15v-15h-15z" aria-label="South Africa " />
            <path d="M772.095 490.977h15v-15h-15z" aria-label="South Africa " />
            <path d="M788.09 490.977h15v-15h-15z" aria-label="South Africa " />
            <path d="M1156.095 490.977h15v-15h-15z" aria-label="Australia " />
            <path d="M1172.091 490.977h15v-15h-15z" aria-label="Australia " />
            <path d="M1236.089 490.977h15v-15h-15z" aria-label="Australia " />
            <path d="M1252.099 490.977h15v-15h-15z" aria-label="Australia " />
            <path d="M1268.095 490.977h15v-15h-15z" aria-label="Australia " />
            <path d="M1284.09 490.977h15v-15h-15z" aria-label="Australia " />
            <path d="M388.094 506.973h15v-15h-15z" aria-label="Chile " />
            <path d="M404.09 506.973h15v-15h-15z" aria-label="Argentina " />
            <path d="M420.086 506.973h15v-15h-15z" aria-label="Argentina " />
            <path d="M436.096 506.973h15v-15h-15z" aria-label="Argentina " />
            <path d="M452.092 506.973h15v-15h-15z" aria-label="Argentina " />
            <path d="M1252.099 506.973h15v-15h-15z" aria-label="Australia " />
            <path d="M1268.095 506.973h15v-15h-15z" aria-label="Australia " />
            <path d="M1284.09 506.973h15v-15h-15z" aria-label="Australia " />
            <path d="M1396.09 506.973h15v-15h-15z" aria-label="New Zealand " />
            <path d="M388.094 522.969h15v-15h-15z" aria-label="Chile " />
            <path d="M404.09 522.969h15v-15h-15z" aria-label="Argentina " />
            <path d="M420.086 522.969h15v-15h-15z" aria-label="Argentina " />
            <path d="M1396.09 522.969h15v-15h-15z" aria-label="New Zealand " />
            <path d="M388.094 538.979h15v-15h-15z" aria-label="Chile " />
            <path d="M404.09 538.979h15v-15h-15z" aria-label="Argentina " />
            <path d="M420.086 538.979h15v-15h-15z" aria-label="Argentina " />
            <path d="M1284.09 538.979h15v-15h-15z" aria-label="Australia " />
            <path d="M1380.094 538.979h15v-15h-15z" aria-label="New Zealand " />
            <path d="M388.094 554.975h15v-15h-15z" aria-label="Chile " />
            <path d="M404.09 554.975h15v-15h-15z" aria-label="Argentina " />
            <path d="M1364.099 554.975h15v-15h-15z" aria-label="New Zealand " />
            <path d="M388.094 570.97h15v-15h-15z" aria-label="Chile " />
            <path d="M404.09 570.97h15v-15h-15z" aria-label="Argentina " />
            <path d="M388.094 586.966h15v-15h-15z" aria-label="Chile " />
            <path d="M388.094 602.977h15v-15h-15z" aria-label="Chile " />
            <path d="M404.09 602.977h15v-15h-15z" aria-label="Argentina " />
            <path d="M724.093 314.965h15v-15h-15z" aria-label="Nigeria " />
            <path d="M708.097 314.965h15v-15h-15z" aria-label="Nigeria " />
            <path d="M724.093 298.97h15v-15h-15z" aria-label="Nigeria " />
            <path d="M708.097 298.97h15v-15h-15z" aria-label="Nigeria " />
            <path d="M740.089 314.965h15v-15h-15z" aria-label="Cameroon " />
            <path d="M756.1 298.97h15v-15h-15z" aria-label="Chad " />
            <path d="M740.089 298.97h15v-15h-15z" aria-label="Nigeria " />
            <path d="M820.097 298.97h15v-15h-15z" aria-label="Sudan " />
            <path d="M804.086 298.97h15v-15h-15z" aria-label="Sudan " />
            <path d="M820.097 282.974h15v-15h-15z" aria-label="Sudan " />
            <path d="M804.086 282.974h15v-15h-15z" aria-label="Sudan " />
            <path d="M788.09 282.974h15v-15h-15z" aria-label="Sudan " />
            <path d="M820.097 266.978h15v-15h-15z" aria-label="Sudan " />
            <path d="M804.086 266.978h15v-15h-15z" aria-label="Sudan " />
            <path d="M788.09 266.978h15v-15h-15z" aria-label="Sudan " />
            <path d="M788.09 298.97h15v-15h-15z" aria-label="Sudan " />
            <path d="M836.093 298.97h15v-15h-15z" aria-label="Ethiopia " />
            <path d="M836.093 282.974h15v-15h-15z" aria-label="Eritrea " />
            <path d="M852.088 266.978h15v-15h-15z" aria-label="Saudi Arabia " />
            <path d="M1076.087 250.968h15v-15h-15z" aria-label="Myanmar " />
            <path d="M1076.087 234.972h15v-15h-15z" aria-label="Myanmar " />
            <path d="M1076.087 266.978h15v-15h-15z" aria-label="Myanmar " />
            <path d="M1092.098 266.978h15v-15h-15z" aria-label="Thailand " />
            <path d="M1172.091 250.968h15v-15h-15z" aria-label="Taiwan " />
            <path d="M1060.092 138.968h15v-15h-15z" aria-label="Mongolia " />
            <path d="M1268.095 378.978h15v-15h-15z" aria-label="Papua New Guinea " />
            <path d="M1268.095 362.967h15v-15h-15z" aria-label="Papua New Guinea " />
            <path d="M1332.092 378.978h15v-15h-15z" aria-label="Solomon Islands " />
            <path d="M372.099 378.978h15v-15h-15z" aria-label="Peru " />
            <path d="M1300.086 362.967h15v-15h-15z" aria-label="Papua New Guinea " />
            <path d="M1220.093 202.966h15v-15h-15z" aria-label="Japan " />
            <path d="M1252.099 186.97h15v-15h-15z" aria-label="Japan " />
            <path d="M1252.099 170.974h15v-15h-15z" aria-label="Japan " />
            <path d="M1268.095 154.979h15v-15h-15z" aria-label="Japan " />
            <path d="M1252.099 154.979h15v-15h-15z" aria-label="Japan " />
            <path d="M1236.089 186.97h15v-15h-15z" aria-label="Japan " />
            <path d="M1204.097 186.97h15v-15h-15z" aria-label="South Korea " />
            <path d="M1124.09 266.978h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 250.968h15v-15h-15z" aria-label="China " />
            <path d="M1140.1 250.968h15v-15h-15z" aria-label="China " />
            <path d="M1092.098 250.968h15v-15h-15z" aria-label="China " />
            <path d="M1140.1 234.972h15v-15h-15z" aria-label="China " />
            <path d="M1108.093 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1076.087 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1140.1 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1124.09 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 234.972h15v-15h-15z" aria-label="China " />
            <path d="M1124.09 250.968h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1092.098 234.972h15v-15h-15z" aria-label="China " />
            <path d="M1140.1 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1124.09 234.972h15v-15h-15z" aria-label="China " />
            <path d="M1108.093 234.972h15v-15h-15z" aria-label="China " />
            <path d="M1172.091 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1124.09 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1092.098 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1204.097 138.968h15v-15h-15z" aria-label="China " />
            <path d="M1060.092 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1044.096 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1028.1 218.976h15v-15h-15z" aria-label="China " />
            <path d="M1172.091 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1124.09 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1108.093 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1092.098 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1076.087 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1060.092 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1044.096 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1028.1 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1012.09 202.966h15v-15h-15z" aria-label="China " />
            <path d="M1172.091 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1140.1 186.97h15v-15h-15z" aria-label="China " />
            <path d="M260.1 250.968h15v-15h-15z" aria-label="Mexico " />
            <path d="M1108.093 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1092.098 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1076.087 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1060.092 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1044.096 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1028.1 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1012.09 186.97h15v-15h-15z" aria-label="China " />
            <path d="M996.094 186.97h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1140.1 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1124.09 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1108.093 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1092.098 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1076.087 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1060.092 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1044.096 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1028.1 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1012.09 170.974h15v-15h-15z" aria-label="China " />
            <path d="M996.094 170.974h15v-15h-15z" aria-label="China " />
            <path d="M1204.097 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1188.087 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1172.091 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1140.1 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1060.092 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1044.096 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1028.1 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1012.09 154.979h15v-15h-15z" aria-label="China " />
            <path d="M1220.093 138.968h15v-15h-15z" aria-label="China " />
            <path d="M1188.087 138.968h15v-15h-15z" aria-label="China " />
            <path d="M228.093 234.972h15v-15h-15z" aria-label="Mexico " />
            <path d="M1172.091 138.968h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 138.968h15v-15h-15z" aria-label="China " />
            <path d="M1044.096 138.968h15v-15h-15z" aria-label="China " />
            <path d="M1028.1 138.968h15v-15h-15z" aria-label="China " />
            <path d="M1204.097 122.972h15v-15h-15z" aria-label="China " />
            <path d="M1188.087 122.972h15v-15h-15z" aria-label="China " />
            <path d="M1172.091 122.972h15v-15h-15z" aria-label="China " />
            <path d="M1156.095 122.972h15v-15h-15z" aria-label="China " />
            <path d="M1188.087 106.977h15v-15h-15z" aria-label="China " />
            <path d="M1172.091 106.977h15v-15h-15z" aria-label="China " />
            <path d="M292.09 282.974h15v-15h-15z" aria-label="Mexico " />
            <path d="M996.094 298.97h15v-15h-15z" aria-label="India " />
            <path d="M996.094 282.974h15v-15h-15z" aria-label="India " />
            <path d="M1028.1 266.978h15v-15h-15z" aria-label="India " />
            <path d="M1012.09 266.978h15v-15h-15z" aria-label="India " />
            <path d="M996.094 266.978h15v-15h-15z" aria-label="India " />
            <path d="M980.098 266.978h15v-15h-15z" aria-label="India " />
            <path d="M1060.092 250.968h15v-15h-15z" aria-label="India " />
            <path d="M1044.096 250.968h15v-15h-15z" aria-label="India " />
            <path d="M1028.1 250.968h15v-15h-15z" aria-label="India " />
            <path d="M1012.09 250.968h15v-15h-15z" aria-label="India " />
            <path d="M996.094 250.968h15v-15h-15z" aria-label="India " />
            <path d="M980.098 250.968h15v-15h-15z" aria-label="India " />
            <path d="M964.088 250.968h15v-15h-15z" aria-label="India " />
            <path d="M1060.092 234.972h15v-15h-15z" aria-label="India " />
            <path d="M1044.096 234.972h15v-15h-15z" aria-label="India " />
            <path d="M1012.09 234.972h15v-15h-15z" aria-label="India " />
            <path d="M996.094 234.972h15v-15h-15z" aria-label="India " />
            <path d="M996.094 218.976h15v-15h-15z" aria-label="India " />
            <path d="M996.094 202.966h15v-15h-15z" aria-label="India " />
            <path d="M980.098 234.972h15v-15h-15z" aria-label="India " />
            <path d="M1108.093 298.97h15v-15h-15z" aria-label="Cambodia " />
            <path d="M1092.098 282.974h15v-15h-15z" aria-label="Thailand " />
            <path d="M1108.093 266.978h15v-15h-15z" aria-label="Vietnam " />
            <path d="M1108.093 250.968h15v-15h-15z" aria-label="Vietnam " />
            <path d="M276.095 250.968h15v-15h-15z" aria-label="Mexico " />
            <path d="M1028.1 234.972h15v-15h-15z" aria-label="Nepal " />
            <path d="M1012.09 218.976h15v-15h-15z" aria-label="Nepal " />
            <path d="M212.097 218.976h15v-15h-15z" aria-label="Mexico " />
            <path d="M756.1 250.968h15v-15h-15z" aria-label="Libya " />
            <path d="M740.089 250.968h15v-15h-15z" aria-label="Libya " />
            <path d="M772.095 234.972h15v-15h-15z" aria-label="Libya " />
            <path d="M756.1 234.972h15v-15h-15z" aria-label="Libya " />
            <path d="M740.089 234.972h15v-15h-15z" aria-label="Libya " />
            <path d="M724.093 234.972h15v-15h-15z" aria-label="Libya " />
            <path d="M772.095 218.976h15v-15h-15z" aria-label="Libya " />
            <path d="M756.1 218.976h15v-15h-15z" aria-label="Libya " />
            <path d="M740.089 218.976h15v-15h-15z" aria-label="Libya " />
            <path d="M724.093 218.976h15v-15h-15z" aria-label="Libya " />
            <path d="M788.09 250.968h15v-15h-15z" aria-label="Egypt " />
            <path d="M772.095 250.968h15v-15h-15z" aria-label="Libya " />
            <path d="M788.09 234.972h15v-15h-15z" aria-label="Egypt " />
            <path d="M788.09 218.976h15v-15h-15z" aria-label="Egypt " />
            <path d="M628.09 234.972h15v-15h-15z" aria-label="Western Sahara " />
            <path d="M644.1 218.976h15v-15h-15z" aria-label="Morocco " />
            <path d="M660.095 202.966h15v-15h-15z" aria-label="Morocco " />
            <path d="M1188.087 170.974h15v-15h-15z" aria-label="North Korea " />
            <path d="M644.1 154.979h15v-15h-15z" aria-label="Spain " />
            <path d="M228.093 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M196.087 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M180.091 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M356.088 234.972h15v-15h-15z" aria-label="United States " />
            <path d="M340.093 218.976h15v-15h-15z" aria-label="United States " />
            <path d="M308.087 218.976h15v-15h-15z" aria-label="United States " />
            <path d="M292.09 218.976h15v-15h-15z" aria-label="United States " />
            <path d="M276.095 218.976h15v-15h-15z" aria-label="United States " />
            <path d="M260.1 218.976h15v-15h-15z" aria-label="United States " />
            <path d="M356.088 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M340.093 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M324.097 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M308.087 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M292.09 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M276.095 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M260.1 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M244.089 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M228.093 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M212.097 202.966h15v-15h-15z" aria-label="United States " />
            <path d="M372.099 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M356.088 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M340.093 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M324.097 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M308.087 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M292.09 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M276.095 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M260.1 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M244.089 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M212.097 186.97h15v-15h-15z" aria-label="United States " />
            <path d="M180.091 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M372.099 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M660.095 186.97h15v-15h-15z" aria-label="Spain " />
            <path d="M356.088 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M340.093 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M324.097 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M308.087 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M292.09 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M276.095 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M260.1 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M244.089 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M228.093 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M212.097 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M196.087 170.974h15v-15h-15z" aria-label="United States " />
            <path d="M388.094 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M660.095 170.974h15v-15h-15z" aria-label="Spain " />
            <path d="M372.099 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M340.093 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M324.097 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M308.087 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M292.09 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M276.095 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M260.1 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M244.089 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M228.093 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M212.097 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M196.087 154.979h15v-15h-15z" aria-label="United States " />
            <path d="M404.09 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M340.093 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M324.097 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M308.087 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M292.09 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M276.095 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M260.1 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M244.089 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M228.093 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M212.097 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M196.087 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M180.091 138.968h15v-15h-15z" aria-label="United States " />
            <path d="M308.087 122.972h15v-15h-15z" aria-label="United States " />
            <path d="M292.09 122.972h15v-15h-15z" aria-label="United States " />
            <path d="M276.095 122.972h15v-15h-15z" aria-label="United States " />
            <path d="M260.1 122.972h15v-15h-15z" aria-label="United States " />
            <path d="M244.089 122.972h15v-15h-15z" aria-label="United States " />
            <path d="M228.093 122.972h15v-15h-15z" aria-label="United States " />
            <path d="M212.097 122.972h15v-15h-15z" aria-label="United States " />
            <path d="M196.087 122.972h15v-15h-15z" aria-label="United States " />
            <path d="M148.1 74.97h15v-15h-15z" aria-label="United States " />
            <path d="M52.096 58.975h15v-15h-15z" aria-label="United States " />
            <path d="M132.09 42.979h15v-15h-15z" aria-label="United States " />
            <path d="M116.094 42.979h15v-15h-15z" aria-label="United States " />
            <path d="M68.092 42.979h15v-15h-15z" aria-label="United States " />
            <path d="M52.096 42.979h15v-15h-15z" aria-label="United States " />
            <path d="M36.1 42.979h15v-15h-15z" aria-label="United States " />
            <path d="M100.098 26.969h15v-15h-15z" aria-label="United States " />
            <path d="M84.088 26.969h15v-15h-15z" aria-label="United States " />
            <path d="M68.092 26.969h15v-15h-15z" aria-label="United States " />
            <path d="M52.096 26.969h15v-15h-15z" aria-label="United States " />
            <path d="M36.1 26.969h15v-15h-15z" aria-label="United States " />
            <path d="M20.09 26.969h15v-15h-15z" aria-label="United States " />
            <path d="M100.098 10.973h15v-15h-15z" aria-label="United States " />
            <path d="M84.088 10.973h15v-15h-15z" aria-label="United States " />
            <path d="M68.092 10.973h15v-15h-15z" aria-label="United States " />
            <path d="M52.096 10.973h15v-15h-15z" aria-label="United States " />
            <path d="M36.1 10.973h15v-15h-15z" aria-label="United States " />
            <path d="M100.098-5.023h15v-15h-15z" aria-label="United States " />
            <path d="M84.088-5.023h15v-15h-15z" aria-label="United States " />
            <path d="M68.092-5.023h15v-15h-15z" aria-label="United States " />
            <path d="M52.096-5.023h15v-15h-15z" aria-label="United States " />
            <path d="M36.1-5.023h15v-15h-15z" aria-label="United States " />
            <path d="M20.09-5.023h15v-15h-15z" aria-label="United States " />
            <path d="M4.094-5.023h15v-15h-15z" aria-label="United States " />
            <path d="M100.098-21.033h15v-15h-15z" aria-label="United States " />
            <path d="M84.088-21.033h15v-15h-15z" aria-label="United States " />
            <path d="M68.092-21.033h15v-15h-15z" aria-label="United States " />
            <path d="M52.096-21.033h15v-15h-15z" aria-label="United States " />
            <path d="M36.1-21.033h15v-15h-15z" aria-label="United States " />
            <path d="M20.09-21.033h15v-15h-15z" aria-label="United States " />
            <path d="M100.098-37.029h15v-15h-15z" aria-label="United States " />
            <path d="M84.088-37.029h15v-15h-15z" aria-label="United States " />
            <path d="M68.092-37.029h15v-15h-15z" aria-label="United States " />
            <path d="M52.096-37.029h15v-15h-15z" aria-label="United States " />
            <path d="M36.1-37.029h15v-15h-15z" aria-label="United States " />
            <path d="M20.09-37.029h15v-15h-15z" aria-label="United States " />
            <path d="M4.094-37.029h15v-15h-15z" aria-label="United States " />
            <path d="M100.098-53.025h15v-15h-15z" aria-label="United States " />
            <path d="M84.088-53.025h15v-15h-15z" aria-label="United States " />
            <path d="M68.092-53.025h15v-15h-15z" aria-label="United States " />
            <path d="M52.096-53.025h15v-15h-15z" aria-label="United States " />
            <path d="M36.1-53.025h15v-15h-15z" aria-label="United States " />
            <path d="M20.09-53.025h15v-15h-15z" aria-label="United States " />
            <path d="M52.096-69.035h15v-15h-15z" aria-label="United States " />
            <path d="M260.1 266.978h15v-15h-15z" aria-label="Mexico " />
            <path d="M644.1 90.966h15v-15h-15z" aria-label="Ireland " />
            <path d="M660.095 74.97h15v-15h-15z" aria-label="United Kingdom " />
            <path d="M52.096 266.978h15v-15h-15z" aria-label="United States " />
            <path d="M468.088-85.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M404.09-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M420.086-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M388.094-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M404.09-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M420.086-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M420.086-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M420.086-245.032h15v-15h-15z" aria-label="Greenland " />
            <path d="M436.096-261.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M452.092-277.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-293.034h15v-15h-15z" aria-label="Greenland " />
            <path d="M516.09-309.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M356.088 154.979h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086 138.968h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093 122.972h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M148.1 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M148.1 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M116.094 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M116.094-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M116.094-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M116.094-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M148.1-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M436.096 138.968h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094 138.968h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088 138.968h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099 138.968h15v-15h-15z" aria-label="Canada " />
            <path d="M452.092 122.972h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09 122.972h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094 122.972h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099 122.972h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088 122.972h15v-15h-15z" aria-label="Canada " />
            <path d="M452.092 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M676.091 122.972h15v-15h-15z" aria-label="France " />
            <path d="M436.096 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095 106.977h15v-15h-15z" aria-label="Canada " />
            <path d="M452.092 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M436.096 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095 90.966h15v-15h-15z" aria-label="Canada " />
            <path d="M436.096 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091 74.97h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M676.091 106.977h15v-15h-15z" aria-label="United Kingdom " />
            <path d="M404.09 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095 58.975h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M660.095 58.975h15v-15h-15z" aria-label="United Kingdom " />
            <path d="M388.094 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095 42.979h15v-15h-15z" aria-label="Canada " />
            <path d="M116.094 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M708.097 42.979h15v-15h-15z" aria-label="Norway " />
            <path d="M372.099 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M148.1 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M132.09 26.969h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M484.098 26.969h15v-15h-15z" aria-label="Greenland " />
            <path d="M340.093 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M148.1 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M132.09 10.973h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M484.098 10.973h15v-15h-15z" aria-label="Greenland " />
            <path d="M404.09-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M148.1-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M132.09-5.023h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M484.098-5.023h15v-15h-15z" aria-label="Greenland " />
            <path d="M404.09-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M148.1-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M132.09-21.033h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M468.088-21.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M388.094-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M148.1-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M132.09-37.029h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M468.088-37.029h15v-15h-15z" aria-label="Greenland " />
            <path d="M388.094-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M164.095-53.025h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M468.088-53.025h15v-15h-15z" aria-label="Greenland " />
            <path d="M372.099-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097-69.035h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M468.088-69.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M324.097-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091-85.03h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M180.091-101.027h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-117.022h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-117.022h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093-117.022h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-133.033h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-133.033h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-133.033h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095-133.033h15v-15h-15z" aria-label="Canada " />
            <path d="M244.089-133.033h15v-15h-15z" aria-label="Canada " />
            <path d="M228.093-133.033h15v-15h-15z" aria-label="Canada " />
            <path d="M212.097-133.033h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-149.028h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-149.028h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-149.028h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-149.028h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09-149.028h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095-149.028h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087-149.028h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-165.024h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-165.024h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-165.024h15v-15h-15z" aria-label="Canada " />
            <path d="M196.087-165.024h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-181.035h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-181.035h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-181.035h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09-181.035h15v-15h-15z" aria-label="Canada " />
            <path d="M276.095-181.035h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-197.03h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-197.03h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-197.03h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-197.03h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-197.03h15v-15h-15z" aria-label="Canada " />
            <path d="M260.1-197.03h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-213.026h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-213.026h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-213.026h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-213.026h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-213.026h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-213.026h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09-213.026h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-229.022h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-229.022h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-229.022h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-229.022h15v-15h-15z" aria-label="Canada " />
            <path d="M292.09-229.022h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09-245.032h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-245.032h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-245.032h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-245.032h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-245.032h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-245.032h15v-15h-15z" aria-label="Canada " />
            <path d="M308.087-245.032h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09-261.028h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-261.028h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-261.028h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-261.028h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-261.028h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-261.028h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086-277.024h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09-277.024h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-277.024h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-277.024h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-277.024h15v-15h-15z" aria-label="Canada " />
            <path d="M340.093-277.024h15v-15h-15z" aria-label="Canada " />
            <path d="M324.097-277.024h15v-15h-15z" aria-label="Canada " />
            <path d="M420.086-293.034h15v-15h-15z" aria-label="Canada " />
            <path d="M404.09-293.034h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-293.034h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-293.034h15v-15h-15z" aria-label="Canada " />
            <path d="M356.088-293.034h15v-15h-15z" aria-label="Canada " />
            <path d="M388.094-309.03h15v-15h-15z" aria-label="Canada " />
            <path d="M372.099-309.03h15v-15h-15z" aria-label="Canada " />
            <path d="M692.087 138.968h15v-15h-15z" aria-label="France " />
            <path d="M1076.087 154.979h15v-15h-15z" aria-label="Mongolia " />
            <path d="M900.09 138.968h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M708.097 138.968h15v-15h-15z" aria-label="France " />
            <path d="M1284.09 378.978h15v-15h-15z" aria-label="Papua New Guinea " />
            <path d="M692.087 122.972h15v-15h-15z" aria-label="France " />
            <path d="M1092.098 106.977h15v-15h-15z" aria-label="Mongolia " />
            <path d="M948.092 106.977h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M884.094 106.977h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M692.087 106.977h15v-15h-15z" aria-label="France " />
            <path d="M948.092 90.966h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M676.091 90.966h15v-15h-15z" aria-label="United Kingdom " />
            <path d="M740.089 74.97h15v-15h-15z" aria-label="Sweden " />
            <path d="M724.093 58.975h15v-15h-15z" aria-label="Denmark " />
            <path d="M724.093 42.979h15v-15h-15z" aria-label="Norway " />
            <path d="M500.094 26.969h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094 10.973h15v-15h-15z" aria-label="Greenland " />
            <path d="M500.094-5.023h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-37.029h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-53.025h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-69.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-85.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M484.098-101.027h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-117.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M468.088-133.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M420.086-149.028h15v-15h-15z" aria-label="Greenland " />
            <path d="M436.096-165.024h15v-15h-15z" aria-label="Greenland " />
            <path d="M404.09-181.035h15v-15h-15z" aria-label="Greenland " />
            <path d="M420.086-197.03h15v-15h-15z" aria-label="Greenland " />
            <path d="M436.096-213.026h15v-15h-15z" aria-label="Greenland " />
            <path d="M436.096-229.022h15v-15h-15z" aria-label="Greenland " />
            <path d="M868.099 154.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 138.968h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 138.968h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 138.968h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093 138.968h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099 122.972h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 122.972h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093 122.972h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 122.972h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 122.972h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094 122.972h15v-15h-15z" aria-label="Kazakhstan " />
            <path d="M1140.1 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093 106.977h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1316.097 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097 90.966h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1316.097 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M980.098 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M948.092 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097 74.97h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M980.098 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M948.092 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M804.086 58.975h15v-15h-15z" aria-label="Russia " />
            <path d="M1348.088 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1300.086 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M980.098 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M948.092 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M804.086 42.979h15v-15h-15z" aria-label="Russia " />
            <path d="M1380.094 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1364.099 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1316.097 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1300.086 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M980.098 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M948.092 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M804.086 26.969h15v-15h-15z" aria-label="Russia " />
            <path d="M1396.09 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1380.094 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1364.099 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1348.088 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1316.097 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1300.086 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M980.098 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M948.092 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M804.086 10.973h15v-15h-15z" aria-label="Russia " />
            <path d="M1444.092-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1412.086-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1396.09-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1380.094-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1364.099-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1348.088-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1316.097-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1300.086-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M980.098-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M948.092-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M852.088-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M804.086-5.023h15v-15h-15z" aria-label="Russia " />
            <path d="M1444.092-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1428.096-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1412.086-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1396.09-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1380.094-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1364.099-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1348.088-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1316.097-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1300.086-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M484.098-21.033h15v-15h-15z" aria-label="Greenland " />
            <path d="M948.092-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M804.086-21.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1412.086-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1396.09-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1380.094-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1364.099-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1348.088-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1316.097-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1300.086-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M980.098-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M948.092-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M868.099-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M836.093-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M820.097-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M804.086-37.029h15v-15h-15z" aria-label="Russia " />
            <path d="M1396.09-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1380.094-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1332.092-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1316.097-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1300.086-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096-53.025h15v-15h-15z" aria-label="Russia " />
            <path d="M1412.086-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1300.086-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1236.089-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1220.093-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M996.094-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09-69.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1284.09-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1204.097-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1172.091-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M964.088-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09-85.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1188.087-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1156.095-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1028.1-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1012.09-101.027h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-117.022h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-117.022h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-117.022h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-117.022h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-117.022h15v-15h-15z" aria-label="Russia " />
            <path d="M1044.096-117.022h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086-117.022h15v-15h-15z" aria-label="Russia " />
            <path d="M1268.095-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1252.099-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1140.1-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M932.096-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M916.086-133.033h15v-15h-15z" aria-label="Russia " />
            <path d="M1124.09-149.028h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-149.028h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-149.028h15v-15h-15z" aria-label="Russia " />
            <path d="M948.092-149.028h15v-15h-15z" aria-label="Russia " />
            <path d="M1108.093-165.024h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-181.035h15v-15h-15z" aria-label="Russia " />
            <path d="M1092.098-197.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-197.03h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-213.026h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-213.026h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-229.022h15v-15h-15z" aria-label="Russia " />
            <path d="M1060.092-229.022h15v-15h-15z" aria-label="Russia " />
            <path d="M884.094-229.022h15v-15h-15z" aria-label="Russia " />
            <path d="M1076.087-245.032h15v-15h-15z" aria-label="Russia " />
            <path d="M900.09 154.979h15v-15h-15z" aria-label="Kazakhstan " />
          </g>
        </svg>
      </div>
    );
  }
}

export default PicWolrdMap;
