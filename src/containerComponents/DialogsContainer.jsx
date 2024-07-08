
import { updateMessageActionCreator, addNewMessageActionCreater } from '../redux/DialogsReducer'
import Dialogs from "../components/MainContent/Dialogs/Dialogs";
import { connect } from "react-redux";

// function DialogsContainer() {

//   let dialogEl = useSelector(state => state.dialogs.userData).map(d => <DialogContainer name={d.name} id={d.id} />)
//   let messageEl = useSelector(state => state.dialogs.usersMessage).map(m => <MessageContainer message={m.message} />)
//   const dispatch = useDispatch();
//   const addMessage = () => {
//     dispatch(addNewMessageActionCreater())
//   }
//   const updateStateMessages = (text) => {
//     dispatch(updateMessageActionCreator(text))
//   }


//   return <Dialogs updateStateMessages={updateStateMessages} dialogEl={dialogEl} messageEl={ messageEl} addMessage={addMessage} />
// }
const mapStateToProps = (state) => ({
  // dialogEl: state.dialogs.userData,
  // messageEl: state.dialogs.usersMessage,
  // newMessage:  state.dialogs.newMessage
  dialogsPage: state.dialogs
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: () => dispatch(addNewMessageActionCreater()),
  updateStateMessages: (text) => dispatch(updateMessageActionCreator(text))
})
               
export default  connect(mapStateToProps,mapDispatchToProps)(Dialogs)