import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router";


export default function HtmlMenu() {
  return (
    <div className="w-[85%] max-w-180 m-auto bg-white p-2 rounded-xl shadow-xs">

        <div className="bg-yellow-400 rounded-xl p-2 m-2 shadow-xs text-center">
          <h1 className="text-3xl font-bold text-white m-2">HTML講座</h1>
        </div>
        <div className="flex">
          <h1 className="bg-yellow-100 ml-8 m-5 w-20 rounded-xl pb-1 text-center text-yellow-500 font-bold text-2xl">Day1</h1>
          <h1 className="mt-6 text-xl">ああああ</h1>
        </div>
        <Link to='/html/1'>
        <div className="border-yellow-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-yellow-500">1.HTMLの勉強を始めよう</h1>
          <p className="ml-5 m-1">HTMLとは何かについてしゃべります</p>
        </div>
        </Link >
        <Link to='/html/2'>
        <div className="border-yellow-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-yellow-500">2.HTMLの勉強を始めよう</h1>
          <p className="ml-5 m-1">HTMLとは何かについてしゃべります</p>
        </div>
        </Link>
        <div className="bg-yellow-400 rounded-xl p-2 m-2 shadow-xs w-[90%] m-auto mb-5 flex">
          <h1 className="text-3xl ml-5 m-1 text-[20px] font-bold text-yellow-400 bg-white w-20 text-center rounded-xl p-2">課題</h1>
          <h1 className="ml-3 font-bold mt-1 text-white text-[25px]">自己紹介サイトをつくろう！</h1>
          <p className="ml-5 m-1 text-white"></p>
        </div>

    </div>
  )
}