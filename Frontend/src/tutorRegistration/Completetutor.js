import { useNavigate } from "react-router-dom";


function Completetutor() {
  const navigate = useNavigate();

  const onclick = (e) =>{
    e.preventDefault();
    navigate('/')
  }
  return (
    <div className="completeform">
     <div className="container" style={{width: "520px", textAlign: "center"}}>
       <i className="bi bi-calendar-check" style={{ fontSize: "xxx-large"}}></i>
      <h3>You're all set!</h3>
      <p>
        Your profile is ready for review. Our team will verify your information
        and approve your tutor profile soon. You’ll be notified once your
        account is live.
      </p>
      <div className="btn">
        <button onClick={onclick}>Back to home</button>
      </div>
     </div>
    </div>
  );
}

export default Completetutor;
