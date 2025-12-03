
import Image from "next/image";
import Link from "next/link";
import {
  Atom,
  BookOpen,
  BrainCircuit,
  ClipboardCheck,
  Dna,
  FlaskConical,
  Laptop,
  Mail,
  MapPin,
  Phone,
  Sigma,
  Users,
  Presentation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "@/components/contact-form";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");
const tutorImage = PlaceHolderImages.find((img) => img.id === "tutor-profile");

const courses = [
  {
    board: "CBSE",
    grades: "V - X",
    subjects: ["Science", "Math"],
    icon: Atom,
  },
  {
    board: "CBSE",
    grades: "XI - XII",
    subjects: ["Biology"],
    icon: Dna,
  },
  {
    board: "ICSE",
    grades: "V - X",
    subjects: ["Math", "Physics", "Chemistry", "Biology"],
    icon: Sigma,
  },
  {
    board: "ICSE",
    grades: "XI - XII",
    subjects: ["Biology"],
    icon: Dna,
  },
  {
    board: "WBBSE",
    grades: "IX - X",
    subjects: ["Life Science"],
    icon: BrainCircuit,
  },
  {
    board: "WBCHSE",
    grades: "XI - XII",
    subjects: ["Biology"],
    icon: FlaskConical,
  },
];

const benefits = [
  {
    title: "Online Classes",
    description: "Attend live, interactive classes from the comfort of your home.",
    icon: Laptop,
  },
  {
    title: "Free Study Materials",
    description: "Access curated notes and resources to supplement your learning.",
    icon: BookOpen,
  },
  {
    title: "Weekly Mock Tests",
    description: "Regular assessments to track your progress and identify areas for improvement.",
    icon: ClipboardCheck,
  },
  {
    title: "Remedial Classes",
    description: "Extra support for students who need help to catch up on topics.",
    icon: Users,
  },
  {
    title: "Modern Teaching",
    description: "Projector and laptop-based classes for a dynamic learning experience.",
    icon: Presentation,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-5xl md:text-7xl drop-shadow-md">
            Unlock Your Potential in Science
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 drop-shadow-sm">
            Expert guidance in Biology, Science, and Math to help you achieve your academic dreams.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#contact">Enroll Now</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 bg-background">
        <div className="container">
          <Card className="overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 flex items-center justify-center p-8 bg-secondary/50">
                {tutorImage && (
                  <Avatar className="h-48 w-48 border-4 border-white shadow-md">
                    <AvatarImage src={tutorImage.imageUrl} alt="Tutor" data-ai-hint={tutorImage.imageHint}/>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                )}
              </div>
              <div className="md:col-span-2 p-8 md:p-12">
                <h2 className="font-headline text-4xl text-primary">About the Tutor</h2>
                <p className="mt-4 text-muted-foreground text-lg font-bold">Aditya Banerjee</p>
                <p className="mt-2 text-muted-foreground">
                  An experienced and passionate Science Tutor dedicated to fostering a love for learning.
                </p>
                <div className="mt-6 space-y-2">
                  <h3 className="font-bold text-lg">Qualifications:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">B.Sc.</Badge>
                    <Badge variant="secondary">M.Sc.</Badge>
                    <Badge variant="secondary">B.Ed.</Badge>
                    <Badge variant="secondary">D.El.Ed.</Badge>
                  </div>
                </div>
                <p className="mt-6">
                  With a strong academic background and professional training in education, I provide comprehensive and effective tutoring tailored to each student's needs. My goal is to build a strong conceptual foundation and make learning an engaging and rewarding experience.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="courses" className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">Our Courses</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Structured programs for various boards to ensure academic excellence.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card key={index} className="flex flex-col text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <course.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">{course.board}</CardTitle>
                  <CardDescription className="text-base">{course.grades}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap justify-center gap-2">
                    {course.subjects.map((subject) => (
                      <Badge key={subject} variant="outline">{subject}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 sm:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">Why Choose BioMyDream?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We provide a complete learning ecosystem for our students.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">Get in Touch</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Have questions or want to enroll? Send a message or visit us.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card className="p-6 sm:p-8 shadow-lg">
                <ContactForm />
              </Card>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-8 flex flex-col justify-center h-full">
                <div>
                  <h3 className="font-headline text-2xl mb-4">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                      <div>
                        <h4 className="font-bold">Address</h4>
                         <a
                          href="https://maps.app.goo.gl/9qgU2h4ZVWDeTvBV7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary not-italic"
                        >
                          Block-A, Shiva Appartment, 12, Dunlop, Narendra Nagar, Beehive Garden, Belghoria, Kolkata, West Bengal 700056
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                      <div>
                        <h4 className="font-bold">Email</h4>
                        <a href="mailto:abanerje02@gmail.com" className="text-muted-foreground transition-colors hover:text-primary">
                          abanerje02@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                      <div>
                        <h4 className="font-bold">Phone</h4>
                        <a href="tel:+917547973733" className="text-muted-foreground transition-colors hover:text-primary block">
                          +91 75479 73733
                        </a>
                        <a href="tel:+919593387016" className="text-muted-foreground transition-colors hover:text-primary block">
                          +91 95933 87016
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                       <WhatsAppIcon className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                      <div>
                        <h4 className="font-bold">WhatsApp</h4>
                        <a href="https://wa.me/917547973733" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                          +91 75479 73733
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
