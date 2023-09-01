import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const View = () => {

    const [alldata , setAlldata] = useState([]);

    const deleteData = (id) => {
        let ans = alldata.filter((item) => {
            return item.id !== id;
        })
        setAlldata(ans);
        localStorage.setItem('crud',JSON.stringify(ans));
        alert("Delete Data");
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('crud'));
        if (data === null) {
            setAlldata([])
        }else{
            setAlldata(data)
        }
    },[]);
    
    return(
        <>
            <center>
                <h1>View Page</h1>
                <Table border={1} striped bordered hover variant="light" className="container">
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            alldata.map((val) => {
                                const {id, name, des} = val;
                                return(
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{des}</td>
                                        <td><Button variant="outline-danger" onClick={() => deleteData(id)}>Delete</Button> ||
                                        <Link to={`/edit/${id}`}>Edit</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            <Link to="/">Add</Link>
            </center>
        </>
    )
}

export default View;