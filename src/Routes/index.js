import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "../Components/Student";

const index = () => {
  return (
    <Routes>
      <Route path="/student" element={<Student />} />
    </Routes>
  );
};

export default index;
