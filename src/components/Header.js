import PropType from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color='green' text='Add' />
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
