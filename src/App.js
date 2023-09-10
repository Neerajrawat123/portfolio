import { lazy,Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReactLoader from "./components/loader";
const Dashboard = lazy(()=> import('./pages/dashboard'))
const Posts = lazy(() => import('./pages/posts'))
const Post = lazy(() => import('./pages/blog'))

function App() {
    return (


          <BrowserRouter>
          <Suspense fallback = {<ReactLoader />}>

          <Routes>
            <Route path="/" element= {<Dashboard />}/>
            <Route path="/blogs" element= {<Posts />}/>
            <Route path="/blogs/:name" element= {<Post />}/>



          </Routes>
          </Suspense>
          
          </BrowserRouter>

          
  
  
  
      );
    }
 export default App