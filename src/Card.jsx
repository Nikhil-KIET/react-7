function Card(props) {
    return (
        <div className="flex items-center flex-col border-solid border-2  m-3 ">
            <div className="">
            <div className="w-[180px] h-[180px] m-2" style={{backgroundColor:`#${props.hex}`}}>
               
              
            </div>
            
        </div>
        <h1 className=" text-lg font-bold">{props.hex}</h1>
        <h1 className=" text-lg font-medium "> {props.item.name} </h1>
        </div>
    );
}

export default Card;
