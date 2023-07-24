
const Section1 = () => {
  const collegeData = [
    {
      id: 1,
      image: 'https://i.ibb.co/BKRPfqN/clg1.jpg',
      name: 'ABC College',
      admissionDate: '2023-09-01',
      events: true,
      researchHistory: 150,
      sports: ['Football', 'Basketball', 'Swimming'],
    },
    {
      id: 2,
      image: 'https://i.ibb.co/ZNcr5cg/clg2.jpg',
      name: 'XYZ University',
      admissionDate: '2023-08-15',
      events: true,
      researchHistory: 200,
      sports: ['Tennis', 'Volleyball', 'Athletics'],
    },
    {
      id: 3,
      image: 'https://i.ibb.co/3T8tz3x/clg3.jpg',
      name: 'PQR Institute',
      admissionDate: '2023-07-20',
      events: true,
      researchHistory: 100,
      sports: ['Cricket', 'Badminton', 'Table Tennis'],
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
                <h2 className="text-3xl text-green-600 font-bold text-center mb-4">Featured Colleges</h2>
                <p className="text-gray-600 text-center mb-8">Explore these top colleges with exciting opportunities and facilities.</p>

      <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {collegeData.map(college => (
          <div key={college.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={college.image} alt={college.name} className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">{college.name}</h3>
            <p className="text-gray-600">Admission Date: {college.admissionDate}</p>
            {college.events && <p className="text-green-600 font-semibold">Events Available</p>}
            <p className="text-gray-600">Research History: {college.researchHistory}</p>
            <div className="flex mt-2 text-gray-600">Sports: 
              {college.sports.map(sport => (
                <div key={sport} className="bg-blue-500 text-white py-1 px-2 rounded-full text-sm mx-2">{sport}</div>
              ))}
            </div>
            <div className='flex justify-center pt-6'>
                <button className='bg-green-600 text-white py-2 rounded-md w-full'>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
