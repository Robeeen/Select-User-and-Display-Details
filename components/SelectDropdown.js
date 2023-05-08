import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

function SelectDropdown() {
    const [users, setUsers] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data))
        .then((error) => console.log(error));
    }, []);

    const handleChange = (e) =>{
        //alert(e.target.value);   
        axios.get(`https://jsonplaceholder.typicode.com/users/${e.target.value}`)
        .then((response) => setDetails(response.data))
        .then((error) => console.log(error));    
    };

  return (
    <div>
        <h3>Select and Item from the list to display data:</h3>
        <select className='form-control col-md-3' onChange={handleChange}>

            {users.map((user) => {
                return(
                <option key={user.id} value={user.id}>{user.name}</option>
                )
            })}
        </select>
        <br />
        <div className='col-md-12'>
            <Table striped bordered hover>
                <thead>
            <tr>
                <td>User ID</td>
                <td>User name</td>
                <td>User Email</td>
                <td>User Phone</td>
                <td>User Website</td>
                </tr>
                </thead>
            <tr>
                <td>{details.id}</td>
                <td>{details.name}</td>
                <td>{details.email}</td>
                <td>{details.phone}</td>
                <td>{details.website}</td>

                </tr> 

            </Table>
            User id: {details.id}<br />
            User name: {details.name}<br />
            User email: {details.email}<br />
            User Phone: {details.phone}<br />
            User website: {details.website}<br />
            {/* User Company Name: {company.name} */}
            
        </div>

    </div>
  )
}

export default SelectDropdown
