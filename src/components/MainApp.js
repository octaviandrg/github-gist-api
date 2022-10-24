import React from "react";
import { TitleDesc } from "./TitleDesc";
import { SearchBar } from "./SearchBar";
import { Divider } from "antd";

const MainApp = () => (
    <>
        <Divider orientation="center">Github GIST API</Divider>
        <SearchBar />
    </>
);

export default MainApp;