import { useNavigate } from 'react-router-dom';
const Home =()=>{
    const navigate = useNavigate();
    return (
        <>
        <h1>Job Finder App</h1>
        <p>We Help Students To Search For Active Jobs</p>
        <p>Click on Search Button To Search for active jobs:</p>
        <button onClick={() => navigate('SearchJob')}>Search</button>
        </>
    )

}

export default Home;