import './BlogEntry.css';
import {Button, Link} from "@nextui-org/react";

const BlogEntry = ( props ) => {
    return (
        <article className="ppp-blog-entry">
       
            <header>
                <h3>{props.heading}</h3>
                <span>{props.author}</span>
                <span>Published on: {props.date}</span>
            </header>
            <img src={props.src}/>
            <div className="ppp-blog-entry-body">
                {props.body}
            </div>
            <div>
                <Button color="secondary" variant="bordered" to={props.link}>
                    <Link color='secondary' href={props.link}>Learn More</Link>
                </Button>
            </div>
        </article>
    );
}
export default BlogEntry;