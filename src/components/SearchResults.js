import React from "react";
import { Rows } from "./Rows";

export const SearchResults = (data, username) => {
  const userdata = data.data;
  return (
    <>
      {username !== null && userdata.length !== 0 ? (
        <>
          <ul className="paddingData">
            {userdata.map((gist) => {
              return <Rows gistData={gist} />;
            })}
          </ul>
        </>
      ) : null}
    </>
  );
};