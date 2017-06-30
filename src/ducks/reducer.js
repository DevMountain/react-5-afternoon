const initialState = {
  name: 'temp'
}

function reducer(state=initialState, action){ //current state then action you want to perform


    state = Object.assign(state, {
        lastAction: action
    });

    switch(action.type){

        default:
            return state
    }
    // return state;
} 

export default reducer; //export reducer so store can see it