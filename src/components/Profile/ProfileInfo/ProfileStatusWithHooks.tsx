import React, {ChangeEvent, useState} from "react";



type ProfileStatusWithHooksPropType = {
    status: string
    editMode?: boolean
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropType) => {

     let [editMode, setEditMode]  = useState(false);
     let [status, setStatus]  = useState(props.status);

     const activateEditMode = () => {
         setEditMode(true);
     }
     const deactivateEditMode = () => {
         setEditMode(false);

     }
     const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
         setStatus(e.currentTarget.value);
         props.updateStatus(status);
     }

        return (
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}> {props.status || "-------"} </span>
                </div>
                }
                { editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
                }
            </div>

        )

}

export default ProfileStatusWithHooks;