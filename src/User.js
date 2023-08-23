import React, { useState } from 'react';
import axios from 'axios';

export default function User() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3001/user`, { id: '', name: name, email: email, phone: phone, address: address });
        alert('Data successfully Posted!');
    }
    return (

        <form onSubmit={handlesubmit} id='form'>
            <div className="form-row">
                <div className="form-group col-md-10">
                    <label for="inputEmail4">Name</label>
                    <input type='text' className="form-control" placeholder='Enter the name' value={name} name='name' onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="form-group col-md-10">
                    <label for="inputPassword4">Email</label>
                    <input type='email' className="form-control" placeholder='Enter the email' value={email} name='email' onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="form-group col-md-10">
                    <label for="inputPassword4">Phone</label>
                    <input type='number' className="form-control" placeholder='Enter the number' value={phone} name='number' onChange={(e)=>setPhone(e.target.value)}></input>
                </div>
                <div className="form-group col-md-10">
                <label for="inputPassword4">Address</label>
                <textarea placeholder='Enter the address'  className="form-control" value={address} name='address' onChange={(e)=>setAddress(e.target.value)}></textarea>
                </div><br></br>
                <div className="form-group col-md-10">
                <button  className='btn btn-primary'>Submit</button>
                </div>
            </div>
        </form>
    )
}