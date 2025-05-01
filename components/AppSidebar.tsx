import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus,  Projector,  Search, Settings,  User2, Users } from 'lucide-react'
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup,  SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from './ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const AppSidebar = () => {

    const items = [
        {
            title: "Home",
            url: "/",
            icon: Home
        },
        {
            title: "Inbox",
            url: "#",
            icon: Inbox
        },
        {
            title: "Users",
            url: "/users",
            icon: Users
        },
        {
            title: "Calendar",
            url: "#",
            icon: Calendar
        },
        {
            title: "Search",
            url: "#",
            icon: Search
        },
        {
            title: "Setting",
            url: "#",
            icon: Settings
        }
    ];
  return (
  <>
  <Sidebar collapsible='icon'  >
    <SidebarHeader className='py-4'>
     <SidebarMenu>
        <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
             <Link href="/">
             <Image src="https://images.unsplash.com/photo-1560456001-bac27801a851?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Logo" width={30} height={30} />
             <span>SABBIR </span>
             </Link>
            </SidebarMenuButton>
        </SidebarMenuSubItem>
     </SidebarMenu>
    </SidebarHeader>
    <SidebarSeparator  />
    <SidebarContent>
     <SidebarGroup>
        <SidebarGroupLabel>Application </SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
                {items.map((item, index)=> (
                     <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild >
                        <Link href={item.url}>
                        <item.icon/>
                        <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                      {item.title === "Inbox" && (
                        <SidebarMenuBadge>24</SidebarMenuBadge>
                      )}
                     </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
     </SidebarGroup>


     {/* second grupe */}

      <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup className='border-t-2 border-gray-200'>
        <SidebarGroupLabel asChild>
        <CollapsibleTrigger>
        CollapsibleGrupe
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
             </SidebarGroupLabel>
        
        <CollapsibleContent>
        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/">
                        <span>Grupe 1 </span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/">
                        <span>Grupe 2</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/">
                        <Plus/> <span>Add Grupe</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
     </SidebarGroup>
      </Collapsible>


      {/* nested  */}
      <SidebarGroup className='border-t-2 border-gray-200'>
        <SidebarGroupLabel>
      Nested Items
       </SidebarGroupLabel>
        
    
        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/">
                        <Projector/>
                        <span>See All Projects</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                             <Link href="/#">
                             <Plus/>
                              Add Project
                             </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                             <Link href="/#">
                             <Plus/>
                              Add Category
                             </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
      
     </SidebarGroup>
     
    </SidebarContent>
    <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                       <SidebarMenuSubButton>
                        <User2/> Jhon Doe <ChevronUp className='ml-auto' />
                       </SidebarMenuSubButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuItem>Account</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Sign Out</DropdownMenuItem>
                        <DropdownMenuItem>Lern More</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
  </>
  )
}

export default AppSidebar