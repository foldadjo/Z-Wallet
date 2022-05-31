import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  console.log("RENDER WITH SERVER IS RUNNING");
  const result = await axios
    .get(`${process.env.URL_BACKEND2}/users`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return [];
    });
  //   console.log(result.data);
  return {
    props: {
      data: result.data,
    },
  };
}

export default function SSG(props) {
  const router = useRouter();
  const [data, setData] = useState(props.data);

  const handleDetailProfile = (id) => {
    router.push(`/rendering/ssg/${id}`);
  };

  return (
    <div>
      <h1>Rendering with SSG</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleDetailProfile(item.id)}>
            {item.name}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
