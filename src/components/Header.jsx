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
         <div className="navbar-end ">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="25"
               height="25"
               className="text-black hover:cursor-pointer mr-4"
               class="bi bi-cart"
               viewBox="0 0 16 16">
               <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
         </div>
      </div>
   );
}
