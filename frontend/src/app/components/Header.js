"use client"

import React from 'react'
import './Header.css';

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

import Logo from './Logo';
import Form from './Form';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
                <Button  onPress={onOpen}  color="secondary" variant="bordered" >
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">
                        <div className="ppp-header-modal-title">
                            Request More Information
                        </div>
                        
                    </ModalHeader>
                    <ModalBody>
                    <div className="ppp-modal-body">
                        <Form/>
                        <div>
                            You may call or text us at <a href="tel:610-800-0012">(610) 800-0012</a>. If we do not answer please leave a message in order to receive a callback.
                        </div>
                    
                    </div>
                    </ModalBody>
                    <div className="ppp-header-modal-footer">
                        <ModalFooter justify="justify-start" >
                            <Button color="secondary" variant="bordered" onPress={onClose}>
                            Close
                            </Button>
                  
                        </ModalFooter>
                    </div>
        
                    </>
                )}
                </ModalContent>
            </Modal>
      </div>
      
    )
}
export default Header;