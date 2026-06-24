import { useId } from 'react';
import './TextBox.css';

function TextBox({ 
    label, 
    type = 'text', 
    value, 
    onChange, 
    ...props 
}) {
    // Tạo ID ngẫu nhiên cho mỗi input để nối với label (htmlFor)
    const defaultId = useId();
    const inputId = props.id || defaultId;

    return (
        <div className="container my-2">
            <input
                id={inputId}
                type={type}
                className="input"
                value={value}
                onChange={onChange}
                /* Khoảng trắng ở placeholder rất quan trọng để thủ thuật CSS hoạt động */
                placeholder=" " 
                {...props}
            />
            <label htmlFor={inputId} className="label">
                {label}
            </label>
        </div>
    );
}

export default TextBox;
