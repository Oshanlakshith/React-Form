import '../pages/css/dashboard.css';
import LogingForm from "./LogingForm";
function DashBoardForm() {
    return <div className="main">
        <div className="nav">
            <div className="icon">
                <h2 className="logo">React DashBoard</h2>
            </div>
            <div className="navbar">
            <div className="menu">
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>CUSTOMER</a></li>
                    <li><a href='#'>Item</a></li>
                    <li><a href='#'>Order</a></li>
                </ul>
            </div>
        </div>
        </div>
       <div className="loging">
           <LogingForm/>
       </div>
    </div>
}

export default DashBoardForm;
