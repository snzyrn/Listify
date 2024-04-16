import React from 'react'

function Home() {
  return (
    <div class="flex flex-row">
    {/* Side Box */}
    <div class="bg-stone-50 flex flex-col w-80 h-screen">
      <p
        class="font-delius-unicase font-bold text-orange-700 text-4xl mb-12 mt-4 ml-2"
      >
        Listify
      </p>
      <div class="flex flex-row items center text-xl mb-4">
        <button><i class="mx-3 fa-solid fa-house"></i>Home</button>
      </div>
      <div class="flex flex-row items center text-xl mb-4">
        <button><i class="mx-3 fa-solid fa-sun"></i>Today</button>
      </div>
      <div class="flex flex-row items center text-xl">
        <button>
          <i class="mx-3 fa-solid fa-calendar-days"></i>Calendar
        </button>
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
     {/* Main Box  */}
    <div class="bg-stone-100 w-full">
      <div>
        <p class="m-4 text-3xl font-bold text-slate-800">TODAY</p>
      </div>
      <div class="flex m-4 items-center justify-center">
        <input
          type="text"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          placeholder="Add New Task"
          class="block m-2 w-1/4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          class="block m-2.5 rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Add
        </button>
      </div>
      <div
        class="flex items-center m-2 ps-4 border border-gray-200 rounded dark:border-gray-700"
      >
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          name="bordered-checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="bordered-checkbox-1"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Read book</label
        >
      </div>
      <div
        class="flex items-center m-2 ps-4 border border-gray-200 rounded dark:border-gray-700"
      >
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          name="bordered-checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="bordered-checkbox-1"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Clean your room</label
        >
      </div>
      <div
        class="flex items-center m-2 ps-4 border border-gray-200 rounded dark:border-gray-700"
      >
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          name="bordered-checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="bordered-checkbox-1"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Do homework</label
        >
      </div>
    </div>
  </div>
  )
}

export default Home