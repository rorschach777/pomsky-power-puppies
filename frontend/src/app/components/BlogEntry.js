import {Button, Link} from "@nextui-org/react";

const BlogEntry = ( props ) => {
    let youtubeUrl = "";
    let youtubeId = "";
    if( props.youtube !== false){
        youtubeUrl = props.youtube.external;
        youtubeId = youtubeUrl.split("=")[1];
        console.log(youtubeId)
   

    }



    return (
        <article className="ppp-blog-entry">
            
            <header>
                <h3>{props.heading}</h3>
                {/* <span>{props.author}</span> */}
                <span>Published on: {props.date}</span>
            </header>
            <img src={props.src}/>
            <div className="ppp-blog-entry-body">
                { props.body.length > 0 && (
                    props.body.map((b,i)=>{
                        return <p key={`${props.key}-body-${i}`}>{b.children[0].text}</p>
                    })
                )}
            </div>
            {props.youtube !== false && (
                <iframe width="500" height="330" src={`https://www.youtube.com/embed/${youtubeId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            )}
            {props.youtube === false && (
                <div>
                    <Button color="secondary" variant="bordered" to={props.link}>
                        <Link color='secondary' target="_blank" href={props.link}>Learn More</Link>
                    </Button>
                </div>
            )}
    
        </article>
    );
}
export default BlogEntry;