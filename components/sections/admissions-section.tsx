"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, MapPin, FileText, Send } from "lucide-react"

const steps = [
  { step: "1", text: "Please fill out the application form below." },
  {
    step: "2",
    text: "As soon as a place becomes available, you will receive an email offering a place for your child. You will be asked to complete a Registration and an “All About Me” form.",
  },
  {
    step: "3",
    text: "Please complete and return the Registration and “All About Me” forms by hand or post to 1 Cambridge Road, New Malden, Surrey, KT3 3QE, or email to admin@abacusnewmalden.co.uk.",
  },
  { step: "4", text: "Once your place has been confirmed, a confirmation letter will be sent either by email or post." },
  { step: "5", text: "Welcome to the Abacus family." },
]

export function AdmissionsSection() {
  return (
    <section id="admissions" className="py-16 md:py-24 bg-gradient-to-br from-cream via-cream-light to-sage/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 left-1/2 h-[320px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/14 via-coral/10 to-sage/14 blur-3xl" />
        <div className="absolute -bottom-24 right-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-dark-teal mb-4 tracking-tight">
              Admissions
            </h2>
            <p className="text-lg text-sage max-w-3xl mx-auto leading-relaxed">
              Abacus Pre-school offers rolling admissions throughout the academic year. Applications are accepted and
              reviewed continuously for sessions with current openings.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 items-start">
            {/* Left: Steps + Downloads */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="border-0 rounded-[22px] bg-white/85 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.10)] overflow-hidden">
                <CardContent className="p-7 md:p-8">
                  <h3 className="text-2xl font-bold text-dark-teal mb-2">How to apply</h3>
                  <p className="text-sage mb-6">
                    We are so glad that you would like to become a part of Abacus’ family. Here is how you can apply for a place for your child.
                  </p>

                  <div className="space-y-5">
                    {steps.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-dark-teal flex items-center justify-center flex-shrink-0 text-cream font-bold shadow-[0_14px_30px_rgba(0,0,0,0.12)] group-hover:scale-110 transition-transform duration-300">
                          {item.step}
                        </div>
                        <p className="text-sage leading-relaxed pt-1">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3">
                    <a
                      href="/admissions/1.docx"
                      className="inline-flex items-center justify-between rounded-2xl border border-sage/20 bg-sage/10 px-4 py-3 text-sm font-semibold text-dark-teal hover:bg-sage/15 transition-colors"
                      download
                    >
                      <span className="inline-flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Parent Information Booklet
                      </span>
                      <Download className="h-4 w-4" />
                    </a>


                  </div>

                  <div className="mt-6 rounded-2xl border border-sage/20 bg-white/70 p-5">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-coral/15 to-orange/10 border border-sage/15 flex items-center justify-center text-dark-teal flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="text-sm text-sage leading-relaxed">
                        <p className="font-semibold text-dark-teal">Return forms</p>
                        <p>
                          Post/hand in: 1 Cambridge Road, New Malden, Surrey, KT3 3QE
                        </p>
                        <p className="mt-2">
                          Email:{" "}
                          <a className="font-semibold text-dark-teal hover:text-teal transition-colors" href="mailto:admin@abacusnewmalden.co.uk">
                            admin@abacusnewmalden.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Online form UI */}
            <div className="lg:col-span-7">
              <Card className="border-0 rounded-[22px] bg-white/85 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.10)] overflow-hidden">
                <CardContent className="p-7 md:p-8">
                  <h3 className="text-2xl font-bold text-dark-teal mb-2">Application Form</h3>
                  <p className="text-sage mb-6">
                    Complete the details below. This can be wired to email sending later (Formspree/Resend).
                  </p>

                  <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                    <Field label="Date" type="date" required />
                    <Field label="Child’s name" placeholder="Child’s full name" required />
                    <Field label="DOB" type="date" required />

                    <SelectField
                      label="Gender"
                      required
                      options={[
                        { value: "", label: "Select" },
                        { value: "female", label: "Female" },
                        { value: "male", label: "Male" },
                        { value: "prefer-not-to-say", label: "Prefer not to say" },
                      ]}
                    />

                    <Field label="Any additional needs" placeholder="Please tell us any additional needs" required />

                    <Field label="Parent’s/Guardian’s name" placeholder="Full name" required />
                    <Field label="Home address" placeholder="Full address" required />

                    <div className="grid gap-4 md:grid-cols-2">
                      <Field label="Email" type="email" placeholder="you@email.com" required />
                      <Field label="Mobile" type="tel" placeholder="07xxx xxx xxx" required />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <SelectField
                        label="Are you eligible for 2 year old funding?"
                        required
                        options={[
                          { value: "", label: "Select" },
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                          { value: "not-sure", label: "Not sure" },
                        ]}
                      />
                      <SelectField
                        label="Are you eligible for 30 hours funding?"
                        required
                        options={[
                          { value: "", label: "Select" },
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                          { value: "not-sure", label: "Not sure" },
                        ]}
                      />
                    </div>

                    <Field label="When would you like to start?" type="date" required />

                    <Field
                      label="Days requested and preferred sessions (AM or PM)"
                      placeholder="Example: Mon AM, Wed PM, Fri AM"
                      required
                    />

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                      <p className="text-xs text-sage">
                        Prefer to download and send the PDF instead? Use the buttons on the left.
                      </p>

                      <Button className="rounded-full bg-teal hover:bg-dark-teal text-cream px-6 shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                    </div>


                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* optional note block, you can remove if not needed */}
          <div className="mt-10 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-white/70 bg-white/70 backdrop-blur-md p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-sage/15 flex items-center justify-center text-dark-teal flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-sage leading-relaxed">
                  If you have any questions about admissions or availability, please email{" "}
                  <a className="font-semibold text-dark-teal hover:text-teal transition-colors" href="mailto:admin@abacusnewmalden.co.uk">
                    admin@abacusnewmalden.co.uk
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark-teal mb-2">
        {label} {required ? <span className="text-coral">*</span> : null}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-sage/20 bg-white/70 px-4 py-3 text-dark-teal placeholder:text-sage/70 outline-none focus:ring-2 focus:ring-teal/35 focus:border-transparent"
      />
    </div>
  )
}

function SelectField({
  label,
  options,
  required = false,
}: {
  label: string
  options: { value: string; label: string }[]
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark-teal mb-2">
        {label} {required ? <span className="text-coral">*</span> : null}
      </label>
      <select
        required={required}
        className="w-full rounded-2xl border border-sage/20 bg-white/70 px-4 py-3 text-dark-teal outline-none focus:ring-2 focus:ring-teal/35 focus:border-transparent"
        defaultValue=""
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
