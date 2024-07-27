import './workingcomp.css';
function Workcomp(props)
{
    return(
     
         <div className= {props.classname}>
             <small>
                 {props.blocknum}
             </small>
             <div className="work-detail">
                 <h1>{props.blocktitle}</h1>
                 <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                 <button className="btn btn-cyan">View More</button>
             </div>
         </div>
        
    )

}
export default Workcomp;