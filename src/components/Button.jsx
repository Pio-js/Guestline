export const Button = (props) => {


    function updateCount(value){
        if(props.count === 0 && props.sign === '-'){
            props.updateCount({count: 0});
        }else{
            props.updateCount({count: props.count + value});
        }
    }
    return (
        <div className='sign' onClick={() => props.sign === "+" ? updateCount(1) : updateCount(-1)} >
            {props.sign}
        </div>

    );
}