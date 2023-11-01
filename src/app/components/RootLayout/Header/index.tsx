'use client'

import Logo from "./components/Logo";
import NavMenu from "./components/NavMenu";
import LangPicker from "./components/LangPicker";
import Container from "./components/Container";
import InfoAndHelp from "./components/InfoAndHelp";
import Account from "./components/Account";
import RightSideWrapper from "./components/RightSideWrapper";
import LeftSideWrapper from "./components/LeftSideWrapper";
import BurgerMenu from "./components/BurgerMenu";
import CurrencyPicker from "../../CurrencyPicker";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <LeftSideWrapper>
        <Logo />
        <NavMenu />
      </LeftSideWrapper>
      <RightSideWrapper>
        <LangPicker />
        <CurrencyPicker />
        <InfoAndHelp />
        <Account />
        <BurgerMenu />
      </RightSideWrapper>
    </Container>
  );
};

export default Header;
