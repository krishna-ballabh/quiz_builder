/* Show Quizzes page */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const ShowQuizzes = () => {
  const location = useLocation();

  const keyArr = Object.keys(localStorage);

  const user = location.state.user;

  const [deleted, setDeleted] = useState(false);

  return (
    <div className="bg-light">
      <h3 className="text-center mt-4  text-bg-info ">Your Quizzes</h3>
      {keyArr.map((obj) => {
        if (obj.includes(user)) {
          const arr = JSON.parse(localStorage.getItem(obj));
          const randomNumber = arr[0].randomKey;
          const title = obj.substring(user.length + randomNumber.length);

          return (
            <div className="container mt-4 ">
              <div
                className="card shadow-lg border-5 border-light bg-warning "
                style={{ width: "20rem", height: "18rem" }}
              >
                <div className="card-body">
                  <h3 className="card-title fw-bold text-center">{title}</h3>
                  <div className="d-grid mt-4 ">
                    <button
                      className="btn btn-primary mt-4 mb-3"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `localhost:3000/home/showQuizzes/takeQuiz/${randomNumber}`
                        );
                        alert("Copied to ClipBoard");
                      }}
                    >
                      Copy Quiz Link
                    </button>
                    <button className="btn btn-success">
                      <Link
                        to={`/home/showQuizzes/takeQuiz/${randomNumber}`}
                        className="text-white text-decoration-none"
                      >
                        Take Quiz
                      </Link>
                    </button>
                    <button
                      className="btn btn-danger mt-3"
                      onClick={() => {
                        localStorage.removeItem(randomNumber + user + title);
                        setDeleted(!deleted);
                      }}
                    >
                      Delete Quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
        }
      })}
    </div>
  );
};

export default ShowQuizzes;
