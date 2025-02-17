
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Wrench, 
  Droplet, 
  Flame, 
  PipelineIcon, // Changed from Pipeline to PipelineIcon
  PaintBucket, 
  Home,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const specialists = [
  { id: "electrician", title: "Elektryk", icon: <Wrench className="w-6 h-6" /> },
  { id: "plumber", title: "Hydraulik", icon: <Droplet className="w-6 h-6" /> },
  { id: "heating", title: "Specjalista od ogrzewania", icon: <Flame className="w-6 h-6" /> },
  { id: "sewage", title: "Kanalizacja i odpływy", icon: <PipelineIcon className="w-6 h-6" /> },
  { id: "decorator", title: "Dekorator wnętrz", icon: <PaintBucket className="w-6 h-6" /> },
  { id: "roofing", title: "Specjalista od dachów", icon: <Home className="w-6 h-6" /> },
];

const ServiceSteps = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 slide-up">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Krok {step} z 5
        </h2>
        <div className="flex gap-2">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Wstecz
            </Button>
          )}
          {step < 5 && selectedSpecialist && (
            <Button
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2"
            >
              Dalej
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialists.map((specialist) => (
          <Card
            key={specialist.id}
            className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedSpecialist === specialist.id
                ? "ring-2 ring-primary"
                : "hover:scale-105"
            }`}
            onClick={() => setSelectedSpecialist(specialist.id)}
          >
            <div className="flex flex-col items-center gap-4">
              {specialist.icon}
              <h3 className="text-lg font-medium text-gray-800">
                {specialist.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSteps;
