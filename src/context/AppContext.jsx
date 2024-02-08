import { createContext, useState } from "react";
import { BaseUrl } from '../BaseUrl';
import axios from "axios"


// create the context (snapshot)
export const AppContext = createContext();

// context provider ( sort of filling in the snapshot , papdi me masal dalna)
export default function AppContextProvider( {children} ){

    const [ loading , setLoading ] = useState( false );
    const [ page , setPage ] = useState(1);
    const [ totalPages , setTotalPages ] = useState(null)
    const [ posts , setPosts ] = useState( [] )


    async function fetchBlogPosts( page = 2){

        let url = `${BaseUrl}?page=${page}`;
        setLoading(true)

        try{

            const {data} = await axios.get(url);
            console.log(data);
            setPage(data.page)
            setTotalPages(data.totalPages)
            setPosts(data.posts)

        }catch(error){

            console.log(" error in api fetch inside fetchBlogPosts function")
            setPage(1)
            setTotalPages(null)
            setPosts([])

        }

        setLoading(false)
    }


    function handlePageChange( page ){
        setPage(page);
        fetchBlogPosts(page)
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchBlogPosts,
        handlePageChange
    }

    // papdi bhej do khane ke liye
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}