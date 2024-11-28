import propTypes  from 'prop-types';
function Students (props)//object
//read-onley property
//prop types insure prop object property is certin type for debugging
 {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes":"No"}</p>
        </div>
    );
}
Students.defaultProps={
    name:"Gusts",
    age:15
}
Students.propTypes={
name: propTypes.string,
age: propTypes.number,
isStudent: propTypes.bool
}
export default Students;