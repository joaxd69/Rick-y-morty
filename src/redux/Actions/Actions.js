import axios from 'axios'

export const GET_CHARACTERS='GET_CHARACTERS';
export const GET_BY_NAME ='GET_BY_NAME';
export const GET_INFO_BY_ID='GET_INFO_BY_ID';
export const CLEAN_STATE='CLEAN_STATE'
export const GET_FAVOURITES='GET_FAVOURITES';
export const DELETE_FAVOURITES='DELETE_FAVOURITES';
export const FILTER_BY_STATUS='FILTER_BY_STATUS'

export const getcharacters=()=>{
    return async(dispatch)=>{
        const characters = await axios.get(`https://rickandmortyapi.com/api/character`);
        const pag2= await axios.get(characters.data.info.next)
        const pag3 = await axios(pag2.data.info.next)
        const allcards=[...characters.data.results,...pag2.data.results,...pag3.data.results]

        return dispatch({
            type:GET_CHARACTERS,
            payload:allcards
        })
    }
}

export const getcharactersbyname=(name)=>{
    return {
        type:GET_BY_NAME,
        payload:name
    }
}

export  const getinfobyid=(id)=>{
   return async(dispatch)=>{
      const cards= await axios(`https://rickandmortyapi.com/api/character/${id}`)
      return dispatch({
        type:GET_INFO_BY_ID,
        payload:cards.data
      })
   }
}

export const cleanState=(state)=>{
    return {
        type:CLEAN_STATE,
        payload:state
    }
}

export const getfavourites=(card)=>{
   return{
    type:GET_FAVOURITES,
    payload:card
   }
}

export const deletefavourites=(card)=>{
    return{
        type:DELETE_FAVOURITES,
        payload:card
    }
}

export const filterbystatus=(status)=>{
    return{
        type:FILTER_BY_STATUS,
        payload:status
    }
}
