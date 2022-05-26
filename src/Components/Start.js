import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div
      className="card shadow-lg border-5 border-light"
      style={{ width: "20rem", height: "10rem" }}
    >
      <div className="card-text">
        <div className="card-body">
          <h1 className="card-title text-center">Start the quiz</h1>
          <p className="text-center">Good luck!</p>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-block btn-lg "
              onClick={onQuizStart}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
