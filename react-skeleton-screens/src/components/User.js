import { useEffect, useState } from "react";

const User = () => {

    const [profile, setProfile] = useState(null)

    // useEffect(()=>{
    //     setTimeout( async()=>{
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    //         const data = res.json()
    //         setProfile(data)
    //     }, 5000)
    // })

    useEffect(() => {
    const timer = setTimeout(async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await res.json();
            setProfile(data);
        } catch (err) {
            console.error("Failed to fetch profile:", err);
        }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="user">
            <h2>User Details</h2>
            {profile && (
                <div className="profile">
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            )}

            {!profile && (
                <div>Loading ...</div>
            )}
        </div>
     );
}
 
export default User;