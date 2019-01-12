
const init = {
    titel: {}
}


const MyAppReducer = (state = init, action) => {

    let newStage = Object.assign({}, state)

    switch (action.type) {

        case 'SET_TITLE':

            newStage.titel = action.payload

            return newStage 
        default:
            return state
    }
}

export default MyAppReducer;