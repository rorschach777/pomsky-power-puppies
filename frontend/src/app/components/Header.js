"use client"

import React from 'react'
import './Header.css';

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Logo from './Logo';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {name: "Home", path: ""},
        {name: "Contact Us", path: "contact"},
        {name: "Blog", path: "blog"},
    ];
    return(

        <div class="ppp-header">
            <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarBrand>
                    <a href="/">
                        <Logo color="purple" />
                    </a>
                </NavbarBrand>
            </NavbarContent>

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
                <Button as={Link} color="primary" href="#" variant="flat">
                    Request Information
                </Button>
           
                </NavbarItem>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />

            </NavbarContent>
            <NavbarMenu className="ppp-mega-menu ">
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item.name}-${index}`}>
                    <Link

                    className="w-full"
                    href={`/${item.path}`}
                    size="lg"
                    >
                    {item.name}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
            </Navbar>
      </div>
      
    )
}
export default Header;