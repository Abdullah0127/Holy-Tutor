import React from 'react'
import ellipse from "../assests/Ellipse 499.png"

function Feedback() {
  return (
    <div className='feedback'>
        <div className="feedback-title text-center">
            <h4>Parent’s Feedback</h4>
            <p>Advance in your career with recognized credentials across levels.</p>
        </div>
        <div className="testimonial d-flex justify-content-center mt-5">
          <div className="testimonial-track">

              <div className="testi">
                <img  src={ellipse} alt={ellipse} />
                <div className="review-stars text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
               
              </div>
               <h5>Ahmed’s Father</h5>
                <p>Excellent teaching style. My son enjoys every class and has memorized 5 surahs in just 2 months!</p>
            </div>
            <div className="testi" style={{margin : "-16px 0px"}}>
                <img src={ellipse} alt={ellipse} />
                <div className="review-stars text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
               <h5>Fatima's Father</h5>
                <p>My daughter now reads Quran with proper Tajweed, all thanks to Ustadha Ayesha. Very professional and kind</p>
            </div>
            <div className="testi">
                <img src={ellipse} alt={ellipse} />
                <div className="review-stars text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
               <h5>Ahmed’s Father</h5>
                <p>Excellent teaching style. My son enjoys every class and has memorized 5 surahs in just 2 months!</p>
            </div>

          </div>
           
        </div>
    </div>
  )
}

export default Feedback
