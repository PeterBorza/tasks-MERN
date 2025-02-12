import styled from "styled-components";

const ResizableTable = () => {
  return <Table contentEditable></Table>;
};

const Table = styled.div`
  width: 300px;
  height: 200px;
  background-color: aliceblue;
  resize: horizontal;
  border: 1px solid ${props => props.theme.main};
  overflow: hidden;
`;

export default ResizableTable;
