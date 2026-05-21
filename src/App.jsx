import Nav from './components/Nav'
import Hero from './components/Hero'
import WhatItIs from './components/WhatItIs'
import HowItWorks from './components/HowItWorks'
import Session from './components/Session'
import Metaphor from './components/Metaphor'
import Membership from './components/Membership'
import Artefacts from './components/Artefacts'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatItIs />
        <HowItWorks />
        <Session />
        <Metaphor />
        <Membership />
        <Artefacts />
      </main>
      <Footer />
    </>
  )
}
