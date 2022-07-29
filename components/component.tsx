const MenuTester = (data:any) => {
    console.log(data)
    return(
        <div>
           {data.data.map((item:any, index:number) => {
            return (
                <div key={index}>{item.image_highres}</div>
            )
           })}
        </div>
    )
}

export default MenuTester