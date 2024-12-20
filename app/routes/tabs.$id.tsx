import { useParams } from '@remix-run/react';

const TabsIdRoute = () => {
    const { id } = useParams();
    return (
        <div>{id}</div>
    )
}

export default TabsIdRoute