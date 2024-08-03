import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h6>Category</h6>
        <ul>
          <li><input type="checkbox" /> Top</li>
          <li><input type="checkbox" /> Bottoms</li>
          {/* <li><input type="checkbox" /> Dresses & Jumpsuits</li> */}
          <li><input type="checkbox" /> Matching Sets</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h6>Color</h6>
        <ul className="color-list">
          <li className="color-option"><input type="checkbox" /> <span className="color-box black"></span> Black</li>
          <li className="color-option"><input type="checkbox" /> <span className="color-box blue"></span> Blue</li>
          <li className="color-option"><input type="checkbox" /> <span className="color-box brown"></span> Brown</li>
          <li className="color-option"><input type="checkbox" /> <span className="color-box green"></span> Green</li>
          <li className="color-option"><input type="checkbox" /> <span className="color-box grey"></span> Grey</li>
          <li className="color-option"><input type="checkbox" /> <span className="color-box multicolor"></span> Multicolor</li>
          <li className="color-option"><input type="checkbox" /> <span className="color-box tan"></span> Tan</li>
          <li className="color-option"><input type="checkbox" /> <span className="color-box white"></span> White</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h6>Size</h6>
        <ul className="size-list">
          <li><input type="checkbox" /> M</li>
          <li><input type="checkbox" /> L</li>
          <li><input type="checkbox" /> XL</li>
          <li><input type="checkbox" /> XXL</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
