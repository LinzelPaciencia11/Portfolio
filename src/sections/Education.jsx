import FadeIn from '../components/FadeIn'
import Stepper from '../components/Stepper'
import ucLogo from '../assets/uc.jpg'
import sacsLogo from '../assets/sacs.jpg'

const education = [
  {
    level: 'Tertiary Education',
    school: 'University of Cebu Lapu-Lapu and Mandaue',
    degree: 'BS Information Technology',
    period: '2022 – 2026',
    honors: "Academic Scholar · Dean's Lister · Cum Laude",
    logo: ucLogo,
  },
  {
    level: 'Senior High School',
    school: 'University of Cebu Lapu-Lapu and Mandaue',
    degree: 'Science, Technology, Engineering, and Mathematics (STEM)',
    honors: "With Honors",
    period: '2020 – 2022',
    logo: ucLogo,
  },
  {
    level: 'Junior High School',
    school: 'Saint Alphonsus Catholic School',
    period: '2017 – 2020',
    honors: "ESL scholar",
    logo: sacsLogo,
  },
  {
    level: 'Elementary',
    school: 'Saint Alphonsus Catholic School',
    period: '2010 – 2016',
    logo: sacsLogo,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-accent text-xs tracking-widest uppercase mb-2 font-medium">Education</p>
          <h2 className="text-ink text-4xl font-semibold mb-10">Academic Background</h2>
        </FadeIn>

        <Stepper steps={education} />
      </div>
    </section>
  )
}
