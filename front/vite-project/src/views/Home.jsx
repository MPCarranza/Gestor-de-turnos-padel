import NavBar from "../components/NavBar";
import PestañasHome from "../components/PestañasHome/PestañasHome";
import { useSelector } from "react-redux";
import styles from "./Home.module.css"

const Home = () => {
    const userData = useSelector((state) => state.userActive);

    return (
        

        <div>
            <div className={styles.saludo}><h1>A jugar {userData.name}</h1></div>
            <PestañasHome/>
        </div>
    )

   
}

export default Home;