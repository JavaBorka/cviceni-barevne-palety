import React from "react";
import classNames from "classnames";
import SchemeColor from "../SchemeColor";
import './style.css'

const Palette = ({paletteData}) => (
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

            <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a></p>
        </div>
    </div>

)

export default Palette