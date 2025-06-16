import TickImg from "../../assets/unibazar-pricing-images/tick.png";
import {Link} from "react-router-dom";
import { Card, CardContent, CardHeader } from "@mui/material";
import CustomButton from "../@base/customButton/customButton";

export default function Plans({ pricingType }) {
    const selectedPlan = "Free";

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Just using this for yourself? Lite is the way to go for the lite platform.",
      bgColor: "bg-[#E3F8FF]",
      textColor: "text-[#035388]",
      features: [
        "Link up to 2 e-commerce platforms",
        "Manage up to 50 products",
        "Basic dashboard access",
        "Basic customer support",
      ],
    },
    {
      name: "Pro",
      price: pricingType === "monthly" ? "$10" : "$7",
      description: "Upgrade to get more features and better support.",
      bgColor: "bg-[#FFE3EC]",
      textColor: "text-[#620042]",
      features: [
        "Link up to 5 e-commerce platforms",
        "Manage up to 500 products",
        "Advanced dashboard access with real-time analytics",
        "Priority customer support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom Price",
      description: "For large businesses needing advanced integrations.",
      bgColor: "bg-[#EFFCF6]",
      textColor: "text-[#004440]",
      features: [
        "Unlimited platform integrations",
        "Manage unlimited products",
        "Full dashboard access with advanced analytics",
        "24/7 premium support",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-6">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`w-full md:w-96 shadow-lg rounded-lg border ${selectedPlan === plan.name.toLowerCase() ? "border-[#08A9A0] shadow-2xl" : "shadow-md"}`}
        >
          <CardHeader
            title={
              <div className="flex items-center justify-between">
                <p className={`w-fit py-1 px-3 text-sm font-semibold ${plan.textColor} ${plan.bgColor} rounded-3xl`}>
                  {plan.name}
                </p>
                {selectedPlan === plan.name.toLowerCase() && (
                  <img src={TickImg} alt="Selected" className="w-5 h-5" />
                )}
              </div>
            }
          />
          <CardContent>
            <p className="text-2xl md:text-4xl font-bold">
              {plan.price}
              {plan.name !== "Enterprise" && <span className="text-sm font-normal text-gray-400 pl-1">/month</span>}
            </p>
            <p className="text-base text-gray-500">{plan.description}</p>

            {/* Plan Features */}
            <div className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img src={TickImg} alt="Feature" className="w-4 h-4" />
                  <p className="text-base text-gray-500">{feature}</p>
                </div>
              ))}
            </div>

            {/* Plan Selection Button */}
            <div className="mt-6">
              {plan.name === "Enterprise" ? (
                <Link to="/contact-us">
                  <CustomButton fullWidth className="primary">
                    Contact Us
                  </CustomButton>
                </Link>
              ) : (
                <CustomButton
                  fullWidth
                  className={`${
                    selectedPlan === plan.name.toLowerCase() ? "bg-gray-400" : "bg-[#08A9A0] text-white"
                  }`}
                //   onClick={() => handlePlanSelection(plan.name.toLowerCase())}
                //   disabled={selectedPlan === plan.name.toLowerCase()}
                >
                  {/* {selectedPlan === plan.name.toLowerCase() ? "Selected" : `Choose ${plan.name}`} */}Selected
                </CustomButton>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}