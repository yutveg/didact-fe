import styled from "styled-components";

export const SideListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: #eeeeee;
  // position: relative;
  // overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
