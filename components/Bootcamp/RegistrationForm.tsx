"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/ui/Bootcamp/button";
import { cn } from "@/lib/Bootcamp/utils";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/Bootcamp/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/Bootcamp/form";
import { Input } from "@/ui/Bootcamp/input";
import { Textarea } from "@/ui/Bootcamp/textarea";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  middleName: z.string().optional(),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phoneNumber: z.string().min(10, "Please enter a valid phone number."),
  location: z.string().min(1, "Please select your location."),
  course: z.string().min(1, "Please select your preferred course."),
  skillLevel: z.string().min(1, "Please select your skill level."),
  enrollmentGoal: z.string().min(1, "Please select your enrollment goal."),
  educationalStatus: z
    .string()
    .min(1, "Please select your educational status."),
  referralSource: z
    .string()
    .min(5, "Please let us know how you heard about us."),
  availability: z.string().min(5, "Please let us know your availability."),
  contactMethod: z
    .string()
    .min(1, "Please select your preferred contact method."),
});

const RegistrationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      middleName: "",
      referralSource: "",
      availability: "",
    },
  });

  const [showModal, setShowModal] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const serviceID = "service_aa9zpom";
      const templateID = "template_ter5rl4";

      await emailjs.send(
        serviceID,
        templateID,
        {
          first_name: values.firstName,
          middle_name: values.middleName || "",
          last_name: values.lastName,
          email: values.email,
          phone_number: values.phoneNumber,
          location: values.location,
          course: values.course,
          skill_level: values.skillLevel,
          goal: values.enrollmentGoal,
          education_status: values.educationalStatus,
          how_did_you_hear: values.referralSource,
          available_for_call: values.availability,
          best_way_to_reach: values.contactMethod,
        },
        "yiLVe4RkF36NThW-L"
      );

      //  Show the modal first
      setShowModal(true);

      //  Then hide it after 5 seconds
      setTimeout(() => setShowModal(false), 5000);

      // Optional toast
      toast({
        title: "Form submitted!",
        description:
          "One of our educational advisors will call you back shortly.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <>
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent pb-1">
              Start Your Application
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
              Fill in the form below to be called back by one of our educational
              advisors and join the course of your choice.
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Once we receive your request, an advisor will call you back
              shortly to discuss about your project and help you find the best
              course adapted to your background and goals.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 pb-3 border-b border-gray-700/50">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            First name*
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                              value={field.value ?? ""}
                              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="middleName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Middle name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your middle name (optional)"
                              {...field}
                              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Last name*
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                              value={field.value ?? ""}
                              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Email*
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email address"
                              type="email"
                              {...field}
                              value={field.value ?? ""}
                              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Phone number*
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your phone number"
                              type="tel"
                              {...field}
                              value={field.value ?? ""}
                              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Pick your location*
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-brand-primary focus:ring-brand-primary/20">
                                <SelectValue placeholder="Select your preferred location" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              <SelectItem value="online">Online</SelectItem>
                              <SelectItem value="onsite">Onsite</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* Course and Program Preferences */}
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 pb-3 border-b border-gray-700/50">
                    Course & Program Preferences
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Choose your preferred course*
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-brand-primary focus:ring-brand-primary/20">
                                <SelectValue placeholder="Select your preferred course" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              <SelectItem value="ui-ux">UI & UX</SelectItem>
                              <SelectItem value="frontend">
                                Frontend development
                              </SelectItem>
                              <SelectItem value="backend">
                                Backend development
                              </SelectItem>
                              <SelectItem value="fullstack">
                                Fullstack development
                              </SelectItem>
                              <SelectItem value="growth-marketing">
                                Growth Marketing
                              </SelectItem>
                              <SelectItem value="data-science">
                                Data Science
                              </SelectItem>
                              <SelectItem value="cybersecurity">
                                Cybersecurity
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="skillLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            Select your skill level*
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-brand-primary focus:ring-brand-primary/20">
                                <SelectValue placeholder="Select your skill level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="basic">Basic</SelectItem>
                              <SelectItem value="intermediate">
                                Intermediate
                              </SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="enrollmentGoal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">
                          What is your goal for enrolling?*
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-brand-primary focus:ring-brand-primary/20">
                              <SelectValue placeholder="Select your goal" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-600">
                            <SelectItem value="find-job">Find a job</SelectItem>
                            <SelectItem value="improve-role">
                              Improve in my current role
                            </SelectItem>
                            <SelectItem value="personal-project">
                              Launch my personal project
                            </SelectItem>
                            <SelectItem value="freelancer">
                              Become a freelancer
                            </SelectItem>
                            <SelectItem value="skills">
                              Learn practical skills to my studies
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="educationalStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">
                          Which option below best represents your educational
                          status?*
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-brand-primary focus:ring-brand-primary/20">
                              <SelectValue placeholder="Select your educational status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-600">
                            <SelectItem value="high-school">
                              High School Student
                            </SelectItem>
                            <SelectItem value="higher-institution">
                              Higher Institution Student
                            </SelectItem>
                            <SelectItem value="self-employed">
                              Self-employed/freelancer
                            </SelectItem>
                            <SelectItem value="working-professional">
                              Working professional
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Information Section */}
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 pb-3 border-b border-gray-700/50">
                    Additional Information
                  </h3>

                  <FormField
                    control={form.control}
                    name="referralSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">
                          How did you hear about us?*
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us how you discovered our bootcamp"
                            className="resize-none bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">
                          When are you available for a call?*
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide your availability for a callback"
                            className="resize-none bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary/20"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">
                          What is the best way to reach you?*
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-brand-primary focus:ring-brand-primary/20">
                              <SelectValue placeholder="Select your preferred contact method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-600">
                            <SelectItem value="phone">Phone call</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-700/50">
                  <Button
                    type="submit"
                    disabled={!form.formState.isValid}
                    className={cn(
                      "bg-brand-primary hover:bg-brand-primary/80 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 w-full md:w-auto",
                      !form.formState.isValid && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Form Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 text-center border border-gray-700/50">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Success!</h2>
            <p className="text-gray-300 mb-6">
              Your application has been submitted successfully. One of our
              educational advisors will contact you shortly.
            </p>
            <Button
              onClick={() => setShowModal(false)}
              className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
