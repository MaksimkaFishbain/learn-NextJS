import { Roboto, Antonio } from "next/font/google"

const handjet = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
})

const antonio = Antonio({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
})

const Footer = () => {
    return (
        <footer className={handjet.className}>
            <p className="p-5 text-center text-xl">
                Изучение
                <span className="text-blue-800 px-1 font-bold" style={antonio.style}>NEXT JS</span>,
                Август 23 года</p>
        </footer>
    );
};

export default Footer;