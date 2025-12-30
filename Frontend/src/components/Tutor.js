import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Tutor(props) {
  const { title, description, featuredimage, review, languages ,courses } = props;

  const slug = props.title.toLowerCase().replace(/\s+/g, "-");
  return (
    <motion.div className="Tutor"    initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }} >
      <div
        className="card text-start"
        style={{
          width: "302px",

          padding: "0px",
          border: "none",
        }}
      >
        <div className="features-img">
          <img
            src={featuredimage}
            alt="featuredimage shows issue"
            style={{
              width: "302px",
              height: "150px",
              borderRadius: "10px 10px 0px 0px",
              objectFit: "cover"
            }}
          />
        </div>
        
        <div
          className="main-tutor"
          style={{ backgroundColor: "white", padding: "18px" }}
        >
            <div className="insti-location d-flex align-items-center gap-2 ">
              <div className="review-stars text-warning">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
              <p style={{ fontSize: "14px" }}>{review}</p>
            </div>
          <div
            className="card-body "
           
          >
            <h5
              className="card-title"
              style={{
                fontFamily: "Product Sans",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <Link to={`/tutor/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              {title}
              </Link>
              
            </h5>
            
            <p className="card-text">{description}</p>
            <div className="custom-fields mt-3 ">
               <div className="d-flex align-items-center gap-2">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <p style={{fontSize: "14px"}}>{courses}</p>
          </div>
               <div className="d-flex align-items-center gap-2">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <p style={{fontSize: "14px"}}>{languages}</p>
          </div>
           <div className="tutor-btns d-flex justify-content-between mt-3 ">
              <div className="d-flex align-items-center gap-2">
                <button className="btn" style={{color: "black", backgroundColor: "white", border: "1px solid black"}} ><a href="/">Preview</a></button>
              </div>
              <div className="d-flex align-items-center gap-2">
               <button className="btn" ><a href="/" style={{color: "white"}}>Free Trail</a></button>
              </div>
            </div>
          
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Tutor;
