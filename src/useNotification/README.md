# Usage


### useFullScreen

- 사용자에게 notification을 보여줄 수 있는 hook

```jsx
import useNotification from './useNotification/useNotification'

function App() {

    const triggerNotification = useNotification("Notification Click", {body:'notification body'})

    return (
        <div >
            <button onClick={triggerNotification}>Notificatoin Button</button>
        </div>
    )
}

export default App;


```

```jsx

const useNotification = (title, option) => {

    const triggerNotification = () => {
        // browser에 notification이 지원되지 않는 경우도 있다.
        if(!("Notification" in window)){
            return
        }
        
        //permision은 granted, default, denied 값을 갖는다.
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

```