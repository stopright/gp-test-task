import React from 'react'

export const ProfileHeader = ({authData, authFunctions}) => {

    return (
       <header className={"container-fluid bg-primary height-10 flex-space-between rounded-bottom"}>
           <div className={"flex-column"}>
               <span id="role" className={"text-white"}>Роль в системе: <strong>{authData.role}</strong></span>
               <span id="role" className={"text-white"}>Подразделение: <strong>{authData.department}</strong></span>
           </div>
           <div className={"flex-column"}>
                <span id="greet" className={"text-white"}>Добро пожаловать, <strong>{authData.name}</strong>.</span>
                <button className={"btn btn-light mt-2"} onClick={authFunctions.logoutFn}>Выйти из системы</button>
            </div>
       </header>

    )
}
