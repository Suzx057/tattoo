import './Tattoopost.css';

function Tattoopost(props){
    const { tattoo, onBgclick }=  props;
    return (
        <div className="tattoo-post">
            <div className="tattoo-post-bg" onClick={onBgclick}/>
            <div className="tattoo-post-content">
                <img src={tattoo.thumbnailUrl} />
                <h4>{tattoo.title}</h4>
            </div>
        </div>
    );
}

export default Tattoopost;