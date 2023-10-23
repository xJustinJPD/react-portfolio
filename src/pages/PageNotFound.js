import { useLocation } from "react-router-dom";

const PageNotFound = () => {

    let location = useLocation();

    return(
        <div>
            <h2>Sorry, 404 Error, Page {Location.pathname} Not Found</h2>
        </div>
    )
}

export default PageNotFound;