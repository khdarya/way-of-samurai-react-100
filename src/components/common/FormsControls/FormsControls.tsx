import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from "./FormsControls.module.css"

// const FormControl: React.FC<WrappedFieldProps> = (input, meta, child, ...props) => {
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 {props.children}
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
//
// export const TextArea: React.FC<WrappedFieldProps> = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
// }
// export const Input: React.FC<WrappedFieldProps> = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
// }


export const TextArea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
            <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}