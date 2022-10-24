import React, {useState} from "react";
import { Input } from "antd";
import { getAllGistUrl } from "./config";
import { SearchResults } from "./SearchResults";

const { Search } = Input;

export const SearchBar = () => {
    const [username, setUsername] = useState(null);
    const [data, setData] = useState([]);

    const onSearch = async (username) => {
        setUsername(username);
        if (username !== "") {
          const URL = getAllGistUrl(username);
          const res = await fetch(URL);
          const data = await res.json();
          setData(data);
        } 
    };
    

    return (
        <>
          <Search
            placeholder="Search by username"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        
          {username !== "" && data ?(
            <SearchResults data={data} username={username} />
            ): null}
        </>
    );
};