import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
  wrap: {
    margin: 0,
  },
});

function FilterCheckbox({ changeChecked, data }) {
  const classes = useStyles();
  const { checked, label, id } = data;
  // console.log(checked);

  return (
    <Wrapper>
      <FormControlLabel
        className="category-item"
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
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
        label={label}
      />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
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
`;

export default FilterCheckbox;
