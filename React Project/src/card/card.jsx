import pic from './assets/pic.jpg'

function Card (){
    return(
        <div className="card">
            <img src={pic} alt="image" />
            <h2>Bro Code</h2>
            <p>i Make vidoes and Learn Programinning</p>
        </div>
    );
}
export default Card 