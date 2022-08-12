import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsView from "./blogsView";

const BlogsController = () => {
    const [blogsData, setBlogsData] = useState<any[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.request({
                    method: 'GET',
                    url: 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json',
                })
                return response
            }
            catch (err: any) {
                console.error('Failed To Load Blogs Data', err)
                return err
            }
        }
        fetchData().then((response)=>{setBlogsData(response.data)});
        
    },[])

    return (
        <div>
            {blogsData.length !== 0 && <BlogsView blogsData={blogsData}/>}
        </div>
    )
}

export default BlogsController