import { Routes, Route } from "react-router-dom";
import { Cards } from "../Components/Card/Card";
import { Form } from "../Components/Form/Form";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/Card" element={<Cards />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  );
};
