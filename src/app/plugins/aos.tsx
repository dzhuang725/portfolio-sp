"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 500,
      once: false
    });
    console.log('Init AOS')
  }, [])

  return null
}