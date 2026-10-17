import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "./firebase";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = async() => {
        try{
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
        } catch(error){
            console.error(error);
            alert("login failed");
        }
    }

    return(
        <>
        <h1>loginしろ</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type="email" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button onClick={login}>login</button>
        </>
    )
}