import React from "react";

import styled from "styled-components";

import { HU } from "../img/HU";
const HeaderWrapper = styled.header`
  position: relative;
  img {
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
  }
`;
const Menu = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;

  justify-content: space-evenly;
`;
const MenuItem = styled.li`
  color: #fff;
  width: 33%;
  font-size: 2em;
  cursor: pointer;
  font-family: "Roboto sans-serif";
`;
export const Header = () => {
  return (
    <HeaderWrapper>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contacts</MenuItem>
      </Menu>
      <img src={HU} />
    </HeaderWrapper>
  );
};
