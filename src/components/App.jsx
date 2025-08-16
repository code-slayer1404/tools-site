import { Container } from 'reactstrap'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import BackToTop from '../components/common/BackToTop'
import Tools from '../components/sections/Tools'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import LanguageProvider from '../contexts/LanguageProvider'
import { useDarkMode } from '../hooks/useDarkMode'


function AppContent() {
  const [darkMode, setDarkMode] = useDarkMode()
  

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        
      />

      <main className="pt-5 mt-5">
        <Container>
          <Tools  />
          <About />
          <Contact />
        </Container>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}