import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import Features from './features/landing/Features'
import Gallery from './features/landing/Gallery'
import Bar from './features/landing/Bar'
import Location from './features/landing/Location'
import Contact from './features/landing/Contact'
import Footer from './components/layout/Footer'
import Chatbot from './components/ui/Chatbot'
import CalendarModal from './components/ui/CalendarModal'
import { useState, useEffect } from 'react'

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (window.AOS) window.AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' })
    }, [])

    return (
        <>
            <Header />
            <main>
                <Hero onOpenModal={() => setIsModalOpen(true)} />
                <Features />
                <Gallery />
                <Bar />
                <Location />
                <Contact />
            </main>
            <Footer />
            <Chatbot />
            <CalendarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
