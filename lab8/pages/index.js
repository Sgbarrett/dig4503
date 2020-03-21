
import NameSearch from "../components/NameSearch";
import IdSearch from "../components/IdSearch";

const Home= ()=>{
    return(
      <div>
        <NameSearch/>
        <IdSearch/>
        <br/>
        <h1>Result</h1>
        <div id="reportingArea">
        
        </div>
      </div>
    );
  }

export default Home;