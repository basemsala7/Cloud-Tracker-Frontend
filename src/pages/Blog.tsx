import { useEffect } from "react";
import { scrollToTop } from "../utils/helper";

const Blog = () => {
  
   useEffect(function(){
    scrollToTop() ; 
   });

  return <div>Blog</div>;
};

export default Blog;
