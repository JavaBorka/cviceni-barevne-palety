import React from "react";
import classNames from "classnames";

const palettes = [
  {
    name: 'Mimosa Retreat',
    image: '/img/mimosa-retreat.jpg',
    attribution: {
      name: 'Sara Cervera',
      url: 'https://unsplash.com/photos/XkiONXX7i4o',
    },
    colors: ['#583e26', '#a78b71', '#f7c815', '#ec9704', '#9c4a1a'],
    direction: 'vertical',
    description: 'Brown, combined with shades of yellow, is a rather unusual combination that can be called really sweet. It is both citrusy, caramel, and has a slight hint of cinnamon, which gives it a special versatility. In summer it will invigorate, make you act and move, and in winter it will warm and relax.',
  },
];

const Palette = (paletteData) => (
    <div className="palette">
        <div className={classNames("palette-scheme", {"palette-scheme--vertical" : (paletteData.direction === 'vertical'), "palette-scheme--horizontal" : (paletteData.direction === 'horizontal')})}>
            <img className="scheme-image" src={paletteData.image} alt={paletteData.name} />
            <div className="scheme-colors">
                {
                    paletteData.colors.map((color) => (
                        <SchemeColor key={color} color={color} />
                    ))
                }
            </div>
        </div>
        <div className="palette-info">
            <h2>{paletteData.name}</h2>
            <p>{paletteData.description}</p>

            <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
        </div>
    </div>

)

export default Palette