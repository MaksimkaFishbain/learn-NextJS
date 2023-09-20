import Nav from "@/components/clientComponets/NavBar";
import CartPanel from "@/components/clientComponets/CartPanel";

const links = [
    {
        url:"/products",
        pageName:"Товары"
    },
    {
        url:"/about",
        pageName:"О нас"
    },
    {
        url:"/",
        pageName:"Главная"
    },
]

const Header = () => {
    return (
        <header className='py-3'>
           <Nav links={links}/>
        </header>
    );
};

export default Header;