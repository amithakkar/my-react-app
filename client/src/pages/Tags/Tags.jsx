import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id:1,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:2,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:3,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:4,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:5,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:6,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:7,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:8,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:9,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    },{
        id:10,
        tagName: "javascript",
        tagDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. "
    }]
    return (
        <div className="home-container-1">
            <LeftSidebar />
            <div className="home-container-2">
                <h1 className="tags-h1">Tags</h1>
                <p className="tags-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod est quia inventore iste, doloribus tempora reiciendis dolorum mollitia expedita aliquam possimus ad ratione ullam molestiae doloremque fugiat maiores obcaecati odio!</p>
                <p className="tags-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in labore aliquam, velit corporis suscipit. Aliquam similique quia temporibus, nesciunt quisquam cupiditate praesentium esse, ullam quam quidem est, placeat laborum?</p>
                <div className="tags-list-container">
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Tags