import DateObject from "react-date-object";

function Hello() {
    var date = new DateObject();
    return(
        <>
            <div className="flex flex-col justify-start align-middle back p-2 w-full">
                <p className="text-blue-100 text-3xl border-l border-green-600 pl-2">Hello Morteza</p>
                <p className="text-blue-100 mt-2 text-sm">today is <p className="text-green-600 text-sm">{date.format('dddd, DD MMMM, YYYY')}</p>
                
                </p>
            </div>
        </>
    )
}

export default Hello;