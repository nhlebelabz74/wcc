import { SectionWrapper } from '@/hoc';
import { values } from '@/constants';

const Value = ({ title, description, Icon }) => (
  <div className='flex flex-row gap-4 p-6 bg-primary/5 backdrop-blur-sm rounded-lg hover:bg-primary/20 transition-all duration-300 shadow-md'>
    <div className='mt-1'>
      <Icon size={24} />
    </div>
    <div className='flex flex-col gap-2'>
      <h3 className='font-bold text-xl text-ring'>
        {title}
      </h3>
      <p className='leading-relaxed'>
        {description}
      </p>
    </div>
  </div>
);

const Values = () => {
  return (
    <section className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-clip-text">
          Our Values
        </h1>
        <p className="leading-relaxed text-lg max-w-5xl">
          At Wits Consulting Club, our core values form the foundation of our identity and guide our approach to student-led consulting.
          These principles represent what we stand for as an organization and shape how we prepare Wits students for successful careers in
          consulting. Through these values, we foster an environment where members can develop essential skills, contribute meaningfully to client projects,
          and build a strong professional network. As we bridge the gap between academic learning and industry practice, these values drive our
          commitment to excellence and student development at the University of the Witwatersrand.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <Value key={index} {...value} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(Values, "values");