import React from 'react'
import ProCard from './ProCard'
import data from  "../../Details.json"
import Txt from '../Others/Txt'



const ProArea = () => {
 /* const target=useRef("")
  useEffect(
    ()=>{
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
      }
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            func()
            observer.unobserve(entry.target);
          }               
      })
        
      }
      let observer = new IntersectionObserver(callback, options);
      observer.observe(target.current);
    
    },[]
  )
*/
  return (
   <div className="relative pt-80 ">
    <A/>
    <div className="text-[150px] md:text-[300px] lg:text-[400px] grey h-[400px] flex items-center absolute top-10 -z-10">Works</div>
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5" >
    {
        data.data.projects.map(
            (pro)=>{
                return <ProCard theme={pro.theme} src={pro.src} url={pro.url}/>
            }
        )
    }
    </div>

   </div>
  )
}

const A = () => {
    return (
      <>
       <div className="absolute top-[100px] left-[50px]">  
      <Txt txt='h1'/>
      </div>
         <div className="absolute top-[320px] left-[80px]">  
      <Txt txt='h1'/>
      </div>
      <div className="absolute top-[300px] left-[15px]">  
      <Txt txt='section'/>
      </div>
      <div className="absolute top-[1000px] left-[15px]">  
      <Txt txt='section'/>
      </div>
      <div className="absolute bottom-[35px] left-[200px]">  
      <Txt txt='button'/>
      </div>
      <div className="absolute -bottom-[35px] left-[300px]">  
      <Txt txt='button'/>
      </div>
      </>
    )
  }
  
export default ProArea