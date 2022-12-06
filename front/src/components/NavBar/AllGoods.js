import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '../../assets/blackArrow.svg';
import MenClothes from '../products/MenClothes';
import WomenClothes from '../products/WomenClothes';
import BabyClothes from '../products/BabyClothes';
import Shoes from '../products/Shoes';
import OtherClothes from '../products/OtherClothes';

function AllGoods() {
	const [isActive, setActive] = useState("false");
	
	const handleToggle = () => {
		setActive(!isActive);
	};

  	return (
	 	<All>
			<div className='dd-menu'>
				<div className='dropdown-header dropdown-all'>
					<p className='dropdown-title  dropdown-all'>Все товары</p>
				</div>
				
				<MenClothes/>
				<WomenClothes/>
				<BabyClothes/>
				<Shoes/>
				<OtherClothes/>
			</div>
	 	</All>
  	)
}

const All = styled.nav`
	@media (min-width: 481px) {
		.dd-menu {
			display: flex;
			justify-content: space-between;
		}

		.dropdown-all {
			display: none;
			width: 0;
			height: 0;
		}
	}
`

export default AllGoods;