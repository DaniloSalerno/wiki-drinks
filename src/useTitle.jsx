import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Wiki Drinks - ${title}`
    }, [title])
}

export default useTitle