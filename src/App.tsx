import './App.css'
import CoverSection from './components/CoverSection'
import InvitationSection from './components/InvitationSection'
import CountdownSection from './components/CountdownSection'
import GallerySection from './components/GallerySection'
import MapSection from './components/MapSection'
import CalendarSection from './components/CalendarSection'
import MusicPlayer from './components/MusicPlayer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div id="page-list">
      <MusicPlayer />
      <div className="page-item current">
        <div className="page-wrap">
          <div className="ele-wrap">
            <div className="content-centered">
              <ScrollReveal direction="up" duration={1}>
                <CoverSection />
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.1} distance={30}>
                <InvitationSection />
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.1} distance={30}>
                <CountdownSection />
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.1} distance={40}>
                <GallerySection />
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.1} distance={30}>
                <MapSection />
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.1} distance={30}>
                <CalendarSection />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
