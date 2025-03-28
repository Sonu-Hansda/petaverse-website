import React from "react";

export default function PetCard(props) {
  return (
    <div className="shadow p-3 mx-2">
      <img
        src={props.petimg}
        alt="Pet"
        className="pt-3 ml-2 mr-2"
        style={{ height: "200px", width: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title mt-2">{props.petName}</h5>
        <p className="card-text">{props.petDescription}</p>
        <a href="#" className="btn btn-primary w-100">
          Adopt
        </a>
      </div>
    </div>
  );
}
