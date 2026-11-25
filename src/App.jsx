import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Maintestpage from "./pages/Maintextpage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maintestpage/>}/>
          <Route path="test1" element={<Test1/>}/>
          <Route path="test2" element={<Test2/>}/>
          <Route path="test3" element={<Test3/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
