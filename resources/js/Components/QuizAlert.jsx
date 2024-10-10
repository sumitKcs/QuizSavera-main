import Marquee from 'react-fast-marquee';

const QuizAlert = ({ items }) => {

    if (!items) return <></>;

    return (
        <Marquee pauseOnHover={true} gradient={false} className='bg-primary shadow-inner py-2 border border-gray-300 mb-2'>
            <div className='inline-flex gap-8 lg:gap-4'>
                {
                items?.length ? items.map((item, index) => (
                    item?.link && <a key={index} href={item?.link} className=" text-orange-400 font-extrabold hover:text-blue-600 cursor-pointer pl-4">
                        {item?.name}
                    </a>
                )) : (<>
                    {
                        Array(10).fill(0).map((item, index) => (
                            <span key={index} className="text-blue-700 bg-gray-300 font-semibold cursor-pointer pl-4 w-52 h-3 rounded-lg animate-pulse">
                            </span>
                        ))
                    }
                </>)
                }
            </div>
        </Marquee>
    )
};

export default QuizAlert;
