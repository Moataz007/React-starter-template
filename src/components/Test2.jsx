import { Link } from "react-router-dom";

export default function Test2() {
  return (
    <>
        <div className="flex justify-center items-center h-dvh gap-5 text-center">
        <Link to="/test1" className="bg-amber-500 p-3 rounded-2xl cursor-pointer hover:bg-violet-600">page1</Link>
          <Link to="/test2" className="bg-amber-800 p-3 rounded-2xl cursor-pointer hover:bg-violet-600 w-20 h-20">page2</Link>
          <Link to="/test3" className="bg-blue-800 p-3 rounded-2xl cursor-pointer hover:bg-violet-600">page3</Link>
          
        </div>
    </>
  )
}
