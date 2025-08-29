import { Outlet } from 'react-router-dom';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

const Layout = () => {
    return (
        <div className='layout'>
            <Header/>
            <main className='main-contents'>
                <Outlet/>
            </main>            
            <Footer/>            
        </div>
    );
};

export default Layout;