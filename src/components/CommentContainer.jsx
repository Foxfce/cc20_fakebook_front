import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

function CommentContainer(props) {
const {postId, comments} = props;

  return (
      <div className="flex flex-col gap-3">
        <div className="text-xs">
          See all comments
        </div>
        {comments.map(el=>(
          <CommentItem key={el.id} comment={el} />
        ))}
        <CommentForm postId={postId} />
      </div>
  )
}
export default CommentContainer