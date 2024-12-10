import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './ui/input-field'
import Footer from './ui/footer'
import Header from './ui/header'
import MyDropzone from './ui/upload'
import Work from './ui/work'
import Result from './ui/result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='items-center text-center'>
      <Header />
      {/* <InputField /> */}
      <MyDropzone />

      <Work />

      <Result />
      
      <Footer />
      
    </div>
  )
}

export default App
