// "use client" ensures this component runs on the client-side
"use client";

import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Dummy data for users
const dummyUsers = [
  { name: "Jhon Doe", username: "jhon-doe", email: "jhon@example.com", role: "Admin" },
  { name: "Jane Smith", username: "jane-smith", email: "jane@example.com", role: "Editor" },
  { name: "Mike Ross", username: "mike-ross", email: "mike@example.com", role: "User" },
];

// UsersPage Component
export default function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      
      {/* Table Component */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {dummyUsers.map((user) => (
            <TableRow key={user.username}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Link href={`/users/${user.username}`} className="text-blue-500 hover:underline">
                  View Profile
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
