export default function InputField({h3 , placeholder }) {
    return (
        <div className='block'>
            <h3 className='h3block'>{h3}</h3>
            <input className='blockinput' placeholder={placeholder} />
        </div>
    )
}