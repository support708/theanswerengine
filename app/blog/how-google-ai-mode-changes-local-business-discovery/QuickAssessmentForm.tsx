'use client'

export default function QuickAssessmentForm() {
  return (
    <form
      className="ae-form-inputs"
      onSubmit={(e) => {
        e.preventDefault()
        alert('Thank you! We will review your business and send an assessment soon.')
      }}
    >
      <input type="text" placeholder="Business Name" required className="ae-form-input" />
      <input type="url" placeholder="Website or Business URL" required className="ae-form-input" />
      <button type="submit" className="ae-form-button">Get Quick Assessment</button>
    </form>
  )
}
