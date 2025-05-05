import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetTrigger
} from "@/components/ui/sheet";
import EditUser from "@/components/EditUser";
import AppLineChart from "@/components/AppLineChart";
import {
  BadgeCheck,
  Citrus,
  Apple,
  Candy,
  Grab,
  IceCream,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import CardList from "@/components/CardList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PageProps {
  params: {
    username: string;
  };
}

export default function SingleUserPage({ params }: PageProps) {
  const username = params?.username ?? "";

  const displayName = username
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  if (!username) {
    return <div>Error: Username not found</div>;
  }

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/payments">Payments</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/users/${username}`}>{displayName}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-2 flex flex-col md:flex-row gap-4">
        {/* Left Panel */}
        <div className="w-full md:w-1/3 space-y-3">
          <div className="bg-primary-foreground p-4 rounded-md">
            <h1 className="font-sm tracking-wide">User Badges</h1>
            <div className="flex gap-4 mt-2">
              {[BadgeCheck, Citrus, Apple, Candy, Grab, IceCream].map((Icon, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger>
                    <Icon size={30} className="rounded-full bg-blue-500/30 border p-1" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Verified User</h1>
                    <p className="text-sm text-muted-foreground">
                      This user has been verified by the <span className="text-destructive">Admin</span>
                    </p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          <div className="bg-primary-foreground p-4 rounded-md">
            <div className="flex items-center justify-between">
              <h1 className="font-sm tracking-wide">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex flex-col gap-2 mb-2">
                <p className="text-sm text-muted-foreground">Profile Completion</p>
                <Progress value={33} />
              </div>
              <div className="flex items-center gap-3"><span className="font-bold">Username:</span><span>{displayName}</span></div>
              <div className="flex items-center gap-3"><span className="font-bold">Email:</span><span>{username}@example.com</span></div>
              <div className="flex items-center gap-3"><span className="font-bold">Phone:</span><span>+99 324 679 88</span></div>
              <div className="flex items-center gap-3"><span className="font-bold">Location:</span><span>NewYork, NY</span></div>
              <div className="flex items-center gap-3"><span className="font-bold">Role:</span><Badge>Admin</Badge></div>
            </div>
            <p className="text-sm text-muted-foreground py-2">Joined on: 2025.01.01</p>
          </div>

          <div className="bg-primary-foreground p-4 rounded-md">
            <CardList title="Popular Content" />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-2/3 space-y-3">
          <div className="bg-primary-foreground p-4 rounded-md space-y-2">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="https://images.unsplash.com/photo-1742836531271-98fd8151d257?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <AvatarFallback>{displayName.split(" ")[0][0]}{displayName.split(" ")[1]?.[0] || ""}</AvatarFallback>
              </Avatar>
              <h1 className="text-lg font-semibold">{displayName}</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam eaque eveniet voluptatem debitis molestiae hic
              odio totam a sapiente, adipisci tempore quae! Repudiandae, ad.
            </p>
          </div>

          <div className="bg-primary-foreground p-4 rounded-md">
            <h1 className="text-lg font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
