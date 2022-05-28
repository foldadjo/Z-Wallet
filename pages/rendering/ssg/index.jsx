import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";


export async function getStaticProps(context) {
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


export default function SSG() {
    const [data, setData] = useState([]);
    const router = useRouter()

    const handleDetailProfile = (id) => {
        router.push(`/rendering/ssg/${id}`)
    }

  return (
    <div>
      <h1>Rendering with SSG</h1>
      <hr />
      {data.map((item) => (
          <div key={item.id}>
              <button onClick={() => handleDetailProfile(item.id)}>{item.name}</button>
          </div>
      ))}
      <div>
        <h3>Bagus</h3>
        <hr />
      </div>
    </div>
  );
}
