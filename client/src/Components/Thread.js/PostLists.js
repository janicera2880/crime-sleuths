import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { PostsContext } from "../../Context/PostsContext";
import UpdatePostForm from "./UpdatePostForm";

function PostLists () {

    const {user} = useContext(UserContext);
    const { userPosts, setUserPosts } = useContext(PostsContext);

}
export default PostLists;