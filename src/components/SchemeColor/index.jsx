import React from 'react';
import './style.css'

const SchemeColor = ({color}) => (
    <div className="scheme-color" style={{ backgroundColor: color}} >{color}</div>
)

export default SchemeColor