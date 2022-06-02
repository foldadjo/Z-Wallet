// import React from "react";
// import axios from "axios";

// // getStaticPaths = menyiapkan list dari page yang ingin dibuat statis
// // fallback
// // false = direct ke 404 notfound
// // true = akan ketampil blank page dan rawan error
// // blocking = akan tertampil halaman dan jika ada data yg tidak bsa di munculkan maka akan di hilangkan
// export async function getStaticPaths() {
//   const listUser = await axios
//     .get(`${process.env.URL_BACKEND2}/users`)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return [];
//     });

//   const listPath = listUser.data.map((item) => ({
//     params: {
//       id: `${item.id}`,
//     },
//   }));
//   //   console.log(listUser);
//   //   console.log(listPath);
//   return {
//     paths: listPath,
//     fallback: true, // false or 'blocking'
//   };
// }

// // getStaticProps = untuk get data detail
// export async function getStaticProps(context) {
//   // context.params.id
//   const result = await axios
//     .get(`${process.env.URL_BACKEND2}/users/${context.params.id}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return [];
//     });
//   //   console.log(result.data);
//   return {
//     props: {
//       data: result.data,
//     },
//   };
// }

// export default function DetailProfile(props) {
//   return (
//     <div>
//       <h1>DetailProfile</h1>
//       <hr />
//       <h5>{props.data.name}</h5>
//       <h6>{props.data.email}</h6>
//     </div>
//   );
// }
