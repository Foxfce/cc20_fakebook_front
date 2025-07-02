import { create } from "zustand";
import { createComment, createLike, createPost, deletePost, editPost, getAllPosts, unLike } from "../api/postApi";
import useUserStore from "./userStore";

const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null, // store post for edit
  loading: false,
  createPost: async (body, token, user) => {
    set({ loading: true })
    const resp = await createPost(body, token); // This is createPost from postApi
    // get().getAllPosts(); // To refresh post : not good performance
    console.log(resp.data.result);
    set(state => ({
      posts: [{ ...resp.data.result, user, likes: [], comments: [] }, ...state.posts]
    }))
    return resp
  },
  getAllPosts: async (token) => {
    let tk = useUserStore.getState().token
    // await new Promise(rs=> setTimeout(rs,2000));
    const resp = await getAllPosts(tk)
    set({ posts: resp.data.posts });
    return resp
  },
  deletePost: async (id) => {
    const token = useUserStore.getState().token;
    const resp = await deletePost(id, token);
    console.log(resp);
    get().getAllPosts()
    return resp;
  },
  setCurrentPost: (post) => set({ currentPost: post }),
  updatePost: async (id, body) => {
    const token = useUserStore.getState().token;
    const resp = await editPost(id, body, token)
    get().getAllPosts()
    return resp
  },
  createLike: async(body) =>{
    const token = useUserStore.getState().token;
    const resp = await createLike(body, token);
    get().getAllPosts();
    return resp;
  },
  unLike: async(id) =>{
    const token = useUserStore.getState().token;
    const resp = await unLike(id, token);
    get().getAllPosts();
    return resp;
  },
  createComment: async(body) =>{
    const token = useUserStore.getState().token;
    const resp = await createComment(body, token);
    get().getAllPosts();
    return resp;
  }
})
);

export default usePostStore;