import { TabsWithReactRouter, TabsWithOutReactRouter } from '~/components/TABS'

const Tabs = () => {
    return (
        <div className='flex flex-col gap-10 p-10'>
            <div className='space-y-3'>
                <h3 className='font-medium'># Tabs With ReactRouter</h3>
                <TabsWithReactRouter />
            </div>
            <div className='space-y-3'>
                <h3 className='font-medium'># Tabs Without ReactRouter</h3>
                <TabsWithOutReactRouter tabId={'tabs'} />
            </div>
        </div>
    )
}

export default Tabs