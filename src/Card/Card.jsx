import Image from "next/image"
import Link from "next/link"

const Card = ({name,iimage,model,power,max_speed}) => {
  return (
    <div className="main-card">
       
            <div className="car-haeding">
            <h2>{name}</h2>
            </div>
            <div className="imgs">
            <Image 
            src={iimage}
             
            style={{objectFit:'cover',objectPosition:'center'}}
           width={300}
           height={200}
            alt={model}
            priority
          
            />
            </div>
            <div className="car-details">
            <h4>Model : {model}</h4>
            <h4>Power : {power}</h4>
            <h4>Max-Speed : {max_speed}</h4>
            </div>
            <div className="info-btn-wrapper">
               <Link href={`/${encodeURIComponent(model.toLowerCase())}`} className="info-btn">View More</Link>
            </div>
       
       
    </div>
  )
}

export default Card