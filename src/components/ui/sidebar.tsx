'use client'
import React from 'react'
import { Nav } from './nav'
import {
    ChevronRight,
    ChevronLeft,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UsersRound,
  } from "lucide-react"
import { Button } from './DashButton'

import { useWindowWidth } from '@react-hook/window-size'

type Props = {}

export default function Sidebar({}: Props) {

    const [isCollapsed, setIsCollapsed] = React.useState(false)

    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 768

    function toggleSidebar(){
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div className='relative min-w-[80px] border-r px-3 pb-10  sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5'>
            {!mobileWidth &&
                <div className='absolute right-[-20px] top-7'>
                    <Button variant='secondary' className='rounded-full p-2' onClick={toggleSidebar}>
                        {isCollapsed?<ChevronRight/>:<ChevronLeft />}
                        
                    </Button>
                </div>
            }
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                    title: "Dashboard",
                    href: "/dashboard",
                    icon: LayoutDashboard,
                    variant: "default",
                    },
                    {
                    title: "Hackathon Updates",
                    href: "/hackathon",
                    icon: UsersRound,
                    variant: "ghost",
                    },
                    {
                    title: "Join Community",
                    href: "/community",
                    icon: ShoppingCart,
                    variant: "ghost",
                    },
                    {
                    title: "Post Jobs",
                    href: "/jobs",
                    icon: Settings,
                    variant: "ghost",
                    },
                ]}
            />
        </div>
    )
}