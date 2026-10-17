import { addDoc, collection, doc, getDoc, getDocs, query, where, type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { db } from "./firebase";
import { useUser } from "./UserContext";

export default function Works() {
    const { id } = useParams();
    const nickname = useUser();
    const [works, setWorks] = useState<DocumentData[]>([]);

    useEffect(() => {
        const getWorks = async () => {
            const q = query(
                collection(db, "works"),
                where("id", "==", id)
            );
            const snapshot = await getDocs(q);
            setWorks(
                snapshot.docs.map(doc => doc.data())
            );
        }
        getWorks();
    }, []);

    const [url,setUrl] = useState("");
    const [detail,setDetail] = useState("");

    const submitWork = async() => {
        await addDoc(
            collection(db,"works"),{
                id: id,
                name: nickname,
                url: url,
                detail :detail
            }
        )
    }

    //001とか
    return (
        <>
            <div className="prose text-xl markdown-content mt-10 w-max-100 w-[80%] mb-10 p-5 pr-10 pl-10 bg-white rounded-xl m-auto">
                <h2>完成品を共有する</h2>
                <input type="text" onChange={(e)=>setUrl(e.target.value)} value={url} placeholder="作品URL" className="border-2 border-gray-200 p-2 rounded-xl w-[92%] block mx-auto m-3" />
                <input type="text" onChange={(e)=>setDetail(e.target.value)} value={detail} placeholder="説明" className="border-2 border-gray-200 p-2 rounded-xl w-[92%] block mx-auto m-3" />
                <button onClick={submitWork} className="bg-red-500  text-white rounded-xl p-1 w-20 ml-7 m-2">共有</button>
            </div>
            <div className="prose text-xl markdown-content mt-10 w-max-100 w-[80%] mb-10 p-5 pr-10 pl-10 bg-white rounded-xl m-auto">
                <h2>完成品を見る</h2>
                {
                    works.map((work, index) => (
                        <div className="bg-slate-50 rounded-xl p-2 m-2">
                            <p>作品URL：<a href={work.url}>{work.url}</a></p>
                            <p>{work.name} 作</p>
                            <p>説明：{work.detail}</p>
                            {
                                nickname === work.name && (
                                <button className="bg-red-500 text-white w-20 rounded-xl ml-7">削除</button>
                                )
                            }
                        </div>
                    ))
                }
                {/* <div className="bg-slate-50 rounded-xl p-2 m-2">
                    <p>作品URL：<a href="https://github.com/repos">https://github.com/repos</a></p>
                    <p>s25059 作</p>
                    <p>説明：あああ</p>
                    <button className="bg-red-500 text-white w-20 rounded-xl ml-7">削除</button>
                </div>
                <div className="bg-slate-50 rounded-xl p-2 m-2">
                    <p>作品URL：<a href="https://github.com/repos">https://github.com/repos</a></p>
                    <p>s25059 作</p>
                    <p>説明：あああ</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-2 m-2">
                    <p>作品URL：<a href="https://github.com/repos">https://github.com/repos</a></p>
                    <p>s25059 作</p>
                    <p>説明：あああ</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-2 m-2">
                    <p>作品URL：<a href="https://github.com/repos">https://github.com/repos</a></p>
                    <p>s25059 作</p>
                    <p>説明：あああ</p>
                </div> */}
            </div>
        </>
    )
}