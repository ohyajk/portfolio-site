"use client"
import { useEffect, useState } from "react"
import About from "./sections/About"
import HomePage from "./sections/HomePage"
import BarLoader from "react-spinners/BarLoader"
import { AnimatePresence, motion } from "framer-motion"
import Skills from "./sections/Skills"
import Tools from "./sections/Tools"
import Projects from "./sections/Projects"
import Popup from "./components/Popup"
import StarAnim from "./components/StarAnim"
import { PopContext } from "./context/PopContext"
import { useContext } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function Home() {
    const { emailPop } = useContext(PopContext)

    return (
        <main className='relative'>
            <AnimatePresence>
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: "0.2", delay: "0.2" }}>
                    <HomePage />
                    <Projects />
                    <Skills />
                    <Tools />
                    <About />
                    <Footer />
                    {emailPop ? <Popup /> : ""}
                    <StarAnim />
                </motion.div>
            </AnimatePresence>
        </main>
    )
}

export default Home
