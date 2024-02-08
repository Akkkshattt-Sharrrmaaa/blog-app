import './App.css'
import Blogs from './components/Blogs';
import Paginator from './components/Paginator';
import Header from './components/Header';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

    const {fetchBlogPosts} = useContext(AppContext)

    useEffect(()=>{
        fetchBlogPosts();
    }, []);

    return(

        <div className=' w-full h-full flex flex-col items-center justify-center'>

            <Header />

            <Blogs />

            <Paginator />

        </div>
    )

}

export default App
