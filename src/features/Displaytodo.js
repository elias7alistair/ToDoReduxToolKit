import React from 'react';
import {useSelector} from 'react-redux'

const Displaytodos = () => {
  
const {reducer } = useSelector(state => state)

   

    return ( 
        <div>
            <ul>
            { reducer.map((data)=>{
                return <li>{data.id + data.item}</li>
            })} 
            
            </ul>
        </div>
     );
}
 
export default Displaytodos;