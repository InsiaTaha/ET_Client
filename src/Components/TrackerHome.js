import { useEffect ,useState} from "react";
import "./Navbar.css";
import UserData from "./UserData";
import EditUserData from "./EditUserData"
import { BrowserRouter , Route, Routes,Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../Images/profile.png'
import {useDispatch, useSelector} from 'react-redux';
import { getUserExercise ,deleuserExercise} from "../features/users"; 
import EditButton from '../Images/edit.png'
import DeleteButton from '../Images/delete.png'


export default function Header() {

    return (
        <BrowserRouter>
         <div className="Nav">
            
         <div className="navbar">
            <div className="HeaderTitle">
         <h2> Exercise Tracker</h2>
         </div>
              <ul className="nav-links">
             
              <li>
                  <Link to="/">Home</Link>
                </li>
                   <li>
                   <Link to="/UserData">Tracker</Link>
                 </li>
            
              </ul>
        </div>

            <Routes>
            <Route index element={<TrackerCardComp/>} />
            <Route path="/UserData" element={<UserData/>}/>
            <Route path="/EditUserData" element={<EditUserData/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    )}


const TrackerCardComp=()=>{
 
    

    return (
        <div className="ContainerHead">
        <Container className="container">
          <h1>Details of Exercise</h1>
          <Row md={4}>
            <CardLayout/>
          </Row>
        </Container>
        </div>
      );
  
}


const CardLayout=()=>{
  let ex = useSelector((state)=>state.user.exerciseLog)
  const dispatch=useDispatch()

  const [Data,setData]=useState(ex);
  useEffect(()=>{
    dispatch(getUserExercise())
  },[ex])


  const deleteItems = (CardId,e) => { 
    e.preventDefault();
    dispatch(deleuserExercise({id:CardId}));
}

 
    return(
      
    <>
     {ex.data?.map((v,index) => (
     
     <Col className="col" key={index}>
<Card>
<Card.Img variant="top" className="imageProfile" src={profile}/>
<Card.Body>
<Card.Title>Name:{v.name}</Card.Title>
<Card.Text>
Description:{v.description}
</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush" >
<ListGroup.Item>Activity Type:{v.activityType}</ListGroup.Item>
<ListGroup.Item>Duration:{v.duration}</ListGroup.Item>
<ListGroup.Item>Date:{v.date.split("-").reverse().join("-")}</ListGroup.Item>
</ListGroup>
<Card.Body>
<img src={DeleteButton} style={{width:"20px", height:"20px"}} onClick={(event)=>deleteItems(v._id,event)}/>
<Link to="/EditUserData" state={{ data: v }}><img src={EditButton} style={{width:"20px", height:"20px"}}/></Link>
</Card.Body>
</Card> </Col>

   ))}
    </>
   
    )

}