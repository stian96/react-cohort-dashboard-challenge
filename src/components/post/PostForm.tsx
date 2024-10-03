import React, { useState } from "react";
import "../../styling/postForm.css";
import Avatar from "../user/Avatar";

const PostForm = () => {
    const [postContent, setPostContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement logic to send post.
        console.log("Innlegg sendt:", postContent);
        setPostContent("");
    };

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <Avatar />
            <textarea
                className="post-input"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="What's on your mind?"
                rows={3}
            />
            <button type="submit" className="post-button">
                Post
            </button>
        </form>
    );
};

export default PostForm;