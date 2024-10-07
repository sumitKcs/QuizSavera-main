import Marquee from 'react-fast-marquee';

const QuizAlert = ({ items }) => {

    if(!items) return <></>;

    return (
        <Marquee pauseOnHover={true} gradient={false} className='bg-primary shadow-inner py-2 border border-gray-300 mb-2'>
       <div className='inline-flex gap-8 lg:gap-4'>
       {items.map((item, index) => (
                    item?.link && <a key={index} href={item?.link} className="text-blue-700 font-semibold cursor-pointer pl-4">
                        {item?.name}
                    </a>
                ))}
       </div>
      </Marquee>
    )
};

export default QuizAlert;
