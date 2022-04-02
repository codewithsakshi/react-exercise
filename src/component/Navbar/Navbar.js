import React from "react"
import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="flex justify-between">
            <h4>Sakshi Mittal</h4>
            <ul className="no-underline py-8">
                <li>
                    <Link to='product'>Product</Link>
                </li>
                <li>
                    <Link to='template'>Template</Link>
                </li>
                <li>
                    <Link to='blog'>Blog</Link>
                </li>
                <li>
                    <Link to='pricing'>Pricing</Link>
                </li>
            </ul>
            <div className="flex">
          <button>Sign in</button>
          <button className="rounded-lg">Start Free</button>
            </div>
        </nav>
    )
}