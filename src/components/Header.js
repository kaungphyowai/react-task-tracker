import PropType from 'prop-types'
import Button from './Button'
const Header = ({ title, onClickAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button onClick={onClickAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />
        </header>
    )
}

Header.defaultProps = {
    "title": "Task Trackder"
}

Header.propTypes = {
    "title": PropType.string.isRequired,
}
//CSS styling in JSX
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header
