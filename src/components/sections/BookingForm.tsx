"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { CalendarIcon, MapPin, ChevronDown } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"
import { Card } from "../ui/card"

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

  const nextStep = () => setCurrentStep(currentStep + 1)
  const prevStep = () => setCurrentStep(currentStep - 1)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <Card className="overflow-hidden">
            <div className="bg-primary p-6 text-white">
              <h2 className="text-2xl font-bold">Book Our Services</h2>
              <p className="text-primary-foreground/80">
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
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}
                      >
                        {step}
                      </div>
                      <span className={`mt-2 text-sm ${currentStep >= step ? 'text-primary font-medium' : 'text-gray-500'}`}>
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
                    className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary transition-all duration-300"
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
                    <p className="text-sm text-muted-foreground">
                      Choose the service you require from our offerings
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {serviceTypes.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`rounded-lg border p-4 text-left transition-all ${selectedService === service ? 'border-primary bg-primary/10' : 'hover:border-gray-300'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{service}</span>
                          {selectedService === service && (
                            <div className="h-4 w-4 rounded-full bg-primary"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={nextStep}
                      disabled={!selectedService}
                    >
                      Continue
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
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
                    <p className="text-sm text-muted-foreground">
                      Provide information about your project
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input id="name" placeholder="Kwame Asante" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input id="email" placeholder="kwame@example.com" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input id="phone" placeholder="+233 24 123 4567" type="tel" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium">
                        Company (Optional)
                      </label>
                      <Input id="company" placeholder="Asante Properties Ltd" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="region" className="block text-sm font-medium">
                        Region <span className="text-red-500">*</span>
                      </label>
                      <Select onValueChange={setSelectedRegion} value={selectedRegion}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          {ghanaRegions.map((region) => (
                            <SelectItem key={region} value={region}>
                              {region}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="land-type" className="block text-sm font-medium">
                        Land Type <span className="text-red-500">*</span>
                      </label>
                      <Select onValueChange={setSelectedLandType} value={selectedLandType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select land type" />
                        </SelectTrigger>
                        <SelectContent>
                          {landTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="date" className="block text-sm font-medium">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="block text-sm font-medium">
                        Project Location <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          id="location"
                          placeholder="e.g. East Legon, Accra"
                          required
                        />
                        <MapPin className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="block text-sm font-medium">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="details"
                      placeholder="Describe your project requirements..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button onClick={nextStep}>
                      Continue
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
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
                    <p className="text-sm text-muted-foreground">
                      Review your information before submission
                    </p>
                  </div>

                  <div className="rounded-lg border bg-gray-50 p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">Service:</span>
                        <span className="font-medium">{selectedService}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">Name:</span>
                        <span className="font-medium">Kwame Asante</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">Email:</span>
                        <span className="font-medium">kwame@example.com</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">Phone:</span>
                        <span className="font-medium">+233 24 123 4567</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">Region:</span>
                        <span className="font-medium">{selectedRegion || "Greater Accra"}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">Land Type:</span>
                        <span className="font-medium">{selectedLandType || "Residential"}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">Date:</span>
                        <span className="font-medium">
                          {date ? format(date, "PPP") : "Not specified"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">Location:</span>
                        <span className="font-medium">East Legon, Accra</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" required />
                      <span className="text-sm text-muted-foreground">
                        I agree to Eyesage Consults terms of service and privacy policy
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Submit Booking
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}