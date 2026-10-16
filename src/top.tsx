import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router";


export default function Top() {
  return (
    <div className="w-[80%] max-w-230 m-auto text-center">

      <div className="grid grid-cols-3">
        <Link to='/menu'>
        <div className="grid-item bg-yellow-400 rounded-xl p-2 m-2">
          <h1 className="bg-black rounded-[7px] text-yellow-400 font-bold text-4xl h-25 pt-6">&lt;h1&gt;</h1>
          <h1 className="text-3xl font-bold text-white m-2">HTML講座</h1>
        </div>
        </Link>
        <div className="grid-item bg-blue-400 rounded-xl p-2 m-2">
          <h1 className="bg-black rounded-[7px] text-blue-400 font-bold text-4xl h-25 pt-6">color:</h1>
          <h1 className="text-3xl font-bold text-white m-2">CSS講座</h1>
        </div>
        <div className="grid-item bg-orange-400 rounded-xl p-2 m-2">
          <h1 className="bg-black rounded-[7px] text-orange-400 font-bold text-4xl h-25 pt-6">const</h1>
          <h1 className="text-3xl font-bold text-white m-2">JS/TS講座</h1>
        </div>
      </div>
    </div>
  )
}