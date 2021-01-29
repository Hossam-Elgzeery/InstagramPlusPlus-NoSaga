import {createStore} from 'redux'

const initialState={      
        userid:null   
}

const Store=(state=initialState,action)=>{
    switch(action.type)
    {       
       

        case 'login':
            return {...state,userid:action.payload.userid}

        default:
            return state;
    }
}

export default createStore(Store);

