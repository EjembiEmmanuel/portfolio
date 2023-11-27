import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import styles from './scss/App.module.scss'


const App = () => {

  return (
    <div id={styles['app']}>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App
