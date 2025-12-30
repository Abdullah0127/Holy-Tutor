import React from 'react'
import { InstitutionData } from './data'
import Institution from "../components/Institution";

function Institutesection() {
  return (
    <div className='institutesection'>
       <div className="componenet">
        <div className="inti-title">
          <h4>Explore By Institution</h4>
          <p style={{ marginBottom: "40px" }}>
            Learn Quran & Islamic Knowledge Online with Verified Tutors
          </p>
        </div>
        <div className="institution-component">
          {InstitutionData.map((institute, Institutekey) => (
            <Institution
              key={Institutekey}
              title={institute.title}
              description={institute.description}
              featuredimage={institute.featuredimage}
              location={institute.location}
              smallImg={institute.smallImg}
            />
          ))}
        </div>
        <div className="institute-btn " style={{ marginTop: "40px" }}>
          <button
            type="button"
            className="btn "
            style={{
              backgroundColor: "#1C1B4B",
              color: "white",
              padding: "15px 30px",
            }}
          >
            Explore Institutions
          </button>
        </div>
      </div>
    </div>
  )
}

export default Institutesection
