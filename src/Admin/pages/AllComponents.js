import React,{ useState , useEffect } from "react";
const AllComponents = () =>
{
    const [data , setData] = useState([])

    useEffect(()=>{
        fetchData();
       

    },[])

    const fetchData = () =>
    {
        fetch('http://192.168.1.33/htmlComponentappapi/index.php/api/components?X-API-KEY=testapi@2023'
        ).then((res)=>res.json()).then((result)=>setData(result)).catch((error)=>console.error(error))
    }

    console.log(data)
    return (<div>
               <h2 className="text-center my-5">All components</h2>
            </div>)
}
export default AllComponents