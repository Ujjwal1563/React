import {useState, useEffect}from "react"
const useProfileData=(profileData)=>{
        const [profileData , setProfileData]= useState("Dummy");

        useEffect(()=>{
            fetchData();
        },[])
        const fetchData=async ()=>{
            const data = await fetch("https://api.github.com/users/Ujjwal1563");
            const json = await data.json();
            setProfileData(json);
        }
    return profileData; 
}

export default useProfileData