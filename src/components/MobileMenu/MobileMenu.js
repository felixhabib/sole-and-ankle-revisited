/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <Filler>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
        </Filler>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  background: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
  padding: 32px;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  font-size: 18/16rem;
  text-transform: uppercase;

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  flex: 1;
  font-size: 14/16rem;
  color: ${COLORS.gray[700]};
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`;

export default MobileMenu;
