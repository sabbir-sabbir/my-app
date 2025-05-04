import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";


export default function Home(){
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4 ">

{/* child */}
<div className="bg-primary-foreground py-2 px-2 rounded-md lg:col-span-2"><AppBarChart/></div>
<div className="bg-primary-foreground p-4 rounded-md "><CardList title="Popular Content" /></div>
<div className="bg-primary-foreground p-4 rounded-md "><AppPieChart/></div>
<div className="bg-primary-foreground p-4 rounded-md "><TodoList/></div>
<div className="bg-primary-foreground py-2 px-2 rounded-md lg:col-span-2 "><AppAreaChart/></div>
<div className="bg-primary-foreground p-4 rounded-md "><CardList title="Latest Transaction" /></div>

</div>
    </>
  )
}