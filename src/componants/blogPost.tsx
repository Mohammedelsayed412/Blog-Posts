import React from "react";


type BlogInfo = {
    header: string,
    title: string,
    img:string,
    author:string,
    authorLink:string,
    date:Date,
    link:string
  }

const BlogPost = ({header, title, img, author, authorLink, date, link }: BlogInfo ) => {
    
    return (
        <div className="row">
            <div className="col-4">
                <div className="p-card u-align-text--left ">
                    <header className="blog-p-card__header">
                        <h5><b> {header} </b></h5>
                        <hr/>
                    </header>
                    <div className="blog-p-card__content">
                        <a href={link}>
                            <img className="p-card__image" src={img} alt="" />
                        </a>
                        <div className="p-card__inner u-no-margin--bottom">
                            <div>
                                <h4><b> <a href={link}>{title}</a></b></h4>
                                <p><em><b> By <a href={authorLink}>{author}</a> on {date.getDate()} {date.toLocaleString('en-US', { month: 'long' })} {date.getFullYear()} </b></em></p>
                            </div>
                        </div>
                        <div>
                            <hr/>
                            <p className="blog-p-card__footer u-no-margin--bottom"> <b> Article </b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogPost