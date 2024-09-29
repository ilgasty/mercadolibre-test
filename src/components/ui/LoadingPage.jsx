import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';

export const LoadingPage = () => {
  const [logined, setlogined] = useState(true)
  useEffect(() => {
    setlogined(false)
  }, [])
  
  return (
    <>
      { logined  &&  <Loading/>}
    </>
  )
}
