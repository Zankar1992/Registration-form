import React, { useState } from 'react';
// import './style.css';

// function use karine form create karel che 
const App = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value, name);

    setUserRegistration({ ...userRegistration, [name]: value })   
     //old element nd current elem array ma data store thase 
    //array ma nahi hoy to individual data console ma show thase field ma write nai thay
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecords = { ...userRegistration, id: new Date().getTime().toString() }
    console.log(records);
    setRecords([...records, newRecords]);
    // console.log(records);
    // store data jova mate setuser nd console.log commit karine check karvu 
    setUserRegistration({ username: "", email: "", phone: "", password: "" })   // registration kariye aetle field empty thai jase 
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
        <div>
          <label htmlFor="username">Fullname</label>
          <input type="text" autoComplete="off"
            value={userRegistration.username}
            onChange={handleInput}
            name="username" id="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" autoComplete="off"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" autoComplete="off"
            value={userRegistration.password}
            onChange={handleInput}
            name="password" id="password" />
        </div>

        <button type="submit">Registration</button>
      </form>
      <div>
        {
          records.map((curElem) => {
            const { id: username, email, phone, password } = curElem;
            return (
              // field karel data niche show karse 
              <div className="showDataStyle" key={curElem.id}> 
                <p>{username}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{password}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App;
