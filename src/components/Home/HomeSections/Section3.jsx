
const Section3 = () => {
  // Sample research paper links for demonstration
  const researchPapers = [
    {
      id: 1,
      title: 'Advancements in Artificial Intelligence',
      link: 'https://example.com/research-paper-1.pdf',
    },
    {
      id: 2,
      title: 'Sustainable Energy Solutions',
      link: 'https://example.com/research-paper-2.pdf',
    },
    {
      id: 3,
      title: 'Biotechnology and its Applications',
      link: 'https://example.com/research-paper-3.pdf',
    },
    
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-green-600 text-center mb-4">Recommended Research Papers</h2>

        {/* Research Paper Links */}
        <div className="grid gap-4 justify-items-center">
          {researchPapers.map((paper) => (
            <a
              key={paper.id}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-md text-center text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >
              {paper.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
