import React, { useState } from "react";
import { getSingleGistUrl } from "./config";
import { Card, Button, Tag, Divider } from "antd";
import { FileBox } from "./FileBox";
import { Forks } from "./Forks";



export const Rows = (gistData) => {
  const unidata = gistData.gistData;
  const files = unidata.files;
  const fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    fileArr.push(language);
  }


  

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const showForks = async (value) => {
    if (value !== "") {
      try {
        const URL = getSingleGistUrl(value);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setShow(true);
      } catch (e) {
        console.log(e);
        setShow(false);
      }
    }
  };

  
  return (
    <div className="site-card-wrapper">
      <Card
        title={unidata.description || "No Description"}
        bordered={false}
        extra={
          <Button type="primary" onClick={() => showForks(`/${unidata.id}`)}>
            Show Forks
          </Button>
        }
      >

        <div>
          {fileArr.map((language, index) => {
            return (
              <Tag color="geekblue" key={index}>
                {language}
              </Tag>
            );
          })}
        </div>

        <FileBox filelist={files} />

        {show && data !== [] ? <Forks forks={data} /> : null}
      </Card>
      <Divider dashed/>
    </div>
  );
};


