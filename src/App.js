import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionUploadForm from "./Components/QuestionUploadForm";
import ShowQuizzes from "./Components/ShowQuizzes";
import TakeQuiz from "./Components/TakeQuiz";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route
          exact
          path="/home/QuestionsUpload"
          element={<QuestionUploadForm />}
        ></Route>
        <Route exact path="/home/showQuizzes" element={<ShowQuizzes />}></Route>
        <Route
          exact
          path="/home/showQuizzes/takeQuiz"
          element={<TakeQuiz />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
