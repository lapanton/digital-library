import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { MainPage } from "./pages/MainPage";
import { ViewBookDetails } from "./pages/ViewBookDetails";
import { Shelf } from "./pages/Shelfs";
import { ShelfInterview } from "./pages/ShelfInterview";
import { WrapApplication, lightTheme, darkTheme, WrapSwitcher, Logo, ButtonMenu, Menu, TextRight } from "./components/Theme";
import imageSun from './images/day.svg';
import imageMoon from './images/night.svg';
import 'antd/dist/antd.css';
import { Row, Col, Tooltip } from 'antd';
import { MenuContent } from './components/MenuContent/MenuContent';

const GlobalStyle = createGlobalStyle`
  * {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
    font-family: 'Open Sans', sans-serif;
    button:focus {outline:0;}
    a{
      &.border{
        border: 1px solid #1890ff;
        padding: 5px 10px;
      }
    }
  }
`;

const responsive = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};


const App = () => {

  const [toggleClass, setToggleClass] = useState(false)
  const menuToggle = () => {
    setToggleClass(!toggleClass)
  }

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const menuClicked = (e) => {
    if (e.target.getElementsByTagName('a')) {
      setToggleClass(false);
    }
  }

  return (
    <ThemeProvider theme={responsive && theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <WrapApplication className="App">
          <Row>
            <Col span={16}>
              <Link to='/'>
                <Logo>Library App</Logo>
              </Link>
            </Col>
            <Col span={8}>
              <TextRight>
                <WrapSwitcher onClick={themeToggler}>{
                  theme === 'light' ?
                  <Tooltip placement="top" title='Switch to dark mode'>
                    <img src={imageMoon} alt=""/>
                  </Tooltip> :
                  <Tooltip placement="top" title='Switch to light mode'>
                    <img src={imageSun} alt=""/>
                  </Tooltip>
                }
                </WrapSwitcher>
                <ButtonMenu onClick={menuToggle}>
                  <div className={`burger-menu ${toggleClass ? 'open' : 'close'}`}>
                    menu
                  </div>
                </ButtonMenu>
              </TextRight>
            </Col>
          </Row>
          <Menu className={toggleClass ? 'show' : 'hide'} onClick={menuClicked}>
            <MenuContent/>
          </Menu>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/bookview/:id">
              <ViewBookDetails />
            </Route>
            <Route path="/shelf">
              <Shelf />
            </Route>
            <Route path="/shelfinterview">
              <ShelfInterview />
            </Route>
          </Switch>
        </WrapApplication>
      </Router>
    </ThemeProvider>
  );
}

export default App;
