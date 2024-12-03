"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Page = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const router = useRouter()

  return (
    <div>
      <label>email
        <input type='text' onChange={e => setData({ ...data, email: e.target.value })} value={data.email} />
      </label>
      <label>password
        <input type='password' onChange={e => setData({ ...data, password: e.target.value })} value={data.password} />
      </label>
      <button onClick={_ => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, { method: "post", body: JSON.stringify(data) }).then(_ => {
          {
            router.replace("/dashboard")
          }
        }).catch(console.log)
      }}>Login</button>
    </div>
  )
}

export default Page