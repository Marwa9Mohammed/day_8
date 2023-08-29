import { useParams } from "react-router-dom";

function M(){
    const{id}=useParams()

    return(<>
    <h1>here's the ID for the movie{id}</h1>
    </>
    );
}
export default M;