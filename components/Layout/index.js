import styled from "@emotion/styled";

import Header from "components/Header";
import Sidebar from "components/Sidebar";

const Layout = ({ title, children }) => {
  const MainContainer = styled.div`
    position: relative;
  `;
  const LayoutKiri = styled.div`
    position: fixed;
    top: 0;
    left: 0;
  `;
  const LayoutKanan = styled.div`
    padding: 2rem 1rem;
    margin-left: 230px;
  `;

  return (
    <MainContainer>
      <LayoutKiri>
        <Sidebar />
      </LayoutKiri>
      <LayoutKanan>
        <Header title={title} />
        {children}
      </LayoutKanan>
    </MainContainer>
  );
};

export default Layout;
