import React from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input, TextArea} from "../../common/FormsControls/FormsControls";
import styles from  '../../common/FormsControls/FormsControls.module.css';
import {required} from "../../../utils/validators/validators";


type ProfileDataFormType = {
    profile: UserProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<UserProfileType, ProfileDataFormType> & ProfileDataFormType>  = (props) => {
    const {profile, handleSubmit, error} = props;
    return (
    <form onSubmit={handleSubmit}>
        <div>
            <button> Save</button>
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                Your name : <Field name={'fullName'} component={Input} placeholder={'Full Name'} validate={[required]}
            />
            </div>
            <div>
                Looking for a job? <Field name={'lookingForAJob'} component='input' type='checkbox'
            />
            </div>
            <div>
                Skills : <Field name={'lookingForAJobDescription'} component={TextArea}
            />
            </div>
            <div>
                About Me: <Field name={'aboutMe'} component={TextArea}
            />
            </div>
            <div>
                <b>Contacts :</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <div>{key} :</div>
                    <Field name={'contacts.' + key} component='input'/>
                </div>
            })
            }
            </div>
        </div>
    </form>
    )
}

const ProfileDataReduxForm = reduxForm<UserProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataReduxForm;