
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageSquarePlus, Star } from "lucide-react";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  class: z.string().min(3, "Class details must be at least 3 characters."),
  quote: z.string().min(10, "Feedback must be at least 10 characters."),
  rating: z.number().min(1, "Please provide a rating.").max(5),
});

export function FeedbackForm() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      class: "",
      quote: "",
      rating: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Database not available. Please try again later.",
        });
        return;
    }
    
    try {
      const feedbackData = {
        ...values,
        createdAt: serverTimestamp(),
      };
      
      const feedbacksCollection = collection(firestore, 'student-feedback');
      addDocumentNonBlocking(feedbacksCollection, feedbackData);

      toast({
        title: "Feedback Submitted!",
        description: "Thank you for sharing your thoughts with us.",
      });
      form.reset();
      setRating(0);
    } catch (error) {
      console.error("Failed to submit feedback:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem submitting your feedback. Please try again later.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                    <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Your Class</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., Class XII, CBSE" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <Star
                        key={starValue}
                        className={`h-7 w-7 cursor-pointer transition-colors ${
                          (hoverRating || rating) >= starValue
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                        onMouseEnter={() => setHoverRating(starValue)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => {
                          setRating(starValue);
                          field.onChange(starValue);
                        }}
                      />
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Feedback</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit Feedback"}
          <MessageSquarePlus className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
