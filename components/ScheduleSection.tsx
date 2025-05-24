import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  session: string;
  title: string;
  subtitle: string;
  topics: string[];
  registrationLink: string;
  color: string;
}

interface DaySchedule {
  date: string;
  day: string;
  sessions: ScheduleItem[];
}

export default function ScheduleSection() {
  const colors = [
    "#1e73e8", // Blue
    "#8e44ad", // Purple
    "#00c853", // Green
    "#ffc107", // Yellow
    "#ff6d00", // Orange
    "#ff3b3b", // Red
  ];

  const schedule: DaySchedule[] = [
    {
      date: "05.27",
      day: "Day 1",
      sessions: [
        {
          session: "SESSION 1",
          title: "The Startup Journey",
          subtitle: "Tech Startup Ecosystem: From Idea to Market",
          topics: ["Product-Market Fit & Business Models"],
          registrationLink: "https://lu.ma/whlwy3t7",
          color: colors[0], // Blue
        },
        {
          session: "SESSION 2",
          title: "Core Technologies for Startups",
          subtitle: "Software Development Method",
          topics: ["Agile and Lean Startup Methodologies"],
          registrationLink: "https://lu.ma/fd1bum2c",
          color: colors[1], // Purple
        },
      ],
    },
    {
      date: "05.28",
      day: "Day 2",
      sessions: [
        {
          session: "SESSION 1",
          title: "Cloud and Connectivity",
          subtitle: "Cloud Services",
          topics: ["DevOps and Automation"],
          registrationLink: "https://lu.ma/ydd23kt1",
          color: colors[2], // Green
        },
        {
          session: "SESSION 2",
          title: "Expanding Reach in the Digital Age",
          subtitle: "Digital Marketing and SEO",
          topics: ["Monetization and Revenue Strategies"],
          registrationLink: "https://lu.ma/a09jf9kn",
          color: colors[3], // Yellow
        },
      ],
    },
    {
      date: "05.29",
      day: "Day 3",
      sessions: [
        {
          session: "SESSION 1",
          title: "Responsible Tech Development",
          subtitle: "Ethical AI in Business Applications",
          topics: ["Data Privacy and Compliance"],
          registrationLink: "https://lu.ma/1h6sbguo",
          color: colors[4], // Orange
        },
        {
          session: "SESSION 2",
          title: "Pitching Business Readiness",
          subtitle: "Crafting the Perfect Pitch",
          topics: ["Funding and Investment Strategies"],
          registrationLink: "https://lu.ma/ju23p1op",
          color: colors[5], // Red
        },
      ],
    },
  ];

  return (
    <main
      className={cn(
        "px-8 py-20",
        "laptop:px-56",
        "min-h-win relative z-10 w-full bg-gradient-to-b from-[#261b1b] to-[#281a1a] to-5%",
      )}
      id="schedule"
    >
      <div className="max-w-8xl relative z-10 mx-auto">
        <div className="mb-16 text-left">
          <h2 className="laptop:text-6xl mb-8 text-4xl font-bold tracking-tight text-white">
            EVENT SCHEDULE
          </h2>
          <p className="laptop:text-xl max-w-3xl text-lg leading-relaxed text-gray-300">
            Three intensive days of learning, networking, and innovation. Join
            us for sessions designed to accelerate your startup journey.
          </p>
        </div>

        <div className="desktop:grid-cols-3 grid grid-cols-1 gap-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-6">
              {/* Day Header */}
              <div className="text-left">
                <div className="mb-2 text-6xl font-bold text-white md:text-7xl">
                  {day.date}
                </div>
                <div className="text-xl font-medium text-gray-300">
                  {day.day}
                </div>
              </div>

              {/* Sessions */}
              <div className="space-y-8">
                {day.sessions.map((session, sessionIndex) => (
                  <Card
                    key={sessionIndex}
                    className="border-gray-700 bg-gray-800/60 transition-all duration-300 hover:bg-gray-800/80"
                    style={{
                      borderLeftColor: session.color,
                      borderLeftWidth: "4px",
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span
                          className="text-sm font-bold tracking-wider"
                          style={{ color: session.color }}
                        >
                          {session.session}
                        </span>
                      </div>

                      <h3 className="mb-3 text-xl leading-tight font-bold text-white">
                        {session.title}
                      </h3>

                      <p className="mb-3 font-medium text-gray-300">
                        {session.subtitle}
                      </p>

                      <div className="mb-4 space-y-1">
                        {session.topics.map((topic, topicIndex) => (
                          <p key={topicIndex} className="text-sm text-gray-400">
                            {topic}
                          </p>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="w-full rounded-lg px-4 py-2 font-semibold text-white transition-colors"
                        style={{
                          backgroundColor: session.color,
                        }}
                      >
                        <a
                          href={session.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-90"
                        >
                          Register for {session.session}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-left">
          <div className="flex flex-col justify-start gap-4 text-gray-400 max-xl:gap-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Sessions run from 9:00 AM - 5:00 PM each day</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>May 27-29, 2024</span>
            </div>
          </div>

          <div className="mt-8 max-w-2xl rounded-lg border border-gray-600/30 bg-gray-800/30 p-6">
            <p className="font-medium text-gray-300">
              All sessions include interactive workshops, Q&A segments, and
              networking breaks. Materials and resources will be provided for
              each session.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
