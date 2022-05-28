import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


export async function getServerSide(context) {
    console.log("RENDER WITH SERVER IS RUNNING");
    const result = await axios
    .get(`${process.env.URL_BACKEND2}/users}`)
    .then((res) => {return res})
    .catch((err) => {return []});
  return {
      props: {
          data: result.data,
      },
    };
}


export default function SSR() {
    const [data, setData] = useState([]);

  return (
    <div>
      <h1>Rendering with SSR</h1>
      <hr />
      {data.map((item) => (
          <div key={item.id}>
              <h3>{item.name}</h3>
          </div>
      ))}
      <div>
        <h3>Bagus</h3>
        <hr />
      </div>
    </div>
  );
}
