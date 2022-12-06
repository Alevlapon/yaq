import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';

const useStyles = makeStyles({
	root: {
		width: '13.125rem',
		height: '4px',
		"@media (max-width: 1400px)": {
			width: '11.875rem;',
		},
		"@media (max-width: 1400px)": {
			width: '11.875rem;',
		},
		"@media (max-width: 1250px)": {
			width: '10.625rem;',
		},
		"@media (max-width: 1100px)": {
			width: '13.125rem',
		},
		"@media (max-width: 992px)": {
			width: '11.875rem;',
		},
		"@media (max-width: 768px)": {
			width: '8.5rem;',
		},
		"@media (max-width: 740px)": {
			width: '7.5rem;',
		},
		"@media (max-width: 700px)": {
			width: '23vw;',
		},
		"@media (max-width: 540px)": {
			width: '20vw;',
		},
		"@media (max-width: 480px)": {
			width: '100%',
		}
	},
	thumb: {
		color: `var(--clr-primary-2)`,
	},
	rail: {
		color: `var(--clr-primary-4)`,
	},
	track: {
		color: `var(--clr-primary-2)`,
	},
});

const PriceSlider = ({ value, changePrice }) => {
  	const classes = useStyles();

  	return (
		<Wrapper>
			<div className={classes.root}>
				<Slider
					value={value}
					onChange={changePrice}
					min={100}
					max={1000000}
					classes={{
						thumb: classes.thumb,
						rail: classes.rail,
						track: classes.track,
					}}
				/>
			</div>
		</Wrapper>
  	);
};

const Wrapper = styled.nav`
	.MuiSlider-thumb {
		width: 20px;
		height: 20px;
		margin-top: -9px;
	}
	
	.MuiSlider-thumb:after {
		display: none;
	}
`

export default PriceSlider;