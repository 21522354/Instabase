import React, { useId } from 'react';
import styles from './TextBox.module.css';

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
        <div className={styles.container}>
            <input
                id={inputId}
                type={type}
                className={styles.input}
                value={value}
                onChange={onChange}
                /* Khoảng trắng ở placeholder rất quan trọng để thủ thuật CSS hoạt động */
                placeholder=" " 
                {...props}
            />
            <label htmlFor={inputId} className={styles.label}>
                {label}
            </label>
        </div>
    );
}

export default TextBox;