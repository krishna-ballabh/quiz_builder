import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const logout = () => {
    sessionStorage.removeItem("userInfo");
    navigate("/login");
    setIsLogin(false);
  };
  return (
    <>
      {!isLogin ? (
        navigate("/login")
      ) : (
        <div
          className="bg-image bg-co"
          style={{
            backgroundImage:
              "url('https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg')",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <button className="btn btn-success" onClick={logout}>
            Logout
          </button>
          <div className="row">
            <div className="col-sm-4 "></div>
            <div
              className="col-sm-4 bg-white rounded"
              style={{ height: "70vh", width: "25vw", marginTop: "4vw" }}
            >
              <div className="fw-bold fs-3 text-center">
                Welcome to Quiz Creator
              </div>
              <div
                className="d-flex flex-column justify-content-center "
                style={{ marginTop: "35vh" }}
              >
                <button className="btn btn-primary">
                  <Link
                    to={`/home/QuestionsUpload`}
                    state={{ user: location.state.email }}
                  >
                    <span className="text-white ">Create Quiz</span>
                  </Link>
                </button>
                <br />
                <button className="btn btn-primary text-center">
                  <Link
                    to={`/home/showQuizzes`}
                    state={{ user: location.state.email }}
                  >
                    <span className="text-white">Show my Quizzes</span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
