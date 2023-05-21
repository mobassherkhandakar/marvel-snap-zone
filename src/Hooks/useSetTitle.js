import { useEffect } from "react"

const useTitle = title =>{
  useEffect(()=>{
    document.title = `${title} -  MARVEL-Snap-Zone`
  },[title])
}
export default useTitle
