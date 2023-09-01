import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Add = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        des: ''
    })
    const [alldata, setAlldata] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input, [name]: value
        })
    }

    const handleSubmit = () => {
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: input.name,
            des: input.des
        }
        let data = [...alldata, obj];
        localStorage.setItem('crud', JSON.stringify(data));
        setAlldata(data);
        setInput({
            name: '',
            des: ''
        })
        alert("Record Successfully insert");
        navigate('/view');
    }

    useEffect(() => {
        let re = JSON.parse(localStorage.getItem('crud'));
        if (re === null) {
            setAlldata([]);
        } else {
            setAlldata(re);
        }
    }, [])
    return (
        <>
            <center>
                <h1>Add Record</h1>
                <table border={1} className="container">
                    <tbody>
                        <tr>
                            {/* <td>Name :-</td> */}
                            <td><Form.Control  variant="primary" type="text" name="des" onChange={handleChange} value={input.des} placeholder="To-Do Title" /></td>
                            <td><Form.Control  variant="primary" type="text" name="name" onChange={handleChange} value={input.name} placeholder="Description" /></td>
                            <Button type="submit" variant="outline-success" onClick={() => handleSubmit()} >Submit form</Button>
                        </tr>
                    </tbody>
                </table>
                <Link to="/view" >View</Link>
            </center>
        </>
    )
}

export default Add;