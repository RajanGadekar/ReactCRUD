import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
  const param=useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const redi = useNavigate()
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);

  const fetchData = async () => {
      var result = await axios.get(`http://localhost:3001/user/${param.id}`);
      console.log(result)
      setData(result.data);
      setName(result.data.name);
      setEmail(result.data.email);
      setPhone(result.data.phone);
      setAddress(result.data.address);
  }
  const handlesave = async (id) => {
    await axios.put(`http://localhost:3001/user/${id}`,{name:name,email:email,phone:phone,address:address}
    ).then(response=>{
      alert("Updated")
      redi("/list");
    }).catch(error=>{
      alert("Error",error)
    })
  }
  return (
    <>      
        <label>Name</label>
        <input type='text' defaultValue={name} onChange={(e) => setName(e.target.value)}></input><br></br><br></br>
        <label>Email</label>
        <input type='email'   defaultValue={email} onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>
        <label>Phone</label>
        <input type='number'   defaultValue={phone} onChange={(e) => setPhone(e.target.value)}></input><br></br><br></br>
        <label>Address</label>
        <textarea  defaultValue={address} onChange={(e) => setAddress(e.target.value)}></textarea><br></br><br></br>
        <button className='btn btn-primary' onClick={()=>handlesave(data.id)}>Submit</button>
    </>
  )
}
