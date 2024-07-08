import { connect } from "react-redux";
import Users from "../components/Users/Users"
import { followAC, setUserAC, unfollowAC } from "../redux/UsersReducer";

var mapStateToProps = (state) => ({
  users: state.users.userData
})
let mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(followAC(id)),
  unfollow: (id) => dispatch(unfollowAC(id)),
  setUsers: (users) => dispatch(setUserAC(users))
})




export default connect(mapStateToProps,mapDispatchToProps)(Users);