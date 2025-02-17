
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceSteps from "@/components/ServiceSteps";
import PricingTable from "@/components/PricingTable";
import { Wrench } from "lucide-react";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        {!showForm && !showPricing ? (
          <div className="text-center max-w-3xl mx-auto slide-up">
            <div className="flex items-center justify-center mb-8">
              <Wrench className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">SPECPogotowie</h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-12">
              Szybka pomoc w nagłych awariach – znajdź specjalistę i zgłoś problem w kilku krokach!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowForm(true)}
                className="text-lg px-8 py-6"
              >
                Zgłoś awarię
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowPricing(true)}
                className="text-lg px-8 py-6"
              >
                Zobacz cennik
              </Button>
            </div>
          </div>
        ) : (
          <Card className="max-w-6xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {showForm ? "Zgłoszenie awarii" : "Cennik usług"}
              </h2>
              <Button
                variant="ghost"
                onClick={() => {
                  setShowForm(false);
                  setShowPricing(false);
                }}
              >
                Powrót
              </Button>
            </div>
            
            {showForm ? <ServiceSteps /> : <PricingTable />}
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
