import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { EmailJSResponseStatus } from 'emailjs-com';
function SignUp() {
    // email
  

    const [userRegistration , setuserRegistration] = useState({
        PickupLocation: "",
        DropOffLocation: "",
        Date: "",
        Time: "",
        AdditionalRequirements: "",
        Name1: '',
        Phone: "",
        Email: "",
        Flight: "",
        passengers: ""
    })
    const [record , setRecords] = useState([])

    const handleInput=(e)=>{
         const name = e.target.name
         const value = e.target.value
         console.log(name,value)
         setuserRegistration({...userRegistration,[name]:value}) // we use dynamic Array[name] to strore gull name
    }


    const handleSubmit =(e)=>{
        // email
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('gmail', 'template_qypr8sc', e.target, 'ZJeNurKV1gxZPeQb3')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
          };

          
          e.preventDefault();
          const newRecord = {...userRegistration , id: new Date().getTime().toString()} //it keep record of new input
          console.log(newRecord.DropOffLocation)       
          setRecords([newRecord])       
          setuserRegistration({PickupLocation:"", DropOffLocation: "",Time: "",Date: "",AdditionalRequirements: "" ,  Name1: '', Phone: "",  Email: "", Flight: "",passengers: ""})
    }
  return (
    <>
     
          {/* <!-- Modal --> */}
                            
                               <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                     <div className="modal-dialog modal-dialog-centered">
                                       <div className="modal-content">
                                         <div className="modal-header">
                                           <h1 className="modal-title fs-5 confir" id="exampleModalLabel">Confirmation Message</h1>
                                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                         </div>
                                         <div className="modal-body">
                                            <div><p className='thanks'>Thanks for choosing Maxi Taxi !</p></div>
                                               <div className='item'>
                                                    {
                                                      record.map((currElement)=>{
                                                          return(
                                                              <div key={currElement.id}>
                                                                  <p>Pickup location : {currElement.PickupLocation}</p>
                                                                  <p>Drop-off location: {currElement.DropOffLocation}</p>
                                                                  <p>Date : {currElement.Date}</p>                                       
                                                                  <p>Time : {currElement.Time} (IST)</p>
                                                                  <p>Additional requirements : {currElement.AdditionalRequirements}</p>
                                                              </div>
                                                          )
                                                      })
                                     
                                                  }
                                               </div>                                     
                                         </div>
                                         <div className="modal-footer">
                                           <button type="button" className="btn btn-secondary btn btn-dark" data-bs-dismiss="modal">Close</button>                                       
                                         </div>
                                       </div>
                                     </div>
                                 </div>
                             {/* <!-- Modal/ -->   */}
   
    <div className='form' id='booknow'>
      <div className='container'>
        <div ><p className='book'>Book a Taxi:</p></div>
              <form className="row g-3" action='' onSubmit={handleSubmit}>
              <div className="col-md-4">
                  <label htmlFor='name1' className="form-label">Name</label>
                  <input type="text" className="form-control" onChange={handleInput} name='Name1' 
                             value={userRegistration.Name1}
                              id='Name1' placeholder='Name'/>
              </div>
              <div className="col-md-4">
                  <label for="validationDefault02" className="form-label">Phone Number</label>
                  <input type="number" className="form-control" onChange={handleInput} name='Phone' 
                             value={userRegistration.Phone}
                              id='Phone' placeholder='Phone Number' />
              </div>
              <div className="col-md-4">
                  <label for="validationDefaultUsername" className="form-label">Email</label>
                   <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" className="form-control"  onChange={handleInput} name='Email' 
                             value={userRegistration.Email}
                              id='Email' placeholder='Email' aria-describedby="inputGroupPrepend2" />
                  </div>                          
              </div>
              <div className="col-md-4">
                    <label htmlFor='Date' className="form-label">Date</label><br/>
                    <input type='date'onChange={handleInput}  className="form-control" name='Date' 
                    value={userRegistration.Date}
                    id='Date' />
              </div>
              <div className="col-md-4">
                   <label for="validationDefault02" className="form-label">Time</label>
                   <input type='time'onChange={handleInput}  name='Time' className="form-control"
                   value={userRegistration.Time}
                   id='Time'/>
             </div>
             <div className="col-md-4">
                <label for="validationDefault02" className="form-label">Flight Number</label>
                <input type="number" className="form-control" onChange={handleInput} name='Flight' 
                           value={userRegistration.Flight}
                            id='Flight' placeholder='Flight Number (Optional)' />
              </div>
   
             
            <div className="col-md-4">
                <label htmlFor='PickupLocation' className="form-label">Pickup location</label><br/>
                      <input type='text' onChange={handleInput} name='PickupLocation' 
                        value={userRegistration.PickupLocation}  className="form-control"
                         id='Pickup location1' placeholder='Pickup location'/>
            </div>
            
            <div className="col-md-4">
                <label htmlFor='DropOffLocation' className="form-label">Drop-off location</label><br/>
                       <input type='text'onChange={handleInput}  name='DropOffLocation'
                       value={userRegistration.DropOffLocation}  className="form-control"
                        id='DropOffLocation1' placeholder='Drop-off location'/>
            </div>
            <div className="col-md-4">
                <label for="validationDefault02" className="form-label">Number of passengers</label>
                <input type="number" className="form-control" onChange={handleInput} name='passengers' 
                           value={userRegistration.passengers}
                            id='passengers' placeholder='Number of passengers'/>
            </div>
            <div>
                   <label for="validationDefault02" className="form-label">Additional requirements</label>
                   <textarea type='text'onChange={handleInput}  id='AdditionalRequirements' 
                   value={userRegistration.AdditionalRequirements}
                   name='AdditionalRequirements' className="form-control"/>
            </div>
            <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" />
                  <label className="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary btn btn-dark" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                disabled={userRegistration .PickupLocation  === '' || userRegistration .DropOffLocation==='' ||userRegistration.Date === '' 
                || userRegistration.Time === ''  || userRegistration.AdditionalRequirements === ''}>Submit form</button>
            </div>
          
            </form>
      </div>
    </div>
    </>
  )
}

export default SignUp
