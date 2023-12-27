import "./UserList.css";

export default function UserList({ users, setUsers }) {
  const handleDelete =(id)=>{
    setUsers((prev)=>{
      return prev.filter((user) =>{
        return user.id !== id
    })
    })
  }
  return (
    <div className="userList-container container">
      {users.map((user) => {
        return (
          <div className="card" key={user.id}>
            <div className="card-inner">
              <img src={user.image} alt={user.firstName} />
              <h3>
                {user.firstName} {user.lastName} {user.age} age
              </h3>
              <p>From: {user.from} </p>
              <p>Job: {user.job} </p>
              <p>Gender: {user.gender} </p>
              <button onClick={()=>{
                handleDelete(user.id)
              }}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
