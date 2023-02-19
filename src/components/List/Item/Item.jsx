import React from "react";
import { StyledButtonSmall } from "../../App/App.styled";
import {
  ListItem,
  SpanItem,
} from "./Item.styled";

export const Item = ({
  story: {
    title,
    url,
    author,
    num_comments,
    points,
  },
}) => (
  <ListItem>
    <SpanItem width="40%">
      <a href={url}>{title}</a>
    </SpanItem>
    <SpanItem width="30%">{author}</SpanItem>
    <SpanItem width="10%">
      {num_comments}
    </SpanItem>
    <SpanItem width="10%">{points}</SpanItem>
    <SpanItem width="10%">
      <StyledButtonSmall type="button">
        Dismiss
      </StyledButtonSmall>
    </SpanItem>
  </ListItem>
);
