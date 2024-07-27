// import image
import logoimg from '../../../../images/Logo/download.png';
// import css file
import './Login.css';
function Login ()
{
    return (
        <div className="container">
                <div className="logindiv ">
                    <div className="logincontent text-center">
                    <div className="logodiv">
                       <img src={logoimg} alt=""></img>
                    </div>
                    <div className="inputfields">
                     <input type="text" placeholder=" UserName "></input>
                     <input type="password" placeholder=" Password "></input>
                    </div>
                    <span>Forgot password</span>
                    <span>Create new account</span>
                    <button>Register</button>
                    </div>
            </div>
        </div>
    )
}
export default Login;