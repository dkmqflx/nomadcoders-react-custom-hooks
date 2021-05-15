
const useNotification = (title, option) => {

    const triggerNotification = () => {
        if(!("Notification" in window)){
            return
        }

        if(Notification.permission !== "granted"){
            Notification.requestPermission().then((permission) => {
                if(permission === "granted"){
                    new Notification(title, option)
                }else{
                    return
                }
            })
        }else{
            new Notification(title, option)
        }
    }

    return triggerNotification
}

export default useNotification
