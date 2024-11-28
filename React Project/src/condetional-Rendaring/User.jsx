import propTypes  from 'prop-types';
function User (Props) //conditional rendreing
{
const welcome = <h2 className="welcome"> welcome {Props.UserName} </h2>
const Login = <h2 className="login"> Pleas log in </h2>
    return Props.isLoggedIn?welcome:Login
    }
User.propTypes = {
    isLoggedIn: propTypes.bool,
    UserName: propTypes.string,
}
User.defaultProps = {
    UserName:"gust"
}
export default User;