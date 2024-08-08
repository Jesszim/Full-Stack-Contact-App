import { connect } from "react-redux" 
import { handleInput, addContact } from '../redux/actions'
import { useNavigate } from "react-router-dom"
import appAPI from "../utils/API/appAPI"
import blueimg from './images/Blue-Figure.png'
import purpleimg from './images/Purple-Figure.png'


const Form = (props) => {
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let newContact ={
            fullname: props.fullname,
            email: props.email,
            phone: props.phone,
            category: props.category,
            note: props.note,
            image: props.image
        }
appAPI.addContact(newContact)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Contact </h1>
            <h3>Avatar:</h3>
            <div className="imageContainer">
            <input 
                type='radio'
                name='image'
                value='img1'
                onChange={props.handleInput} />
                <lable><img src={blueimg} alt='blue' className="avatar"/></lable>
                     <label> <input 
                type='radio'
                name='image'
                value='img2'
                onChange={props.handleInput} />
                <img src={purpleimg} alt='purple' className='avatar' /></label>
                </div>
            <input
                type="text"
                name='fullname'
                placeholder="Full Name:"
                value={props.fullname}
                onChange={props.handleInput}
            />
            <input
                type='email'
                name='email'
                placeholder="Email:"
                value={props.email}
                onChange={props.handleInput}
            />
            <input
                type="tel"
                name='phone'
                placeholder="Phone Number:"
                value={props.phone}
                onChange={props.handleInput}
            />
            <label id='personal'>
            <input 
            type="radio" 
            name="category"
            value='Personal'
            onChange={props.handleInput}
            /> Personal</label>

<label id='professional'>
            <input 
            type="radio" 
            name="category"
            value='Professional'
            onChange={props.handleInput}
            /> Professional</label>
          <textarea name="note" id="" cols="30" rows="5"    
           placeholder="Notes:"  value={props.note}
                onChange={props.handleInput}></textarea>
       
            <button type="submit">Add</button>
        </form>
    )
}

// this function is to read state
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        fullname: state.fullname,
        email: state.email,
        phone: state.phone,
        category: state.category,
        note: state.note,
        image: state.image
    }
}

// this function is for writing state
const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (e) => dispatch(handleInput(e.target)),
        addContact: () => dispatch(addContact())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form) 