import React from "react";
import { StyledButtonLarge } from "../App/App.styled";
import {
  Form,
  Input,
  Label,
} from "./SearchForm.styled";

export const SearchForm = () => {
  return (
    <Form>
      <Label htmlFor="search">Search: </Label>
      <Input id="search" type="text" />
      <StyledButtonLarge type="submit">
        Submit
      </StyledButtonLarge>
    </Form>
  );
};
