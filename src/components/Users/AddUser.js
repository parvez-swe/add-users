import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) =>{
      const nameInputRef = useRef();
      const ageInputRef = useRef();



      const [error, setError] = useState();

      const addUserHandler =(event)=>{
            event.preventDefault();
            const enteredName = (nameInputRef.current.value);
            const enteredUserAge = ageInputRef.current.value;

            if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
                  setError({
                        title:'Invalid input',
                        message: 'Please enter a valid name and age (non-empty-values).'
                  })
                  return;
            }
            if(+enteredUserAge < 1){                   {/*here use + before enterUserAge for make string to number.because we did define it string at useState('')  */}
                  setError({
                        title: 'Invalid age',
                        message: 'Please enter a valid age (>0).'
                  })
                  return;
            }
            props.onAddUser(enteredName, enteredUserAge);   {/*it has parse into app.js file*/}
            nameInputRef.current.value ='';
            ageInputRef.current.value ='';

      }

      const ErrorHandler = () =>{
            setError(null);
      } 
      return (
        <Wrapper>
          {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={ErrorHandler}
            />
          )}

          <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"

                ref ={nameInputRef}
              />
              <label htmlFor="age ">Age(year)</label>
              <input
                id="age"
                type="number"

                ref ={ageInputRef}
              />
              <Button type="submit">Add User</Button>
            </form>
          </Card>
        </Wrapper>
      );
}

export default AddUser;

//(erro && }if error is occured then Error will be execute

      //   <div>
      //     {error && (
      //     <ErrorModal 
      //     title={error.title} 
      //     message={error.message}
      //     onConfirm = {ErrorHandler}
      //     />
      //     )}

          //there we can make "className" as we want. it's work also as props. which we
      //     can access from other component.
      //     <Card className={classes.input}>

                  //every input generally get as string.for safe for compare as number we use +enteredAge
            // if(+enteredAge < 1){

      
