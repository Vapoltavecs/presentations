import styled from "styled-components";

export default styled.div<{
  margin: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
}>`
  margin: ${(props) =>
    props.margin.top +
    "px " +
    props.margin.right +
    "px " +
    props.margin.bottom +
    "px " +
    props.margin.left +
    "px "};
`;
