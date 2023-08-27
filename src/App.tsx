import { useEffect, useState } from 'react'
import './App.css'
import UserMenu from './components/UserMenu'
import ThemeProvider from './providers/themeProvider'
import getUser from './actions/getUser'
import { User } from './types'

function App() {
  const [user, setUser] = useState<Partial<User>>({})
  
  useEffect(() => {
    getUser().then((value) => {
      setUser(value)
    }).catch((error) => {
        throw new Error(error)
    })
  }, [])

  return (
    <ThemeProvider>
      <div
        className="
        p-10
        flex
        h-screen
        items-start
        justify-center
        border-[1px]
        bg-gray-50"
      >
        <UserMenu currentUser={user} />
      </div>
    </ThemeProvider>
  )
}

export default App
