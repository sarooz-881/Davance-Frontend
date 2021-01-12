import React ,{ useState } from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "../css/main.css";

function Roomtoggle() {
    const [isOpen, setIsOpen] = useState(false);  
    const toggle = () => setIsOpen(!isOpen);
    return (<div className="roomtoggle">
               <div className="guest">
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
     <div className="row">
       <div className="col-sm-4"> <i className="material-icons">people_outline</i></div>
       <div className="col-sm-4"> <div className="sr"><div className="row">
                      <div className="sm-4">
                        <span>1</span>
                      </div>
                      <div className="sm-4 ml-2">
                        <p>Adult</p>
                      </div>
         </div>
         <div className="row fon">
                      <div className="sm-4">
                        <span>1</span>
                      </div>
                      <div className="sm-4 ml-2">
                        <p>Room</p>
                      </div>
         </div>
         </div>
         
         </div>
         <div className="col-sm-4 down"><i className='fas fa-chevron-down'></i></div>
     </div>
     
       </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
         <div className="row">
           <div className="md-4 roo"><span className="ml-3 font-weight-bold">Room</span></div>
           <div className="md-4" style={{    marginLeft: '-9px'}}><input type="submit" value="-" className="minus"/>
           <span className="ml-3 counter">1</span>
           <input type="submit" value="+" className="plus"/>
            </div>
         </div>
         <div className="row mt-4">
           <div className="md-4 roo mr-2"><span className="ml-3 font-weight-bold">Adult</span></div>
           <div className="md-4" style={{    marginLeft: '-9px'}}><input type="submit" value="-" className="minus"/>
           <span className="ml-3 counter">1</span>
           <input type="submit" value="+" className="plus"/>
            </div>
         </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
                
    </div>)}
    export default Roomtoggle;