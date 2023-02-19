import React from "react";
import reactLogo from "../../assets/react.svg";
import { SearchForm } from "../SearchForm/SearchForm";
import { List } from "../List/List";
import { Box, TitleH1 } from "./App.styled";

const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <Box>
      <div>
        <a
          href="https://reactjs.org"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
        <TitleH1>Hacker Stories</TitleH1>
      </div>
      <SearchForm />
      <List stories={stories} />
    </Box>
  );
}

export default App;
