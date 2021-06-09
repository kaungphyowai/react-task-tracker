import PropType from 'prop-types'
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    "title": "Task Trackder"
}

Header.propTypes = {
    "title": PropType.string.isRequired,
}
export default Header
