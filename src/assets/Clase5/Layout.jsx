import BaseLayout from "./BaseLayout";

const Layout = ({children, parque}) => {
    return(
        <>
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{parque}</h1>
                    <BaseLayout clase={"fw-light"} >
                    {children}
                    </BaseLayout>
                </div>
            </div>
        </div>

        </>
    )
}

export default Layout;