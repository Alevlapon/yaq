import React from 'react';
import styled from 'styled-components';
import EquipmentClothes from './EquipmentClothes'
import AccessoriesClothes from './AccessoriesClothes'
import RunClothes from './RunClothes'

function OtherClothes() {
	return (
	 	<OtherClothesContainer>
			<ul className='dropdown-menu'>
				<EquipmentClothes/>
				<AccessoriesClothes/>
				<RunClothes/>
			</ul>
		</OtherClothesContainer>
  	)
}

const OtherClothesContainer = styled.nav`
	.dropdown-menu:before {
		content: '';
		position: absolute;
		height: 21.875vw;
		border: 0.5px solid var(--clr-black);
		margin: -1.25vw;
	}

	.dropdown-title {
		font-weight: 600;
	}

	@media (max-width: 480px) {
		.dropdown-menu:before {
			border: 0;
		}
	}
`

export default OtherClothes;