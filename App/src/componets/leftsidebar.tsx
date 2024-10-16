const sidebar = () => {
    return (
        <>
<div className="hidden lg:flex flex-col w-64 h-screen bg-base-100 p-4 shadow-lg fixed z-10">
<h2 className="text-xl font-bold mb-6">My Dashboard</h2>
<ul className="space-y-4">
  <ul className="menu bg-base-200 lg:menu-vertical rounded-box">
    <li>
      <a>
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
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Item 1
    </a>
    </li>
    <li>
      <a>
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
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Item 1
    </a>
    </li>
    <li>
      <a>
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
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Item 1
    </a>
    </li>
    
  </ul>
</ul>
</div>
</>
    )
}

export default sidebar