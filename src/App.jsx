import { useState, useEffect } from 'react'
import {
  Outlet,
} from "react-router-dom"
import Loader from './components/Loader'
import Navbar from './components/Navbar'
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
            <Outlet />
          </div>
        )
      }
    </div>
  )
}

export default App
