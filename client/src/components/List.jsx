import { connect } from 'react-redux'
import {  editContact, handleInput} from '../redux/actions'
import appAPI from '../utils/API/appAPI'
import blueimg from './images/Blue-Figure.png'
import purpleimg from './images/Purple-Figure.png'
// import jess from './images/jess.png'

const List = (props) => {
  const handleUpdate = (e) => {
e.preventDefault()
let updatedContact ={
  fullname: props.editFullname,
  email: props.editEmail,
  phone: props.editPhone,
  category: props.editCategory,
  note: props.editNote,
  image: props.editImage,
  _id: props.editId
}
   appAPI.updateContact(updatedContact)
  }
  const handleDelete = (_id) =>{
appAPI.deleteContact(_id)
  }
  const handleSearch = (e) =>{
     let {value} = e.target
     appAPI.searchContact(value)
  }


  const renderList = () => {
    let displayList = props.contacts
    // if (props.search) {
    //   let regex = RegExp('^' + props.search, 'i');
    //   displayList = displayList.filter(contact => contact.fullname.match(regex) ? contact : null);
    // }

    if (props.type) {
      displayList = displayList.filter(contact => contact.category === props.type ? contact : props.type === 'all' ? displayList : null)
    }
    return (
      displayList.map((contact) => {
        return props.editId !== contact._id ? <section id='box' key={contact._id}>
          <div id='contactContainer'>
            <div id='left'>
              <h3>{contact.image === 'img1' ? <img src={blueimg} alt='blue' className="avatar" /> : <img src={purpleimg} alt='purple' className='avatar' />}</h3>
            </div>
            <div id='right'>
              <h2>{contact.fullname}</h2>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.note}</p>
              <p>{contact.category}</p>
            </div>
          </div>
          <div>
            <button className='contactButton' onClick={() => handleDelete(contact._id)}>Delete</button>
            <button className='contactButton' onClick={() => props.handleEdit(contact._id)}>Edit</button>
          </div>
        </section> :
          <section id='editSection' key={contact._id}>
            <form onSubmit={handleUpdate}>
              <h1 className='h1'>Edit Contact</h1>
              <div className="imageContainer">
                <h3>Avatar:</h3>
                <lable><input
                  type='radio'
                  name='editImage'
                  value='img1'
                  onChange={props.handleInput} />
                  <img src={blueimg} alt='blue' className="avatar" /></lable>
                <label> <input
                  type='radio'
                  name='editImage'
                  value='img2'
                  onChange={props.handleInput} />
                  <img src={purpleimg} alt='purple' className='avatar' /></label>
              </div>
              <label>Name:  <input
                type="text"
                name='editFullname'
                value={props.editFullname}
                onChange={props.handleInput}
              /></label>
              <label>Email: <input
                type="email"
                name='editEmail'
                value={props.editEmail}
                onChange={props.handleInput}
              /></label>
              <label>Phone:<input
                type="tel"
                name='editPhone'
                value={props.editPhone}
                onChange={props.handleInput}
              /> </label>
              <label id='personal'>
                <input
                  type="radio"
                  name="editCategory"
                  value='Personal'
                  onChange={props.handleInput}
                />Personal</label>
              <label id='professional'>
                <input
                  type="radio"
                  name="editCategory"
                  value='Professional'
                  onChange={props.handleInput}
                />Professional</label>
              <br />
              <textarea name="editNote" id="" cols="30" rows="5"
                placeholder="Notes:" value={props.editNote}
                onChange={props.handleInput}></textarea>
              <button type="submit" >Update</button>
            </form>
          </section>
      })
    )
  }
  return (

    <div className='list-container'>
      {/* <img src={jess} alt="jess" /> */}
      <h2 className='h1'>Search Contacts</h2>
      < br />
      <div >  <input
        type='search'
        name='search'
        onChange={handleSearch}
        placeholder='Search:'
      />
        <label className='category'><input type='radio' name='type' value='Personal' onChange={props.handleInput} /> Personal </label>
        <label className='category'><input type='radio' name='type' value='Professional' onChange={props.handleInput} /> Professional </label>
        <label className='category'><input type='radio' name='type' value='all' onChange={props.handleInput} /> All </label>
      </div>
      <br />
      <h1 className='h1'>Contact List</h1>
      <div id='listbox'>
        {renderList()}
      </div>
    </div>
  )
}

// this function allows me to access and read parts of my state
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    search: state.search,
    type: state.type,
    editId: state.editId,
    editFullname: state.editFullname,
    editEmail: state.editEmail,
    editPhone: state.editPhone,
    editCategory: state.editCategory,
    editNote: state.editNote,
    editImage: state.editImage
  }
}

// this function gives me access to the dispatch and my
const mapDispatchToProps = (dispatch) => {
  return {
    handleEdit: (id) => dispatch(editContact(id)),
    handleInput: (e) => dispatch(handleInput(e.target)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)