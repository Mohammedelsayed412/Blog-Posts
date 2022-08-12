import BlogPost from "../../componants/blogPost";

type BlogsData = {
    blogsData: any
  }
  
const BlogsView = ({ blogsData }: BlogsData) => {
    return (
        <div className='row'> 
            {Array.from(Array(3), (e,index) =>{
                return  <div className='col-4'>
                            <BlogPost header={blogsData[index]._embedded['wp:term'][2][0]?.name || blogsData[index]._embedded['wp:term'][1][0]?.name || ""} title={blogsData[index].title.rendered || ""} img={blogsData[index].featured_media} author={blogsData[index]._embedded.author[0].name || ""} authorLink={blogsData[index]._embedded.author[0].link || ""} date={new Date(blogsData[index].date) || new Date()} link={blogsData[index].link || ""} />
                        </div>
            } )}
      </div>
    )
}

export default BlogsView