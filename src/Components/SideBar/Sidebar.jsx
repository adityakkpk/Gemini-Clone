import menuSVG from "../../assets/Menu.svg";
import plusSVG from "../../assets/Plus.svg";
import message from "../../assets/Message.svg"
const Sidebar = () => {
  return (
    <div className="">
      <div>
        <img src={menuSVG} className="" alt="" />
        <div>
            <img src={plusSVG} alt="" />
            <p>New Chat</p>
        </div>
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={message} alt="" />
                <p>What is React?</p>
            </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Sidebar;
