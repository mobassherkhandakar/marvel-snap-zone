import { useEffect } from "react"

const useTitle = title =>{
  useEffect(()=>{
    document.title = `${title} - Toy- Marketplace`
  },[title])
}
export default useTitle
