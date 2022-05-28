import React from 'react'
import {useRouter} from "next/router"

export default function DetailUser() {
  const router = useRouter()
  console.log(router)
  return (
    <div> 
      <h1>
        Detail User {router.query.id}
      </h1>
    </div>
  )
}
