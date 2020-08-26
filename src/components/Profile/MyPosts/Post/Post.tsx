import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
}

export const Post = (props: PostType) => {

    return (
        <div className={s.item}>
            <img
                src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg'/>
            {props.message}

        </div>
    )
}
