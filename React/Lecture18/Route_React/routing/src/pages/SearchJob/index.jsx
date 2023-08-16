import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../../App.css";

const SearchJob = () => {
  const navigate = useNavigate();
  const [allJob, setAllJob] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const jobIdHandler=()=>{
    console.log("hii");
  }

  useEffect(() => {
    fetch("//hacker-news.firebaseio.com/v0/jobstories.json")
      .then((res) => res.json())
      .then((resJson) => setAllJob(resJson), setIsloading(false))
      .catch((e) => {
        navigate("SearchJob");
      });
  }, []);
  return (
    <>
      <h1>Search Job</h1>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <h3>
          {allJob.map((res) => (
            <p className="job-id" onClick={jobIdHandler}>{res}</p>
          ))}
        </h3>
      )}
    </>
  );
};


export default SearchJob;
