import { connect } from "react-redux";
import React from "react";
import Users from "../components/Users/Users"

const mapStateToProps = (state) => ({
  users:state.
})
const mapDispatchToProps = (dispatch) => ({

})

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)



export default UsersContainer