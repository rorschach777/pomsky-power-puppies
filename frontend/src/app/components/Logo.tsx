import { PropsWithChildren } from 'react';
import './Logo.css';
import Image from 'next/image';
interface IProps {
    color: string
}

const Logo = ( props : PropsWithChildren<IProps>) => {
    return (
        <div className="logo">
            <Image 
                alt="Pomsky Puppies | Philadelphia, Pennsylvaina | Edmeston, New York" 
                src={`/images/ppp-logo-${props.color}.png`} />
        </div>
    );
}
export default Logo;