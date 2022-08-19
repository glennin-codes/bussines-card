import { Products } from "./product"

 export default function Card(){
    return(
        <div className="app--items">


            {Products.map((product)=>{
              return  (
                 <div key={product.id} className="container ">  
                    <div className="card">
                         <img
                                src={product.image}
                                className="card--img"
                                alt={product.name}

                            />
                        <nav className="text--area">
                                <h1 className="card--title">{product.name}</h1>
                                <p>{product.description}</p>
                                <h3>{product.price}</h3>
                        </nav>
                        
                        <nav className="card--button">
                                <button className="add--card"> add cart</button>
                        </nav>
                    </div>
                </div>
            )

            })}
      
        
    </div>
    )
  }