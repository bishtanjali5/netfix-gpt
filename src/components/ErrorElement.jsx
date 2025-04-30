import React from 'react'
import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const err = useRouteError()

  return (
    <div className='flex items-center flex-col'>
            <img src="https://t4.ftcdn.net/jpg/05/24/04/51/360_F_524045110_UXnCx4GEDapddDi5tdlY96s4g0MxHRvt.jpg" alt="" />
            <h1>{err?.error?.message}</h1>
    </div>
  )
}

export default ErrorElement