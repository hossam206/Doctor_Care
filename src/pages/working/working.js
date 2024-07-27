// import component
import Workcomp from '../../component/Navbar/Working/Workingcomp';
// import css file 
import './working.css';
// import image 
import circleimg from '../../images/Header/header icons/download.png';
function Working ()
{
    return (
        <div className="work">
            <img src={circleimg}alt=""></img>
            <div className="container">
               <span>Working Process</span>
               <h1>How do we work  ?</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Workcomp blocknum={'01'} blocktitle={'Make Appointmnet'}classname={'work-block'}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Workcomp  blocknum={'02'} blocktitle={'Take Treatment'} 
                         classname={'work-block active'} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Workcomp  blocknum={'03'} blocktitle={'Registration'} classname={'work-block thirdblock'}/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Working;