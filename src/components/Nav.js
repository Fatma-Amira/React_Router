import React from 'react';
import {Link} from 'react-router-dom';
export default function () {
    return (
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
              </Link>
              <Link to="/Category">
              <li>
                Category
             </li>
                </Link>
                <Link to="/Products">
              <li>Produts</li>
              </Link>
              <Link to="/Adminarea">

              <li>Admin area</li>
              </Link>
              </ul>  
        </div>
    )
}
