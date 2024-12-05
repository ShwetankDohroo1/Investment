import Headerimg from '../assets/investment-logo.png';
export default function Header(){
    return (
        <header id="header">
            <img src={Headerimg} alt="" />
            <h1>Investment Calculator</h1>
        </header>
    );
}