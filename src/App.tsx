import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { auth } from "./firebase";
import Login from "./Login";

export default function App() {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
    }, [])
    const logout = async () => {
        await signOut(auth);
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!currentUser) {
        return <Login />;
    }
    return (
        <div className='bg-red-600 text-center'>
            <Link to='/'><p className='text-4xl text-white pt-3 font-bold mb-2'>PROGYM</p></Link>
            <p className='text-2xl text-white font-bold pb-4'>プロコンゼミ新入生教育用サイト（仮）</p>
            <div className="flex justify-center bg-red-700 text-white font-bold p-1 mb-2">
            <p>{currentUser.uid}ようこそ！</p>
            <button onClick={logout} className="ml-2 bg-red-800 pl-2 pr-2 rounded-xl">logout</button>
            </div>

        </div>
    )
}