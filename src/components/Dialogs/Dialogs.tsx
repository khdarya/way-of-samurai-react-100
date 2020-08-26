import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';

export type DialogsPropsType = {

}

const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>


            </div>
            <div className={s.messages}>


            </div>

            <div><textarea placeholder='Enter your message'/></div>
            <div>
                <button >Add message</button>
            </div>
        </div>

    )
}
export default Dialogs;