export default function InputField({ h3, placeholder , value , name , onChange, p, type}) {
    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            <p className="subtext">{p}</p>
            <input
                className='blockinput'
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                type={type?type:"text"}
            />
        </div>
    )
}