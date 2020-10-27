import React from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { addToDo } from './todoSLice';


const AddToDo = () => {
    // const [item,setItem] = useState('')
    const {register, handleSubmit,errors,reset} = useForm();
    const dispatch = useDispatch();

    const onSubmit = data => {
    //   data.items && setItem(data.items);
    //   setItem('');
     data.items && dispatch(addToDo(data.items))
     reset();
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            {errors.items && <div>This field is required</div> }
            <input type="text" name="items" ref={register({required: true})} placeholder="Add item"/>
            <input type="submit"/>
            </form>
        </div>
     );
}
 
export default AddToDo;