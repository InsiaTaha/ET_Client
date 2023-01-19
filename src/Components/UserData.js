import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import InputGroup from 'react-bootstrap/InputGroup';
import {useDispatch,useSelector} from 'react-redux';
import { addUserExercise } from '../features/users';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Lottie from "lottie-react";
import diet from "./diet.json";
export default function UserData() {

    return (
        
        <div className="ContainerHead"style={{padding: "100px",display:"inline-flex"}}>
          
        <div className="FormGrid">
        
         <FormLayout/>
         </div>
        <div className="ImageGrid">
        <Lottie animationData={diet} loop={true} />
        </div>
        </div>
        
    )}

    const FormLayout=()=>{


      const [Name,setName]=useState("");
      const [Desc,setDescription]=useState("");
      const [ActTyp,setActTyp]=useState("");
      const [Duration,setDuration]=useState("");
      const [Datetxt,setDatetxt]=useState("");
      const [errors,setErrors]=useState({
          Name:"",
          ActType:"",
          Duration:"",
          Date:""
        }
      
      )
      let formIsValid=true;
      const dispatch = useDispatch();
      const handleChange=(e)=>{
        e.preventDefault();
        validateInputs();
        console.log(errors)
        if(formIsValid === true)
        {
       
        dispatch(addUserExercise({Name,Desc,ActTyp,Duration,Datetxt}))  
        window.location = '/'; 
        }
    }

    const validateInputs=(()=>{
      
      if (Name === "") {
        formIsValid = false;
        setErrors((errors) => ({
          ...errors,Name:"*Cannot be empty"}
          ))
      }
      else{
        setErrors((errors) => ({
          ...errors,Name:""}
          ))

      }
      if (ActTyp === "") {
        formIsValid = false;
        setErrors((errors) => ({
          ...errors,ActType:"*Select a Value"}
          ))
      }
      else{
        setErrors((errors) => ({
          ...errors,ActType:""}
          ))

      }
      if (Duration === "") {
        formIsValid = false;
        setErrors((errors) => ({
          ...errors,Duration:"*Cannot be empty"}
          ))
      }
      else{
        setErrors((errors) => ({
          ...errors,Duration:""}
          ))

      }
      if (Datetxt === "") {
        formIsValid = false;
        setErrors((errors) => ({
          ...errors,Date:"*Cannot be empty"}
          ))
      }
      else{
        setErrors((errors) => ({
          ...errors,Date:""}
          ))

      }
    })

        return(
            <>
            <div className="FormGridChild">
            <h2>Let's Track your Daily Exercise</h2>
            <div className='Validation'>
         <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          id="validationCustomUsername" 
          aria-label="Name"
          aria-describedby="basic-addon1"
          required
          value={Name}
          onChange={(e)=>setName(e.target.value)}
        />
         
      </InputGroup>
      </div>
     <div><span style={{ color: "red" }}>{errors.Name}</span></div>
     <div className='Validation'>
      <InputGroup className="mb-3">
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" value={Desc}
          onChange={(e)=>setDescription(e.target.value)} 
          required/>
      </InputGroup>
      </div>
      <div></div>
      
      
      <InputGroup className="mb-3">
      <div className='Validation'>
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
    </div>
    <div>
      <span style={{ color: "red" }}>{errors.ActType}</span></div>
    </InputGroup>
    
      
      <InputGroup className="mb-3">
      <div className='Validation'>
        <InputGroup.Text id="basic-addon1">Duration</InputGroup.Text>
        <Form.Control
          placeholder="Duration in mins"
          aria-label="Duration"
          aria-describedby="basic-addon1"
          value={Duration}
          onChange={(e)=>setDuration(e.target.value)}
          style={{width:"70%"}}
        />
    </div>
      <div>   <span style={{ color: "red" }}>{errors.Duration}</span></div>
     
      </InputGroup>
      
     
      <InputGroup className="mb-3">
      <div className='Validation'>
        <InputGroup.Text id="basic-addon1">Date</InputGroup.Text>
      <Form.Group controlId="d">
        <Form.Control type="date" name="date" placeholder="Date"  value={Datetxt}
          onChange={(e)=>setDatetxt(e.target.value)}/>
          
          </Form.Group>
          </div>
          <div><span style={{ color: "red" }}>{errors.Date}</span></div>
          </InputGroup>
          
        
          <div className='ValidationBtn'>
          <Button type="submit" onClick={handleChange}>Add Record</Button>
          </div>
          <div></div>
      
                </div>
                </>
        )

    }