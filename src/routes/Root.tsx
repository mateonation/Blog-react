import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const RootLayout=()=>(
    <>
        <Header />
        <NavBar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

export default RootLayout;