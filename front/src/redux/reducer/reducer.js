import { GET_ALL_TICKETS, GET_USER_TICKETS, LOG_IN, RISE_TICKET, SIGN_UP, UPDATE_TICKET } from "../actions/types"

const inicialState = {
    access: false,
    userId: null,
    userType: null,

    userTickets: [],
    userTicketsCopy: [],
    
}

const rootReducer = (state = inicialState, actions) => {

    const {type, payload} = actions

    switch (type) {

        case SIGN_UP:
            return {
                ...state,
            }

        case LOG_IN:
            return {
                ...state,
                access: payload.access,
                userType: payload.userType,
                userId: payload.userId,
            }

        case RISE_TICKET:
            return {
                ...state,
                userTickets: [...state.userTickets, payload.ticket],
                userTicketsCopy: [...state.userTickets, payload.ticket]
            }
        
        case GET_USER_TICKETS:
            return {
                ...state,
                userTickets: [...payload.tickets],
                userTicketsCopy: [...payload.tickets]
            }

        case GET_ALL_TICKETS: 
            return {
                ...state,
                userTickets: [...payload.tickets],
                userTicketsCopy: [...payload.tickets]
            }

        case UPDATE_TICKET: 
            return {
                ...state,
            }    
        default:
            return state
    }
}

export default rootReducer