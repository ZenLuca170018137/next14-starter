import Link from "next/link";

const NotFound = () => {
    return ( 
    <div>
        <h2>Not Found</h2>
        <p>Sorry the page was not found</p>
        <Link href ="/">Return home</Link>
    </div>
    )
};
  
  export default NotFound;