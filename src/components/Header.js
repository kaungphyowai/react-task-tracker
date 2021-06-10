import PropType from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({ title, onClickAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1 >{title}</h1>
            {   location.pathname === '/' &&
                <Button onClick={onClickAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />}

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
