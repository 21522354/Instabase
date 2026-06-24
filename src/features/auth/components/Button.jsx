import "./Button.css";

function Button({
    children,
    variant = "primary",
    type = "button",
    icon,
    ...props
}) {
    return (
        <button
            type={type}
            className={`button ${variant}`}
            {...props}
        >
            {/* Kiểm tra nếu có icon thì mới render */}
            {icon && (
                <span className="button-icon">
                    {/* Nếu icon là đường dẫn (string), dùng thẻ img */}
                    {typeof icon === "string" ? (
                        <img src={icon} alt="button icon" width="20" height="20" />
                    ) : (
                        /* Ngược lại nếu là SVG hoặc component, render trực tiếp */
                        icon
                    )}
                </span>
            )}
            <span>{children}</span>
        </button>
    );
}

export default Button;
