"use client"
import React from 'react'
import { ArrowLeftSquare } from "lucide-react";

const Back = () => {
  return (
   <>
   <button onClick={()=> window.history.back()}  className="flex items-center gap-1 text-amber-200 hover:text-yellow-500 hover:cursor-pointer"> <ArrowLeftSquare/> <span>Back</span></button>
   </>
  )
}

export default Back