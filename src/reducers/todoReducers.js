const initialData ={
    list: []
}

const todoReducers =(state=initialData, action)=>{
             switch(action.type){
                case "ADD_TODO":
                    const { id, data } = action.payload;

                    return{
                        ...state,              //get initial Data use Spread oprator. 
                        list:[
                            ...state.list,
                            {
                                id:id,   
                                data:data     
                        }
                    ]
                    }
                    case "DELETE_TODO":
                    const newlist= state.list.filter((elem)=>elem.id != action.id)

                    return{
                        ...state,              //get initial Data use Spread oprator. 
                        list: newlist
                    }

                    case "REMOVE_TODO": return{
                                      ...state,
                                      list:[ ]
                    }

                    default: return state;
             }
}

export default todoReducers;