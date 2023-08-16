import React from "react";

export default function SelectInput({name, id='', placeholder, options, classes=''}) {
  return (
    <select name={name} id={id} className={classes}>
        <option value="">{placeholder}</option>
        {options.map(op => 
            <option value={op}>{op}</option>)}
    </select>
  );
}
