import React from 'react'; 
import { Typography } from "antd";
const { Title } = Typography;
  
export const TitleDesc=()=>
{
  return (
      <div>
    <Title className="TitleName">GitHub GIST Search API Demo</Title>
    <p>
      React Single Page Application demo that uses Github Gist API to show all
      public gists for an user.</p>
      <p>ReactJS Single Page App demo which has the following features:</p>
      <ul>
        <li>
          Search: When a user enters a username, it should be able to get a
          full list of public gists by that user.
        </li>
        <li>
          Filetype: Convert the filetypes of the files in the gist into a
          tag/badge, (e.g, if the returned gist has list of files containing
          python and javascript files, the gist should have the respective
          tags/badges).
        </li>
        <li>
          Fork: Username/Avatar of the last 3 users who forked it with avatar
          linking to the fork.
        </li>
        <li>Some of username to test the functionality are addyosmani, octocat</li>
      </ul>
    </div>
  );
};