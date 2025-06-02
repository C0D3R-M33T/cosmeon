import React, { useState } from 'react';
import { Clock, Lock, BookOpen } from 'lucide-react';
import Modal from './ui/Modal';

export interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  fullContent: string;
  category: string;
  icon: React.ReactNode;
  imageSrc?: string;
}

const BlogCard: React.FC<BlogCardProps & { onClick: () => void }> = ({
  date,
  title,
  description,
  category,
  icon,
  imageSrc,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="rounded-2xl overflow-hidden bg-zinc-900 text-white min-h-[480px] cursor-pointer transition-all duration-300 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-700 hover:scale-[1.02]"
  >
    {imageSrc && (
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
    )}
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-zinc-800 p-2 rounded-xl">{icon}</div>
        <p className="text-xs uppercase text-zinc-400 tracking-wider">{date}</p>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 mb-4">{description}</p>
      <div className="text-xs uppercase text-blue-500 tracking-wider">{category}</div>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<BlogCardProps | null>(null);

  const handleCardClick = (card: BlogCardProps) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCard(null), 300);
  };

  const cards: BlogCardProps[] = [
    {
      date: '3 January 2024',
      title: 'New Update Soon',
      description: 'Explore the latest changes in our blockchain system!',
      fullContent:
        'Our next update introduces performance improvements and feature enhancements, including better smart contract execution, reduced gas usage, and a more intuitive interface. We’re also rolling out new educational tools for developers and enterprises.',
      category: 'Updates Center',
      icon: <Clock size={20} />,
      imageSrc: '/assets/blog-bg.jpeg',
    },
    {
      date: '28 December 2024',
      title: 'Protocols and Security',
      description: 'New security protocols reinforce the blockchain foundation.',
      fullContent:
        'Blockchain security is always evolving. In this update, we dive deep into zero-knowledge proofs, multi-sig wallets, and decentralized auditing practices. Learn how these mechanisms protect assets and ensure transaction transparency for users and developers alike.',
      category: 'System Modules',
      icon: <Lock size={20} />,
      imageSrc: '/assets/columbia_article.png',
    },
    {
      date: '22 December 2024',
      title: 'Start with Our Tutorials',
      description: 'Begin your blockchain journey with easy-to-follow guides.',
      fullContent:
        'Whether you’re a student or a startup, our new tutorials guide you from the basics of decentralization to deploying your first smart contract on testnet. We’ve included code snippets, visual diagrams, and community challenges to accelerate your learning.',
      category: 'Blockchain Guides',
      icon: <BookOpen size={20} />,
      imageSrc: '/assets/upcoming_warehouse.png',
    },
  ];

  return (
    <section className="relative text-white py-20 px-6 md:px-16">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/blog-bg.jpeg"
          alt="Blog background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Latest Blog Entries</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-16">
          Exchanges <span className="text-white/70">Decentralized</span>
          <br />
          <span className="relative inline-block">
            On Smart Contracts.
            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <BlogCard key={index} {...card} onClick={() => handleCardClick(card)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} cardData={selectedCard} />
    </section>
  );
};

export default BlogSection;
