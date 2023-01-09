import { CLEAN_STATE, DELETE_FAVOURITES, FILTER_BY_STATUS, GET_BY_NAME, GET_CHARACTERS, GET_FAVOURITES, GET_INFO_BY_ID } from "../Actions/Actions"

const initialState = {
    Cards:[],//original el que se renderiza
    AuxiliarCards:[],// de apoyo para limpiar renderizado
    CurrentCard:[],
    Favourites:[]
}


export default function reducer (state=initialState,action){
    switch (action.type){

      case GET_CHARACTERS :
       return{
        ...state,
        Cards:action.payload,
        AuxiliarCards:action.payload
       }

      case GET_BY_NAME:
          const cardsbyname=  state.AuxiliarCards.filter(i=>i.name.toLowerCase()
                             .includes(action.payload.toLowerCase()))
        return{
         ...state,
          Cards:cardsbyname
        }
      case GET_INFO_BY_ID:
        const currentCardinfo=action.payload
        console.log(currentCardinfo);
        return{
        ...state,
        CurrentCard:currentCardinfo
        }
      
      case CLEAN_STATE:
        return{
          ...state,
          [action.payload]:[]
        }

      case GET_FAVOURITES:
          const cards= !state.Favourites.filter(i=>i.id===action.payload.id).length?///si no encuentro una carta con el id repetido
                         [...state.Favourites,action.payload]//retorno lo que ya tengo en favoritos mas la nueva carta
                         :state.Favourites //si en el filtrado encuentra algo entonces la carta ya existe entonces no lo queremos agregar a favorito de nuevo

          !state.Favourites.filter(i=>i.name===action.payload.name).length?//estos codigos no puedo integrarlos arriba
           alert('games added to favourites'):                             // ya que intentan agregar los alert al estado favourites
           alert('this games already exist in favourites')                         
      
        return{
          ...state,
          Favourites:cards
        }

      case DELETE_FAVOURITES:
        const card=state.Favourites.filter(i=>i.name !== action.payload);
       
        return {
          ...state,
          Favourites:card
        }

      case FILTER_BY_STATUS:
        const ordercards= action.payload==='Alive'?state.AuxiliarCards.filter(i=>i.status==='Alive'):
                          action.payload==='Dead'?state.AuxiliarCards.filter(i=>i.status==='Dead'):
                          state.AuxiliarCards
        return{
           ...state,
           Cards:ordercards
        }
     default:
        return state
    }
}