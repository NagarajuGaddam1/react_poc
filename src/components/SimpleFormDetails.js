import {getFormValues,formValueSelector} from 'redux-form';
import {connect} from 'react-redux';
import React from 'react'

class FormData extends React.Component{
    
      //var {email, firstname} = props.formStates

      render(){
        console.log(this.props.firstName);
        const test= this.props.firstName;
    
        return(
          <div>
          <h1>First Name: {this.props.firstName}</h1>
          <h1>Last Name: {this.props.lastName}</h1>
          </div>
        )
      }
    
}


const selector = formValueSelector('simple');

    FormData = connect(
      state => ({
        firstName: selector(state, 'firstName'),
        lastName: selector(state, 'lastName')
      })
    )(FormData)

    export default FormData;

// function mapStateToProps(state) {
//     return {
        
//          formStates: getFormValues('simple')(state) // here 'form' is the name you have given your redux form 
//     }
// }

// export default connect(mapStateToProps)(FormData)