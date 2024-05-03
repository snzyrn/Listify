import React from 'react'
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div class="bg-stone-50 flex flex-col w-80 h-screen">
      <p
        class="font-delius-unicase font-bold text-orange-700 text-4xl mb-12 mt-4 ml-2"
      >
        Listify
      </p>
      <div class="flex flex-row items center text-xl mb-4">
        <Link to="/">
          <i class="mx-3 fa-solid fa-house"></i>Home
          </Link>
      </div>
      <div class="flex flex-row items center text-xl mb-4">
        <button><i class="mx-3 fa-solid fa-sun"></i>Today</button>
      </div>
      <div className="flex flex-row items-center text-xl">
        <Link to="/calendar">
          <i className="mx-3 fa-solid fa-calendar-days"></i>Calendar
        </Link>
      </div>
      <div class="items-end justify-self-end mt-auto">
        <hr class="mb-4" />
        <div class="flex flex-row items center text-xl text-orange-600">
          <button>
            <i class="mx-3 mb-4 fa-solid fa-right-from-bracket"></i>Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideMenu