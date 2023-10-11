import { Button } from "./Button"
import { useLocation } from "react-router-dom"
interface HeaderType {
    title?: string
    onAdd: () => void
    showTask: boolean

}
const color = {
    backgroundCor: "red"
}

const Header: React.FC<HeaderType> = ({ title, onAdd, showTask }) => {
    const location = useLocation()
    return (
        <header className="header">
            {<h1 className="text-[24px]">{title}</h1>}


            {location.pathname === '/home' && (<Button className={`${showTask ? color : " "}  btn`}
                text={showTask ? "Close" : "Add"}
                backgroundColor={showTask ? "red" : "green"}
                onClick={onAdd} />)}
        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker"

}

export default Header