import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Loader from './components/Loader'
import styles from './scss/App.module.scss'


const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div id={styles['app']}>
      {loading ? (
          <Loader />
        ) : (
          <div id={styles['main']}>
            <Navbar />
            <HomePage />
          </div>
        )
      }
    </div>
  )
}

export default App
