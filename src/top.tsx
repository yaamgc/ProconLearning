import {
  Link,
} from "react-router";


export default function Top() {
  return (
    <div className="w-[90%] max-w-230 m-auto text-center">
    <title>PROGYM | TOP</title>

      <div className="grid grid-cols-3">
        <Link to='/aboutme'>
        <div className="grid-item bg-yellow-400 rounded-xl p-2 m-2">
          <h1 className="bg-black rounded-[7px] text-yellow-400 font-bold text-4xl h-25 pt-6">Hello!</h1>
          <h1 className="text-2xl font-bold text-white m-2">自己紹介サイトを作ろう！</h1>
        </div>
        </Link>
        <Link to='/github'>
        <div className="grid-item bg-green-400 rounded-xl p-2 m-2">
          <h1 className="bg-black rounded-[7px] text-green-400 font-bold text-4xl h-25 pt-6">GitHub</h1>
          <h1 className="text-2xl font-bold text-white m-2">GitHubの基本操作を学ぼう！</h1>
        </div>
        </Link>
      </div>
    </div>
  )
}