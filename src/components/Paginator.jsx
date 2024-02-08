import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Paginator() {

    const {page , totalPages ,  handlePageChange } = useContext(AppContext);

    return(

        <div className=' w-full bg-[#222222] rounded-t-md fixed bottom-0 '>
            <div className='flex justify-between py-5 rounded-t-md w-4/6 mx-auto'>

                <div className=' flex gap-4'>
                    { page > 1 &&
                        <button
                            className=' text-gray-200 bg-slate-600 px-2 py-1 rounded-md border-2 border-gray-500 hover:bg-slate-800 hover:border-black transition-all duration-150'
                            onClick={ ()=>( handlePageChange(page-1))}
                        > Previous </button>
                    }
                    { page < totalPages &&
                        <button
                            className=' text-gray-200 bg-slate-600 px-2 py-1 rounded-md border-2 border-gray-500 hover:bg-slate-800 hover:border-black transition-all duration-150'
                            onClick={ ()=>( handlePageChange(page+1))}
                        > Next </button>
                    }
                </div>

                <div className='text-gray-300'>
                    Page {page} of {totalPages}
                </div>

            </div>

        </div>
    )
}

export default Paginator