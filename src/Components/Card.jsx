import React from 'react'

function Card({username}) {
    
    
  return (
    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
    <div class="p-4">
      <h5 class="mb-2 text-slate-800 text-xl font-semibold">
        Website Review Check Update from Our Team in San Francisco
      </h5>
      <p class="text-slate-600 leading-normal font-light">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
      </p>
   
      <button class="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">  {username}
         </button>
    </div>
  </div>
  )
}

export default Card ;
