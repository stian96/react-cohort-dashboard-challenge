import React, { createContext, useState, useContext, useEffect} from "react";
import { PostType } from "../types/types";

interface PostContextType {
    posts: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/Stian96/post`);
            if (response.ok) {
                const data = await response.json() as PostType[];
                setPosts(data);
            }
        }
        fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{ posts, setPosts}}>
            { children}
        </PostContext.Provider>
    );
}

export const usePosts = () => {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error('Post hook must be used within a PostProvider');
    }
    return context;
}
