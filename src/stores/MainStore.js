import {createStore} from 'redux'

const initialState={      
        userid:null,
        userdata:{}   
}

const Store=(state=initialState,action)=>{
    switch(action.type)
    {       
       

        case 'login':
            return {...state,userid:action.payload.userid,userdata:action.payload.userdata}

        default:
            return state;
    }
}

export default createStore(Store);

