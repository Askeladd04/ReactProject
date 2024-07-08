import Content from "../components/MainContent/MainContent"
import { updatePostActionCreator, addPostActionCreator } from '../redux/MainContentReducer'
import { connect } from "react-redux";
// function ContentContainer() {
//   const posts = useSelector(state => state.mainContent.posts).map(post => <Post name={post.name} message={post.message} />) ;
//   const newPost = useSelector(state => state.mainContent.newPost);
//   const dispatch = useDispatch(); 


//   let addPost = () => {
//     dispatch(addPostActionCreator())
//   }
//   let updateNewPostText = (e) => {
//     dispatch(updatePostActionCreator(e));
//     console.log(newPost)
//  }
//   return <Content updateNewPost={updateNewPostText} addNewPost={addPost} posts={posts} newPost={newPost}  />
// }
const mapStateToProps = (state) => ({
    newPost: state.mainContent.newPost,
    posts: state.mainContent.posts
})

const mapDispatchToProps = (dispatch) => ({
    updateNewPost: (e) => dispatch(updatePostActionCreator(e)),
    addNewPost: () =>  dispatch(addPostActionCreator()) ,
})


const ContentContainer = connect(mapStateToProps, mapDispatchToProps)( Content );

export default ContentContainer;