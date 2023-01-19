import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import InputGroup from 'react-bootstrap/InputGroup';
import {useDispatch,useSelector} from 'react-redux';
import { updateUserExercise } from '../features/users';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Lottie from "lottie-react";
import diet from "./diet.json";
import { useLocation } from "react-router-dom"
export default function EditUserData() {
const location = useLocation()
const data = location.state?.data;
  console.log(data.name)
    return (
        
        
        <div className="ContainerHead"style={{padding: "100px",display:"inline-flex"}}>
          
        <div className="FormGrid">
        
         <FormLayout props={data}/>
         </div>
        <div className="ImageGrid">
        <Lottie animationData={diet} loop={true} />
        </div>
        </div>
        
    )}

    const FormLayout=(props)=>{
        let id=props.props._id;
      const [Name,setName]=useState("");
      const [Desc,setDescription]=useState("");
      const [ActTyp,setActTyp]=useState("");
      const [Duration,setDuration]=useState("");
      const [Datetxt,setDatetxt]=useState("");
     useEffect(()=>{
        setName(props.props.name)
        setDescription(props.props.description)
        setActTyp(props.props.activityType)
        setDuration(props.props.duration)
        setDatetxt(props.props.date)
       
     },[])
      const dispatch = useDispatch();
      const handleChange=(e)=>{
        e.preventDefault();
        dispatch(updateUserExercise({id,Name,Desc,ActTyp,Duration,Datetxt}))  
        window.location = '/'; 
    }

        return(
            <>
            <div className="FormGridChild">
            <h2>Let's Track your Daily Exercise</h2>
         <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
          required
          value={Name}
          onChange={(e)=>setName(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" value={Desc}
          onChange={(e)=>setDescription(e.target.value)} />
      </InputGroup>
     
     
      <InputGroup className="mb-3">
      <InputGroup.Text>Activity Type</InputGroup.Text>
      <Form.Select aria-label="Default select example" value={ActTyp}
          onChange={(e)=>setActTyp(e.target.value)}> 
      <option>Select</option>
      <option value="Walk">Walk</option>
      <option value="Run">Run</option>
      <option value="Swim">Swim</option>
      <option value="Hike">Hike</option>
      <option value="BicycleRide">Bicycle Ride</option>
    </Form.Select>
      </InputGroup>
     
     
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Duration</InputGroup.Text>
        <Form.Control
          placeholder="Duration in mins"
          aria-label="Duration"
          aria-describedby="basic-addon1"
          value={Duration}
          onChange={(e)=>setDuration(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Date</InputGroup.Text>
      <Form.Group controlId="dob">

<Form.Control type="date" name="date" placeholder="Date"  value={Datetxt}
          onChange={(e)=>setDatetxt(e.target.value)}/>

</Form.Group>
</InputGroup>
<Button type="submit" onClick={handleChange}>Update Record</Button>
      
                </div>
                </>
        )

    }