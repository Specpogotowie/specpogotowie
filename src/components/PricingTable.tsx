
import { Card } from "./ui/card";

const prices = [
  {
    title: "Zlecenie do 1h czasu",
    description: "Diagnoza + naprawa",
    price: "250",
  },
  {
    title: "Każda następna godzina",
    description: "Kontynuacja pracy",
    price: "200",
  },
  {
    title: "Konsultacja / doradztwo",
    description: "Do 1h czasu w domu Klienta (bez naprawy)",
    price: "150",
  },
  {
    title: "Druga wizyta",
    description: "W razie wymiany części dedykowanej (Serwis AGD)",
    price: "150",
  },
  {
    title: "Dwóch techników",
    description: "Godzina zlecenia",
    price: "350",
  },
  {
    title: "Wyjazd do sklepu",
    description: "W przypadku zakupu dodatkowych części",
    price: "49",
  },
  {
    title: "Dojazd na obrzeża",
    description: "Ponad 7km od centrum miasta",
    price: "49",
  },
];

const PricingTable = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 slide-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {prices.map((item, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-200"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-3xl font-bold text-primary">
              {item.price} zł
              <span className="text-sm text-gray-500 font-normal"> netto</span>
            </p>
          </Card>
        ))}
      </div>

      <Card className="mt-8 p-6">
        <h3 className="text-xl font-semibold mb-4">Dodatkowe informacje</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Dojazd na terenie miasta w cenie</li>
          <li>• Koszty części oraz elementów niezbędnych do realizacji zlecenia pokrywa Klient</li>
          <li>• Specjalista może podać przybliżoną cenę części dedykowanych</li>
          <li>• Informacje o fakturze prosimy uwzględnić podczas rezerwacji</li>
          <li>• Wszystkie ceny są cenami netto</li>
        </ul>
      </Card>
    </div>
  );
};

export default PricingTable;
