


import { Payment, columns } from "./column";
import { DataTable } from "./data-table";
import Back from "./back-button";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed566",
      amount: 250,
      status: "pending",
      username: "john_doe",
      email: "john.doe@example.com",
    },
    {
      id: "829sd441",
      amount: 480,
      status: "paid",
      username: "jane_smith",
      email: "jane.smith@example.com",
    },
    {
      id: "937ak312",
      amount: 120,
      status: "failed",
      username: "mike_ross",
      email: "mike.ross@example.com",
    },
    {
      id: "104ab992",
      amount: 760,
      status: "refunded",
      username: "rachel_zane",
      email: "rachel.zane@example.com",
    },
    {
      id: "653ed477",
      amount: 340,
      status: "paid",
      username: "harvey_specter",
      email: "harvey.specter@example.com",
    },
    {
      id: "934fd219",
      amount: 530,
      status: "pending",
      username: "louis_litt",
      email: "louis.litt@example.com",
    },
    {
      id: "223ac871",
      amount: 275,
      status: "paid",
      username: "donna_paulsen",
      email: "donna.paulsen@example.com",
    },
    {
      id: "367bk102",
      amount: 690,
      status: "refunded",
      username: "jessica_pearson",
      email: "jessica.pearson@example.com",
    },
    {
      id: "481df683",
      amount: 110,
      status: "failed",
      username: "sheila_sazs",
      email: "sheila.sazs@example.com",
    },
    {
      id: "512ec304",
      amount: 850,
      status: "paid",
      username: "katrina_bennett",
      email: "katrina.bennett@example.com",
    },
    {
      id: "679de905",
      amount: 430,
      status: "pending",
      username: "stu_leonard",
      email: "stu.leonard@example.com",
    },
    {
      id: "790fa106",
      amount: 360,
      status: "paid",
      username: "ethan_roark",
      email: "ethan.roark@example.com",
    },
    {
      id: "881gb207",
      amount: 215,
      status: "failed",
      username: "trevor_evans",
      email: "trevor.evans@example.com",
    },
    {
      id: "932hc308",
      amount: 590,
      status: "refunded",
      username: "scotty",
      email: "scotty@example.com",
    },
    {
      id: "003id409",
      amount: 705,
      status: "paid",
      username: "harold_gunderson",
      email: "harold.gunderson@example.com",
    },
    {
      id: "114je510",
      amount: 495,
      status: "pending",
      username: "claire_bowden",
      email: "claire.bowden@example.com",
    },
    {
      id: "225kf611",
      amount: 650,
      status: "paid",
      username: "amy_sanders",
      email: "amy.sanders@example.com",
    },
    {
      id: "336lg712",
      amount: 330,
      status: "failed",
      username: "paul_porter",
      email: "paul.porter@example.com",
    },
    {
      id: "447mh813",
      amount: 770,
      status: "refunded",
      username: "maria_hill",
      email: "maria.hill@example.com",
    },
    {
      id: "558ni914",
      amount: 615,
      status: "paid",
      username: "tony_stark",
      email: "tony.stark@example.com",
    },
  ];
};

const Payments = async () => {
  const data = await getData();
  return (
    <>
      <div>
        <div className="mb-8 px-4 py-2 bg-secondary rounded-md flex items-center gap-8">
            <Back/>
          <h1 className="font-semibold">All Payments</h1>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Payments;
