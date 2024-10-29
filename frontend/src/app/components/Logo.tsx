import { PropsWithChildren } from 'react';



interface IProps {
    color: string
}

const Logo = ( props : PropsWithChildren<IProps>) => {
    return (
        <div className="logo">
            <img 
                alt="Pomsky Puppies | Philadelphia, Pennsylvaina | Edmeston, New York" 
                width="200"
                height="30"
                loading='lazy'
                src={`/images/ppp-logo-${props.color}.png`} />
        </div>
    );
}
export default Logo;