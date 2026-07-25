import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import SectionTitle from '@/components/ui/section-title';
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Please enter a valid age"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  level: z.string(),
  classType: z.string()
});

const StudentRegistration = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
      level: "",
      classType: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Registration Submitted Successfully",
      description: "We will contact you shortly. For faster response, you can reach us at 8762562549.",
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Student Registration"
            subtitle="Join our chess training program and start your journey to mastery"
            center
          />
          
          <Card className="max-w-2xl mx-auto mt-8 p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student's Age</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter age" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Program Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select program level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="b1">Beginner Level 1 (10 sessions)</SelectItem>
                          <SelectItem value="b2">Beginner Level 2 (15 sessions)</SelectItem>
                          <SelectItem value="b3">Beginner Level 3 (30 sessions)</SelectItem>
                          <SelectItem value="intA">Intermediate A (12 sessions)</SelectItem>
                          <SelectItem value="intB">Intermediate B (14 sessions)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="classType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Class Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="one-on-one">One-on-One Training</SelectItem>
                          <SelectItem value="group">Group Classes</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-chess-primary hover:bg-chess-secondary">
                  Submit Registration
                </Button>

                <p className="text-center mt-4 text-gray-600">
                  After registration, we'll contact you shortly. For faster response, please contact us at: 
                  <span className="font-semibold text-chess-primary"> 8762562549</span>
                </p>
              </form>
            </Form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentRegistration;
