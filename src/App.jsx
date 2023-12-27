import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import UserList from './components/userList/UserList'
import NewUserForm from './components/newuser/NewUserForm'

function App() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const addUser =(user)=>{
    setUsers((prev)=>{
      return [...prev, user]
    })
    setShowModal(false)

  }

  const handleShowModal =()=>{
    setShowModal(true)
  }
  const closeModal =(e)=>{
      if(e.target.className === 'overlay') setShowModal(false)
      if(e.keyCode === 27) setShowModal(false)
  }
  return (
    <div className='App' onClick={closeModal} onKeyDown={closeModal}>
      <Navbar usersLength={users.length}/>
      <main>
        {users.length == 0 && <div className="no-users">No users</div>}
        <UserList users={users} setUsers={setUsers}/>
        {showModal && <NewUserForm addUser={addUser}/>}
        <button className="create-user" onClick={handleShowModal}>Create user</button>
      </main>
      <Footer/>
    </div>
  )
}

export default App
