import React from "react";
import styled from "styled-components";
import deleteIcon from "../assets/delete-icon.svg";

function SavedFilter({ item, deleteFilter }) {
  return (
    <Wrapper>
      <p className="selected-filter-text">{item.label}</p>
      <img
        src={deleteIcon}
        alt="filter deleter"
        className="button selected-filter-icon"
        onClick={() => deleteFilter(item.label)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;

  .selected-filter-text {
    font-size: 16px;
    font-weight: 400;
    color: var(--clr-primary-4);
    text-decoration: underline;
    text-decoration-style: dashed;
  }

  .selected-filter-icon {
    width: 10px;
    margin: 0 25px 0 5px;
  }

  @media (max-width: 1500px) {
    .selected-filter-text {
      font-size: 14.8px;
    }
  }

  @media (max-width: 1400px) {
    .selected-filter-text {
      font-size: 14px;
    }
  }

  @media (max-width: 1350px) {
    .selected-filter-text {
      font-size: 13px;
    }
  }

  @media (max-width: 1270px) {
    .selected-filter-text {
      font-size: 12px;
    }
  }

  @media (max-width: 1200px) {
    .selected-filter-text {
      font-size: 12.6px;
    }
  }

  @media (max-width: 1100px) {
    .selected-filter-text {
      font-size: 11.5px;
    }

    .selected-filter-icon {
      width: 8px;
    }
  }

  @media (max-width: 992px) {
    .selected-filter-text {
      font-size: 10.5px;
    }

    .selected-filter-icon {
      margin-right: 20px;
    }
  }

  @media (max-width: 920px) {
    .selected-filter-text {
      font-size: 10px;
    }

    .selected-filter-icon {
      margin-right: 16px;
    }
  }

  @media (max-width: 870px) {
    .selected-filter-icon {
      margin-right: 13px;
    }
  }

  @media (max-width: 810px) {
    .selected-filter-text {
      font-size: 9px;
    }

    .selected-filter-icon {
      margin-right: 14px;
    }
  }

  @media (max-width: 768px) {
    .selected-filter-icon {
      width: 6px;
      margin: 0 10px 0 3px;
    }
  }

  @media (max-width: 740px) {
    .selected-filter-text {
      font-size: 7.8px;
    }
  }

  @media (max-width: 675px) {
    .selected-filter-text {
      font-size: 7px;
    }
  }

  @media (max-width: 650px) {
    .selected-filter-text {
      font-size: 9px;
    }
  }

  @media (max-width: 590px) {
    .selected-filter-text {
      font-size: 8.5px;
    }
  }

  @media (max-width: 590px) {
    .selected-filter-text {
      font-size: 8px;
    }

    .selected-filter-icon {
      margin-right: 7px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 8px;

    .selected-filter-text {
      font-size: 16px;
    }

    .selected-filter-icon {
      width: 10px;
      margin: 0 0 0 5px;
    }
  }
`;

export default SavedFilter;
