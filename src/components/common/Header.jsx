// import React from 'react';
// import {
//     Navbar,
//     Nav,
//     NavItem,
//     NavLink,
//     Button,
//     Input,
//     NavbarBrand
// } from 'reactstrap';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useLanguage } from '../../contexts/useLanguage';
// import '../../styles/components/header.css';

// export default function Header({ darkMode, setDarkMode }) {
//     const { language, t, changeLanguage } = useLanguage();

//     return (
//         <Navbar
//             color={darkMode ? "dark" : "light"}
//             dark={darkMode}
//             light={!darkMode}
//             expand="md"
//             fixed="top"
//             className="header-navbar"
//         >
//             {/* Brand/Logo */}
//             <NavbarBrand href="/" className="mr-auto brand-logo">
//                 {t('header-title')}
//             </NavbarBrand>

//             {/* Navigation Links - now using ml-auto for proper spacing */}
//             <Nav navbar className="mx-auto main-navigation">
//                 <NavItem>
//                     <NavLink href="#tools" className="nav-link">
//                         {t('nav-tools')}
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#about" className="nav-link">
//                         {t('nav-about')}
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#contact" className="nav-link">
//                         {t('nav-contact')}
//                     </NavLink>
//                 </NavItem>
//             </Nav>

//             {/* Right-aligned Controls */}
//             <div className="d-flex align-items-center header-controls">
//                 <Input
//                     type="select"
//                     value={language}
//                     onChange={(e) => changeLanguage(e.target.value)}
//                     className="mr-2 language-selector"
//                 >
//                     <option value="hi">हिन्दी</option>
//                     <option value="en">English</option>
//                 </Input>

//                 <Button
//                     color="link"
//                     onClick={() => setDarkMode(!darkMode)}
//                     className="dark-mode-toggle"
//                 >
//                     {darkMode ? <FaSun /> : <FaMoon />}
//                 </Button>
//             </div>
//         </Navbar>
//     );
// }

import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Button,
    Input,
    NavbarBrand
} from 'reactstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useLanguage } from '../../contexts/useLanguage';
import '../../styles/components/header.css';

export default function Header({ darkMode, setDarkMode }) {
    const { language, t, changeLanguage } = useLanguage();

    return (
        <Navbar
            color={darkMode ? "dark" : "light"}
            dark={darkMode}
            light={!darkMode}
            expand="md"
            fixed="top"
            className={`header-navbar ${darkMode ? 'bg-dark' : 'bg-white shadow-sm'}`}
        >
            {/* Brand/Logo */}
            <NavbarBrand href="/" className="mr-auto brand-logo">
                {t('header-title')}
            </NavbarBrand>

            {/* Navigation Links */}
            <Nav navbar className="mx-auto main-navigation">
                <NavItem>
                    <NavLink href="#tools" className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`}>
                        {t('nav-tools')}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#about" className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`}>
                        {t('nav-about')}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact" className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`}>
                        {t('nav-contact')}
                    </NavLink>
                </NavItem>
            </Nav>

            {/* Right-aligned Controls */}
            <div className="d-flex align-items-center header-controls">
                <Input
                    type="select"
                    value={language}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className={`mr-2 language-selector ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}
                >
                    <option value="hi">हिन्दी</option>
                    <option value="en">English</option>
                </Input>

                <Button
                    color="link"
                    onClick={() => setDarkMode(!darkMode)}
                    className={`dark-mode-toggle ${darkMode ? 'text-warning' : 'text-dark'}`}
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </Button>
            </div>
        </Navbar>
    );
}