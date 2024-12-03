"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div>I am dashboard</div>
      <button onClick={_ => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`).then(_ => {
          {
            router.replace("/login")
          }
        }).catch(console.log)
      }}>logout</button>
    </>

  )
}

export default Page