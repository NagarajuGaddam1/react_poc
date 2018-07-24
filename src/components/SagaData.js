import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getUserData} from '../actions/action'

class SagaData extends React.Component{
  
    componentDidMount(){
        this.props.getUserData();
    }

    render(){
        console.log(this.props.data);
        const res =  this.props.data || []  ;
        return( 
            <div>
            <h1>SagaData</h1>
                <ul>
            <li>Name Email</li>
            {res.map(item => (
                <li key={item.name}>
                    {item.name} {item.email}
                </li>
            ))}
            </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>({data:state.userDataReducer.data});

const mapDispatchToProps = dispatch => bindActionCreators({getUserData},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SagaData);