import React from "react";
import Avatar from "../user/Avatar";
import '../../styling/post.css'
import CommentForm from "./CommentForm";

// TODO: Send values dynamic via props.
const Post = () => {

    return (
        <div className="post-container">
            <div className="post-header">
                <Avatar />
                <div className="post-author-info">
                    <h3>Stian Rusvik</h3>
                    <p className="post-subtitle">
                        Ea molestias quasi exercitationem repellat qui ipsa sit aut
                    </p>
                </div>
            </div>
            <div className="post-content">
                <p>ldkløfsdkølfdsløfdkaløkølfdkløklkfaslølfkdsløfdaløkl</p>
            </div>
            <span className="separator"/>
            <CommentForm />
        </div>
    )
}

export default Post;