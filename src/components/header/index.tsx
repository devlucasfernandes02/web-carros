import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiUser, FiLogIn } from 'react-icons/fi';


export function Header() {
    const signed = false;
    const loadginAuth = false;

    return(
        <div className='w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4'>
            <header className='flex w-full items-center max-w-7xl justify-between px-4 mx-auto'>
                <Link to="/">
                    <img 
                    src={logoImg} 
                    alt="Logo do Site" />
                </Link>

                {!loadginAuth && signed && (
                    <Link to="/dashboard">
                    <div className='border-2 rounded-full p-1 border-gray-900'>
                        <FiUser size={22} color='#000'/>
                    </div>
                    </Link>
                )}

                {!loadginAuth && !signed && (
                    <Link to="/login">
                        <div className='border-2 rounded-full p-1 border-gray-900'>
                            <FiLogIn size={22} color='#000'/>
                        </div>
                    </Link>
                )}
            </header>
        </div>
    )
}