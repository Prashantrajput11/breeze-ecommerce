
// Info : File Contains Rating Component

// Imports
import { useFilter } from '../../Context/filterContext'
import "../Sidebar/Sidebar.css"



export const RatingFilter = () => {

	// consume filter context
	const{filterDispatch, filterState} = useFilter();


  return (
			<div className="rating-wrapper">
					<h4 className="rating-title tx-md pl-1">Rating</h4>
					<ul className="rating-list">
					<li>
						<label >
							<input 
								type="radio" 
								name="rating" 
								value= {"4-and-above"}
								checked = {filterState.ratings==="4-and-above"}
								onChange= {(e)=>filterDispatch({type: 'RATINGS', payload: e.target.value})}
								/>
							4 star & above
						</label>
						</li>



						<li>
						<label >
							<input 
								type="radio" 
								name="rating" 
								value= {"3-and-above"}
								checked = {filterState.ratings==="3-and-above"}
								onChange= {(e)=>filterDispatch({type: 'RATINGS', payload: e.target.value})}
								/>
							3 star & above
						</label>
						</li>




						<li>
						<label >
							<input 
								type="radio" 
								name="rating" 
								value= {"2-and-above"}
								checked = {filterState.ratings==="2-and-above"}
								onChange= {(e)=>filterDispatch({type: 'RATINGS', payload: e.target.value})}
								/>
							2 star & above
						</label>
						</li>


</ul>

</div>
	
  )
}
