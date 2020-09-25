import styled from 'styled-components';

export const WrapApplication = styled.div`
  margin: 0 10px;
`;

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}
export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const TextRight = styled.div`
  text-align: center;
`;

export const WrapSwitcher = styled.div`
  display: inline-block;
  max-width: 30px;
  margin: 20px 12px;
  img{
    max-width: 100%;
    transition: transform 0.5s linear;
  }
  &:hover{
    cursor: pointer;
    img{
      transform: scale(1.1);
    }
  }  
`;

export const Logo = styled.h1`
  margin: 20px 0 0 50px;
  margin: 10px 0 0 20px;
  font-size: 26px;
`;

export const ButtonMenu = styled.button`
   &:hover{
    cursor: pointer;
   }
`;

export const Menu = styled.div`
    position: fixed;
    padding: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    left: 0;
    transition: top .3s ease;
    background: #e74190;
    color: #fff;
    &.hide{
      top: -150%;
    }
    &.show {
      top: 0;
    }
`;