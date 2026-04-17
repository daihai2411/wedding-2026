import './App.css'
import CoverSection from './components/CoverSection'
import InvitationSection from './components/InvitationSection'
import CountdownSection from './components/CountdownSection'
import GallerySection from './components/GallerySection'
import MapSection from './components/MapSection'
import CalendarSection from './components/CalendarSection'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <div id="page-list">
      <MusicPlayer />
      <div className="page-item current">
        <div className="page-wrap">
          <div className="ele-wrap">
            <CoverSection />
            <InvitationSection />
            <CountdownSection />
            <GallerySection />
            <MapSection />
            <CalendarSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
