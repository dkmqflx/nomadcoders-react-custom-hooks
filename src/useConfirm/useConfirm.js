
const useConfirm = (message = "", onConfirm, onCancel) => {

    if(typeof onComfirm !== "function" || typeof onCancel !== "function"){
        return
    }

    const confirmAction = () => {
        if(window.confirm(message)){
            onConfirm()
        }else{
            onCancel()
        }
    }

    return confirmAction
}

export default useConfirm
