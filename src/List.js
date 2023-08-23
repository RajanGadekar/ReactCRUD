import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './App.css';

export default function List() {
    const [data, setData] = useState([]);
    const [useremail, setUseremail] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            // https://crud-operation-5tao.onrender.com
            // http://localhost:3001/user
            const response = await axios.get(`https://crud-operation-5tao.onrender.com/user`);
            setData(response.data);
            // To Store all the emails in one object in key value pair i.e {email:'raj@gmail.com'}
            const emails = response.data.map(({ email }) => ({ email }))
            setUseremail(emails)

        } catch (error) {
            Swal.fire(
                'Opps!',
                'Something went wrong!',
                'error'
            )
        }
    }
    const handledelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`https://crud-operation-5tao.onrender.com/user/${id}`);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Data Deleted successfully'
                })
                fetchData();
            } catch (error) {
                console.error('Delete request failed:', error);
                Swal.fire(
                    'Error!',
                    'An error occurred while deleting the file.',
                    'error'
                );
            }
        }
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        // const query = e.toLowerCase();
        // const filteredData = emails.filter(ele =>
        //     ele.name.toLowerCase().includes(query)
        // );
        // setData(filteredData);
        if (!name || !email || !phone || !address) {
            alert('Error')
        }
        else {
            await axios.post(`https://crud-operation-5tao.onrender.com/user`, { id: '', name: name, email: email, phone: phone, address: address });
            fetchData();
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Data Added successfully'
            })
        }
    }
    const empty = () => {
        document.getElementById('warning').style.display = 'none';
        document.getElementById('submit').style.display = 'block';
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
    }
    const [uid, setId] = useState([]);
    // const [names, setNames] = useState([]);
    // const [emails, setEmails] = useState([]);
    // const [phones, setPhones] = useState([]);
    // const [addresss, setAddresss] = useState([]);

    // Setnames
    const fetchDatas = async (id) => {
        document.getElementById('warning').style.display = 'block';
        document.getElementById('submit').style.display = 'none';
        var result = await axios.get(`https://crud-operation-5tao.onrender.com/user/${id}`);
        console.log(result.data);
        setId(result.data.id);
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setAddress(result.data.address);

    }
    const handlesave = async (id) => {

        await axios.put(`https://crud-operation-5tao.onrender.com/user/${id}`, { name: name, email: email, phone: phone, address: address }
        ).then(response => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Data Updated successfully'
            })
            fetchData();
        }).catch(error => {
            Swal.fire(
                'Opps!',
                'Something went wrong!',
                'error'
            )
        })
    }

    return (
        // <div className='col-md-10 mx-auto mt-5'>
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th><button type="button" className="btn btn-primary" onClick={empty} data-bs-toggle="modal" data-bs-target="#myModal">ADD</button></th>
                    
                    </tr>
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Please Add the Data</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handlesubmit}>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="inputEmail4">Name</label>
                                                <input type='text' className="form-control" placeholder='Enter the name' value={name} name='name' onChange={(e) => setName(e.target.value)}></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword4">Email</label>
                                                <input type='email' className="form-control" placeholder='Enter the email' value={email} name='email' onChange={(e) => setEmail(e.target.value)}></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword4">Phone</label>
                                                <input type='number' className="form-control" placeholder='Enter the number' value={phone} name='number' onChange={(e) => setPhone(e.target.value)}></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword4">Address</label>
                                                <textarea placeholder='Enter the address' className="form-control" value={address} name='address' onChange={(e) => setAddress(e.target.value)}></textarea>
                                            </div><br></br>
                                            <div className="d-flex">
                                                <button className='btn btn-primary' id='submit' data-bs-dismiss="modal">Submit</button> <a id='warning' className='btn btn-primary' data-bs-dismiss="modal" onClick={() => handlesave(uid)}>Update</a> <button type="button" className="btn btn-danger" style={{ marginLeft: '20px' }} data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="modal" id="myModal1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit The Data</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    names emails phones addresss
                                    <label>Name</label>
                                    <input type='text' className="form-control" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                                    <label>Email</label>
                                    <input type='email' className="form-control" defaultValue={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    <label>Phone</label>
                                    <input type='number' className="form-control" defaultValue={phone} onChange={(e) => setPhone(e.target.value)}></input>
                                    <label>Address</label>
                                    <textarea defaultValue={address} className="form-control" onChange={(e) => setAddress(e.target.value)}></textarea>
                                    <button className='btn btn-primary m-3' data-bs-dismiss="modal" onClick={() => handlesave(uid)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </thead>
                <tbody>
                    {data.map((val, i) => {
                        return (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td>{val.address}</td>
                                <td><button className='btn btn-danger' onClick={(event) => handledelete(val.id)}>DELETE</button>   <button type="button" className="btn btn-primary" onClick={(e) => fetchDatas(val.id)} data-bs-toggle="modal" data-bs-target="#myModal">EDIT</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}