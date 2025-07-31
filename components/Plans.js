export default function Plans({ plans }) {
  return (
    <section className="py-10 px-4 bg-white text-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-[#1476ad]">Plan</h2>
        <p className="text-2xl font-semibold text-gray-700">& Pricing Info</p>
      </div>

      <div className="flex justify-center mb-8 gap-2">
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Monthly</button>
        <button className="bg-[#1476ad] text-white px-4 py-2 rounded-full">Annual (Save 50%)</button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-xl border ${
              plan.popular ? 'shadow-xl bg-gradient-to-br from-[#e7f8ff] to-white' : 'bg-white'
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 text-sm bg-[#e7f8ff] text-blue-900 px-2 py-1 rounded-full">
                ★ Popular
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
            <p className="text-2xl font-bold text-[#1476ad]">Rs {plan.price}</p>
            <p className="text-sm mb-4">{plan.subText}</p>

            <button
              className={`w-full py-2 rounded-lg font-medium mt-2 mb-1 ${
                plan.buttonType === 'primary'
                  ? 'bg-[#1476ad] text-white'
                  : plan.buttonType === 'muted'
                  ? 'bg-gray-200 text-gray-600'
                  : 'border border-[#1476ad] text-[#1476ad]'
              }`}
            >
              {plan.buttonText}
            </button>
            <p className="text-sm text-[#1476ad] text-center mb-4">
              Start <span className="font-bold">Free 7-Days</span> Trial
            </p>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-700 mb-2">Features</h4>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
