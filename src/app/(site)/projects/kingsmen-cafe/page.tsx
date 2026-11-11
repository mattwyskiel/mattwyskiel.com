import type { Metadata } from "next";
import {
  BuiltWith,
  FeatureList,
  ProjectFigure,
  ProjectHeader,
  ProjectPage,
  ProjectSection,
  ProjectStatus,
  Prose,
} from "@/components/project-page";
import homeScreen from "./images/home-screen-2018.webp";

const description =
  "A mobile pre-ordering app for a coffee shop in a school library, with Square payments.";

export const metadata: Metadata = {
  title: "Kingsmen Café | Matt Wyskiel",
  description,
  openGraph: {
    type: "website",
    title: "Kingsmen Café | Matt Wyskiel",
    description,
    url: "https://mattwyskiel.com/projects/kingsmen-cafe",
    images: { url: "https://mattwyskiel.com/ogimage.png" },
  },
};

const features = [
  {
    title: "Pre-ordering",
    description:
      "Order ahead from a menu of drinks and snacks that the business could change itself.",
  },
  {
    title: "Square payments",
    description:
      "Pay in advance through Square, including cardless payment options.",
  },
  {
    title: "Community hub",
    description:
      "School announcements, live store hours, and each student's class schedule.",
  },
  {
    title: "Native iOS app",
    description: "Built in Swift for iPhone.",
  },
];

const problems = [
  "Long waits during peak hours",
  "Few convenient ways for students to order",
  "No integrated payments",
  "No place for community news and events",
];

const solutions = [
  "Mobile pre-ordering to cut wait times",
  "Payments built into the app",
  "A community information hub",
  "A simple, fast mobile interface",
];

export default function KingsmenCafePage() {
  return (
    <ProjectPage>
      <ProjectHeader
        title="Kingsmen Café"
        summary={description}
        facts={[
          { label: "Years", value: "2017–2018" },
          { label: "Status", value: <ProjectStatus status="archived" /> },
          { label: "Code", value: "Open source" },
        ]}
        links={[
          {
            label: "Source on GitHub",
            href: "https://github.com/mattwyskiel/kingsmen-cafe",
          },
        ]}
      />

      <ProjectSection title="What it was" id="overview">
        <div className="grid items-start gap-8 sm:grid-cols-[1fr_12rem]">
          <Prose>
            <p>
              Kingsmen Café was a coffee shop set up in the library of Christian
              Heritage School, a small private K–12 school in Trumbull,
              Connecticut. I built its ordering app with the school's Business
              Acumen class of juniors and seniors, fresh out of high school
              myself.
            </p>
            <p>
              It was my first full-stack app for a real business. We shipped
              version 1.0 and a few updates. Then school workloads caught up
              with the business lead and me, and the project ended.
            </p>
            <p>
              Later I cleaned up the code and made it public. The design
              decisions I made here still inform my work.
            </p>
          </Prose>
          <ProjectFigure
            framed={false}
            className="mx-auto w-48 sm:w-full"
            image={homeScreen}
            alt="An iPhone showing the Kingsmen Café home screen. It greets the student, shows their next class, their account balance, and an Order Now button."
            caption="The home screen design from January 2018, with sample data."
          />
        </div>
      </ProjectSection>

      <ProjectSection title="What it did" id="features">
        <FeatureList features={features} />
      </ProjectSection>

      <ProjectSection title="The problem" id="context">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-medium">What the café needed</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground marker:text-border">
              {problems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium">What the app delivered</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground marker:text-border">
              {solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="What I learned" id="lessons">
        <Prose>
          <p>
            <strong>Payments.</strong> Working with Square's payment SDK taught
            me how to handle secure mobile payments.
          </p>
          <p>
            <strong>Real business needs.</strong> I had to balance what the
            technology could do with how the café and its customers actually
            worked.
          </p>
          <p>
            <strong>Fast mobile flows.</strong> Ordering had to be quick without
            losing the options people wanted.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection title="Built with" id="stack">
        <BuiltWith
          items={[
            { label: "App", value: "iOS SDK and Swift" },
            { label: "Payments", value: "Square" },
            { label: "Backend", value: "Node.js and Express" },
            { label: "Data and hosting", value: "MongoDB Atlas and Heroku" },
          ]}
        />
      </ProjectSection>
    </ProjectPage>
  );
}
