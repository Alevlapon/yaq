import React from 'react';
import CheckBoxContainer from './CheckBoxContainer';
import { filterCharacteristics } from "../../../data/filter";

function Characteristic({ colors, changeColors, sizes, changeSizes, brands, changeBrands }) {
 	return (
	 	<div>
			{filterCharacteristics.slice(0,1).map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={colors}
						changeCheckedFilters={changeColors}
					/>
            );
         })}
			{filterCharacteristics.slice(1,2).map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={sizes}
						changeCheckedFilters={changeSizes}
					/>
            );
         })}
			{filterCharacteristics.slice(2,3).map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={brands}
						changeCheckedFilters={changeBrands}
					/>
            );
         })}
		</div>
  	);
}

export default Characteristic;