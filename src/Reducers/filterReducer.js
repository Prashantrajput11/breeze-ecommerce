

  // function filterReducer

  export const filterReducer = (state, action)=>{

    const{type, payload} = action;

    switch (type) {
      case "GET_PRODUCTS":
      return {...state, products: payload}

      case "LOW-TO-HIGH":
        return {...state, sortBy: type}
        
        case "HIGH-TO-LOW":
          return {...state, sortBy: type}

          case "CATEGORY":
   
          return state.categories.includes(payload)
            ? {
                ...state,
                categories: state.categories.filter(
                  (category) => category !== payload
                ),
              }
            : { ...state, categories: state.categories.concat(payload) };

            case "RATINGS":
              return {...state, ratings: payload}
    
      default:
        break;
    }
     // state logic goes here


  }


