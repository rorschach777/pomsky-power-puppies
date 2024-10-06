import './Header.css';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


const Header = () => {
    return(
    
        // <header>
        //     <div > 
        //         <div>Content Left</div>
        //         <div>
        //             <nav>
        //                 <ul>
        //                     <li>
        //                         <a>Home</a>
        //                     </li>
        //                     <li>
        //                         <a>About Us</a>
        //                     </li>
        //                     <li>
        //                         <a>Request Information</a>
        //                     </li>
        //                 </ul>
        //             </nav>
        //         </div>
        //     </div>
        
        // </header>
        <div class="ppp-header">
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                [LOGO]
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                    Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                    Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                    Integrations
                    </Link>
                </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button size="sm" as={Link} color="primary" href="#" variant="flat">
                    Sign Up
                    </Button>
                </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
      
    )
}
export default Header;