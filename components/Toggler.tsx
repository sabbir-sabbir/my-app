"use client"

import React from 'react'
import { useSidebar } from "./ui/sidebar";
import { Button } from './ui/button';
import { PanelRightClose } from 'lucide-react';

const Toggler = () => {

    const {toggleSidebar} = useSidebar();
  return (
    <>
    <Button variant="outline" onClick={toggleSidebar}><PanelRightClose /></Button>
    </>
  )
}

export default Toggler