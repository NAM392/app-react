const CurrencyFields = ({divisa, value, onChange}) =>{

    return (
        <div className="mb-3" >
            <label className="form-label" >{divisa}</label>
            <input type="number" className="form-control" value={value} onChange={(e)=>{onChange(e.target.value)}} aria-describedby="emailHelp" ></input>
            <div  className="form-text" ></div>


        </div>



    )



}

export default CurrencyFields