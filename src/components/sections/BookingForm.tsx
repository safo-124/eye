"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CalendarIcon, MapPin, ChevronDown } from "lucide-react"
import { format } from "date-fns"

const ghanaRegions = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Eastern",
  "Central",
  "Volta",
  "Northern",
  "Upper East",
  "Upper West",
  "Bono",
  "Ahafo",
  "Bono East",
  "Oti",
  "Savannah",
  "North East",
  "Western North"
]

const serviceTypes = [
  "Land Survey",
  "Property Development",
  "Architectural Design",
  "Construction Materials",
  "Project Consultation"
]

const landTypes = [
  "Residential",
  "Commercial",
  "Agricultural",
  "Industrial",
  "Mixed-Use"
]

export function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [selectedService, setSelectedService] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedLandType, setSelectedLandType] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  const [showCalendar, setShowCalendar] = useState(false)

  const nextStep = () => setCurrentStep(currentStep + 1)
  const prevStep = () => setCurrentStep(currentStep - 1)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold">Book Our Services</h2>
              <p className="text-blue-100">
                Complete this form to schedule a consultation or service with our experts
              </p>
            </div>

            <div className="p-6">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {step}
                      </div>
                      <span className={`mt-2 text-sm ${
                        currentStep >= step ? 'text-blue-600 font-medium' : 'text-gray-500'
                      }`}>
                        {step === 1 && 'Service'}
                        {step === 2 && 'Details'}
                        {step === 3 && 'Confirm'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-4">
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-200"></div>
                  <div
                    className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-blue-600 transition-all duration-300"
                    style={{
                      width: `${(currentStep - 1) * 50}%`
                    }}
                  ></div>
                </div>
              </div>

              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold">Select Service</h3>
                    <p className="text-sm text-gray-500">
                      Choose the service you require from our offerings
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {serviceTypes.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`rounded-lg border p-4 text-left transition-all ${
                          selectedService === service 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{service}</span>
                          {selectedService === service && (
                            <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={nextStep}
                      disabled={!selectedService}
                      className={`flex items-center px-4 py-2 rounded-md ${
                        !selectedService 
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      Continue
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold">Project Details</h3>
                    <p className="text-sm text-gray-500">
                      Provide information about your project
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Kwame Asante"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="kwame@example.com"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+233 24 123 4567"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company (Optional)
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Asante Properties Ltd"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Region <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="region"
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select region</option>
                        {ghanaRegions.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="land-type" className="block text-sm font-medium text-gray-700">
                        Land Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="land-type"
                        value={selectedLandType}
                        onChange={(e) => setSelectedLandType(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select land type</option>
                        {landTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCalendar(!showCalendar)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-left flex items-center justify-between"
                        >
                          <span>{date ? format(date, "PPP") : "Pick a date"}</span>
                          <CalendarIcon className="h-4 w-4 text-gray-400" />
                        </button>
                        {showCalendar && (
                          <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-2">
                            <input
                              title="sdfsd"
                              type="date"
                              onChange={(e) => {
                                setDate(new Date(e.target.value))
                                setShowCalendar(false)
                              }}
                              className="w-full p-2"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Project Location <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="location"
                          type="text"
                          placeholder="e.g. East Legon, Accra"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                        />
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="details"
                      placeholder="Describe your project requirements..."
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Continue
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold">Confirm Your Booking</h3>
                    <p className="text-sm text-gray-500">
                      Review your information before submission
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-500">Service:</span>
                        <span className="font-medium">{selectedService}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-500">Name:</span>
                        <span className="font-medium">Kwame Asante</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-500">Email:</span>
                        <span className="font-medium">kwame@example.com</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-500">Phone:</span>
                        <span className="font-medium">+233 24 123 4567</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-500">Region:</span>
                        <span className="font-medium">{selectedRegion || "Greater Accra"}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-500">Land Type:</span>
                        <span className="font-medium">{selectedLandType || "Residential"}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-500">Date:</span>
                        <span className="font-medium">
                          {date ? format(date, "PPP") : "Not specified"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-500">Location:</span>
                        <span className="font-medium">East Legon, Accra</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input 
                        type="checkbox" 
                        className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                        required 
                      />
                      <span className="text-sm text-gray-500">
                        I agree to Eyesage Consults terms of service and privacy policy
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button 
                      type="submit" 
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Submit Booking
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}