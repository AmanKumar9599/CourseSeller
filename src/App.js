import './App.css';
import { apiUrl,filterData } from './data';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {useState,useEffect} from 'react';
import {toast} from 'react-toastify'
import Spinner from './Spinner';

function App() {
const [courses,setCourses]=useState(null);
const [loading,setLoading]=useState(true);
const [cateogary,setCateogary]=useState("All");
  

useEffect(()=>{
      const fetchData = async()=>{
        setLoading(true);
        try{
          const res=await fetch(apiUrl);
          const output=await res.json();
          setCourses(output.data);
          // console.log(output);
        }
        catch(error){
          toast.error('something went wrong');
        }
        setLoading(false);
      }
    fetchData();
  },[]);

  return (
    <div className='container' >
      <h1>Top Courses</h1>
      <Filter filterData={filterData}
      cateogary={cateogary}
      setCateogary={setCateogary}
      
      />
      <div>
{
      loading?(<Spinner/>):(<Cards courses={courses} cateogary={cateogary}/>)
}
      </div>
    </div>
  );
}

export default App;
