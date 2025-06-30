import CreatePost from "./CreatePost"
import PostItem from "./PostItem"

function PostContainer() {
  return (
    <div className="w-[600px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-amber-50">
      <CreatePost />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  )
}
export default PostContainer