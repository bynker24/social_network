import React from "react";
import s from "./Profile.module.css"


const Profile = () => {
    return <div className={s.content}>
        <img src='https://s1.1zoom.ru/b5050/612/Sunrises_and_sunsets_Forests_Scenery_Grass_Rays_of_587227_3840x2160.jpg' />

        <a>Main content</a>

        <div className="avaDescription">

        </div>

        <div className={s.li}>
        <li>Новый пост!</li>

        </div>

        <div className={s.li}>
            <li>Новый пост!</li>

        </div>



    </div>
}

export default Profile;
