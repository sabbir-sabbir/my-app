"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

// zod schema for form validation
const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username name must be atleast two characters!" })
    .max(50),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be atleast 10 characters!" }),
  location: z
    .string()
    .min(2, { message: "Location must be atleast two characters!" }),
  role: z.enum(["admin", "user"]),
});

const EditUser = () => {
  // useFormhook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "John Doe",
      email: "example@gmail.com",
      phone: "1234567890",
      location: "New York, NY",
      role: "user",
    },
  });

  return (
    <>
      <div>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mb-4">Edit User</SheetTitle>
            <SheetDescription asChild><Form {...form}>
            <form action="" className="space-y-4 py-1 px-4 mb-4 overflow-y-scroll">
              {/* username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username:</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      <span>This is your public username.</span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      <span>Only Admin can see your email.</span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone:</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      <span>Only Admin can see your Phone.</span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location:</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      <span>Your Address or Location.</span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/*role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                          
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      <span>Only Varified users can be admin.</span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </div>
    </>
  );
};

export default EditUser;
