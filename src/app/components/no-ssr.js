'use client'
import dynamic from "next/dynamic";

const noSSR = ({children}) => {
  return <>{children}</>;
}

export default dynamic(() => Promise.resolve(noSSR), { ssr: false });