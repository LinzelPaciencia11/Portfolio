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
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <p className="text-violet-400 text-xs tracking-widest uppercase mb-2 font-semibold">Education</p>
          <h2 className="text-white text-4xl font-bold mb-10">Academic Background</h2>
        </FadeIn>

        <Stepper steps={education} />
      </div>
    </section>
  )
}
