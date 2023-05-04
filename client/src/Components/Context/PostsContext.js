import React, { useState } from "react";

const PostsContext = React.createContext();

function PostsProvider({ children }){

    const [posts, setPosts] = useState(null);
    const [userPosts, setUserPosts] = useState(null);

    return(
        <PostsContext.Provider value={{posts, userPosts, setPosts, setUserPosts}}>
            {children}
        </PostsContext.Provider>
    );
}

export { PostsContext, PostsProvider};