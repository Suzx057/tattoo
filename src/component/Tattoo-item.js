import './Tattoo-item.css';

function Tattooitem(props){
    const  { tattoo, onTattoolick } = props;
    return(
        <div className="tattoo-item">
              <img src={tattoo.thumbnailUrl} onClick={() => {onTattoolick(tattoo)}}/>
              <h4>{tattoo.title}</h4>
        </div>
    );
}

export default Tattooitem;