import ContextProvider from 'context/ProviderComposer';

import { BrowserRouter } from "react-router-dom";
import MainRoute from 'router/MainRoute';

import MainHeader from 'components/header/Header';
import SideBar from 'components/sidebar/SideBar';

import styled from 'styled-components';
import GlobalStyle from 'style/GlobalStyle';
import "antd/dist/antd.css";

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <AppArea>
          <SideBar />
          <MainContainer>
            <MainHeader />
            <MainRoute />
          </MainContainer>
        </AppArea>
        <GlobalStyle />
      </BrowserRouter>
    </ContextProvider>
  );
}

const AppArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export default App;
