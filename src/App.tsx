import { Header } from './structure/Header'
import { Main } from './structure/Main'
import { Footer } from './structure/Footer'

function App() {
  
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
