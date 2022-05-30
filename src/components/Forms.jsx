

const Forms = ({form}) => {

    //console.log('form', form.formFields)

    let fields = Object.entries(form.formFields).map(field => <>
        {/* {console.log(field[0])} */}
        <div>
            <label>{field[0]}</label>
            <input type='text' />
        </div>
    </>)

console.log('fields', fields)

    return (
        <div>{fields}</div>
    )
}

export default Forms