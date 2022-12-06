import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
	root: {
		'&$checked': {
			color: '#000',
		},
	},
	checked: {},
	wrap: {
		margin: 0,
	},
});

function SortingBox({ checked1, sortAscending, checked2, sortDescending, checked3, sortBySale, checked4, sortByDate, checked5, sortByDefault, activeSorting }) {
	const classes = useStyles();

  	return (
		<SortingContent>
			<div className={activeSorting ? 'sorting' : 'sorting active'}>
				<h6 className='filter-title laptop'>Сортировка</h6>
				<FormControlLabel className='category-item'
					classes={{
						label: classes.label,
						root: classes.wrap,
					}}
					control={
						<Checkbox
							classes={{
								checked: classes.checked,
								root: classes.root,
							}}
							size='small'
							checked={checked1}
							onChange={sortAscending}
						/>
					}
					label={"По возрастанию цен"}
				/>

				<FormControlLabel className='category-item'
					classes={{
						label: classes.label,
						root: classes.wrap,
					}}
					control={
						<Checkbox
							classes={{
								checked: classes.checked,
								root: classes.root,
							}}
							size='small'
							checked={checked2}
							onChange={sortDescending}
						/>
					}
					label={"По убыванию цен"}
				/>

				<FormControlLabel className='category-item'
					classes={{
						label: classes.label,
						root: classes.wrap,
					}}
					control={
						<Checkbox
							classes={{
								checked: classes.checked,
								root: classes.root,
							}}
							size='small'
							checked={checked3}
							onChange={sortBySale}
						/>
					}
					label={"Сначала скидки"}
				/>

				<FormControlLabel className='category-item'
					classes={{
						label: classes.label,
						root: classes.wrap,
					}}
					control={
						<Checkbox
							classes={{
								checked: classes.checked,
								root: classes.root,
							}}
							size='small'
							checked={checked4}
							onChange={sortByDate}
						/>
					}
					label={"Сначала новинки"}
				/>

				<div className="laptop">
					<FormControlLabel className='category-item'
						classes={{
							label: classes.label,
							root: classes.wrap,
						}}
						control={
							<Checkbox
								classes={{
									checked: classes.checked,
									root: classes.root,
								}}
								size='small'
								checked={checked5}
								onChange={sortByDefault}
							/>
						}
						label={"По умолчанию"}
					/>
				</div>
			</div>
		</SortingContent>
  	);
}

const SortingContent = styled.nav`
	.MuiButtonBase-root.MuiIconButton-root.MuiCheckbox-root {
		padding: 0 15px 0 0;
	}

	.MuiSvgIcon-fontSizeSmall {
		width: 15px;
		height: 15px;
	}

	.MuiTypography-body1 {
		font-family: Jost;
	}	
`

export default SortingBox;