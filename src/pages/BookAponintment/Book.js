// import images
import mobileimage from '../../images/Book Appointment/mobile.f82d7322.png'
import personimage from '../../images/Book Appointment/women.png'
import locationimg from '../../images/Book Appointment/download (1).png';
import gearimg from '../../images/Book Appointment/download (2).png';
import circleimg from '../../images/Book Appointment/download.png';
// import css file 
import './Book.css';
function Book()
{
    return(
     <div className="Book-Appointment">
         <div className="container">
             <div className="row">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                    <div className="Bookform">
                        <div className="formdetail">
                            <h1>Book Appointment</h1>
                             <select>
                                 <option>Selecty Department</option>
                                 <option>One </option>
                                 <option>Two</option>
                                 <option>Three</option>
                             </select>

                             <select>
                                 <option>Select Doctor</option>
                                 <option>One </option>
                                 <option>Two</option>
                                 <option>Three</option>
                             </select>

                             <input type="text" placeholder="Your Name"></input>
                             <input type="number" placeholder="0"></input>
                             <input type="date"></input>
                             <button className="btn btn-secondary">Appointment Now</button>
                        </div>
                    </div> 
                  
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                     <div className="bookimg">
                         <div className="iconimage">
                             <img src={locationimg}alt=""></img>
                             <img src={gearimg}alt=""></img>
                             <img src={circleimg}alt=""></img>
                         </div>
                        <img src={mobileimage}alt=""></img>
                        <img src={personimage}alt=""className="woman"></img>
                     </div>
                     </div>
             </div>
         </div>
     </div>
    )
}
export default Book;