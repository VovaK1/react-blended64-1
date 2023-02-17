import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const SpanItem = styled.span`
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  a {
    color: inherit;
  }

  width: ${({ width }) => width};
`;
