import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Spinner } from "./Spinner"
import { Link,Container } from "./ShareLayout.styled"




export const SharedLayout = () => {
    return <Container>
    <ul>
    <Link to='/'>Home</Link>
    <Link to='/movies'>Movies</Link>
    </ul>
    <Suspense fallback={<Spinner/>}>
    <Outlet/>
    </Suspense>
    </Container>

}