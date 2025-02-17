
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  Wrench, 
  Droplet, 
  Flame, 
  Droplets, 
  PaintBucket, 
  Home,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const specialists = [
  { id: "electrician", title: "Elektryk", icon: <Wrench className="w-6 h-6" /> },
  { id: "plumber", title: "Hydraulik", icon: <Droplet className="w-6 h-6" /> },
  { id: "heating", title: "Specjalista od ogrzewania", icon: <Flame className="w-6 h-6" /> },
  { id: "sewage", title: "Kanalizacja i odpływy", icon: <Droplets className="w-6 h-6" /> },
  { id: "decorator", title: "Dekorator wnętrz", icon: <PaintBucket className="w-6 h-6" /> },
  { id: "roofing", title: "Specjalista od dachów", icon: <Home className="w-6 h-6" /> },
];

const ServiceSteps = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
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
        );
      case 2:
        return (
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Imię i nazwisko
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jan Kowalski"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jan@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="123 456 789"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Adres
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="ul. Przykładowa 123, 00-000 Warszawa"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Opis problemu
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Opisz szczegółowo problem..."
                  className="h-32"
                />
              </div>
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

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
          {step < 5 && (step === 1 ? selectedSpecialist : formData.name && formData.email && formData.phone) && (
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

      {renderStep()}
    </div>
  );
};

export default ServiceSteps;
