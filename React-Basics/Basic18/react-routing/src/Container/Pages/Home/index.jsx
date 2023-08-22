import { useNavigate} from 'react-router-dom';

const Home=()=>{
    const navigate = useNavigate();
    return (
        <>
        <h1> Click Button Below to Search Job!!</h1>
        <button onClick={()=>navigate('/search-job')}>Search</button>
        </>        
    )
}

export default Home;