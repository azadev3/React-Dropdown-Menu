import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const App: React.FC = () => {

  const dropdownMenuDivRef = React.useRef<HTMLDivElement | null>(null);

  const [menu, setMenu] = React.useState<boolean>(false);
  const handleDropdown = () => {
    setMenu((prev) => !prev);
  };

  React.useEffect(() => {
    const outsideClicked = (event:MouseEvent) => {
      if(dropdownMenuDivRef.current && !dropdownMenuDivRef.current.contains(event.target as Node)) {
        setMenu(false);
      }      
    }

    document.addEventListener('mousedown', outsideClicked);
    return () => {
      document.removeEventListener('mousedown', outsideClicked);
    }
  }, []);

  return (
    <div className="app">
      <div className="dropdown-menu" ref={dropdownMenuDivRef}>
        <div className="dropdown-button" onClick={handleDropdown}>
          <span>Pick an option</span>
          {menu ? (
            <FaCaretUp className="open-icon" />
          ) : (
            <FaCaretDown className="closed-icon" />
          )}
        </div>
        {menu && (
          <div className="submenu">
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
            <li>Item four</li>
            <li>Item five</li>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
