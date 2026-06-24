import "./Avatar.css";

function Avatar({ src, alt = "" }) {
    return (
        <img className="image" src={src} alt={alt} />
    );
}

export default Avatar;
