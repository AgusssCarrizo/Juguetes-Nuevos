export default function Header() {
   return (
      <div className="navbar   bg-ros-secondary">
         <div className="navbar-start ">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                     <a>Home</a>
                  </li>
                  <li>
                     <a>Jueguetes</a>
                     <ul className="p-2">
                        <li>
                           <a>Submenu 1</a>
                        </li>
                        <li>
                           <a>Submenu 2</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a>Item 3</a>
                  </li>
               </ul>
            </div>
            <a className="btn btn-ghost text-3xl text-red-800 font-mono">JN</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-3 menu-horizontal px-1 ">
               <li>
                  <a className="h-10 w-18 text-white hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 bg-ros-primary">
                     Home
                  </a>
               </li>
               <li>
                  <a className="h-10 w-18 text-white hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 bg-ros-primary">
                     Juguetes
                  </a>
               </li>
               <li>
                  <a className="h-10 w-18 text-white hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 bg-ros-primary">
                     Contacto
                  </a>
               </li>
            </ul>
         </div>
         <div className="navbar-end">
            <a className="btn btn-primary">Button</a>
         </div>
      </div>
   );
}
