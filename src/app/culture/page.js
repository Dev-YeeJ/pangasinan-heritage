import React from 'react';
import Typography from '../../components/atoms/Typography';
import Image from '../../components/atoms/Image';

export default function CulturePage() {
  const cultureItems = [
    {
      title: "Festivals of Joy",
      description: "From the famous Bangus Festival in Dagupan to the Pista'y Dayat (Sea Festival) in Lingayen, Pangasinan is vibrant with celebrations that honor its agricultural and maritime roots.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrsS4cab19LVdU1c8AB5ErDE_2yZbLA36POa2U2yUuFh-mNC3A8w6g7lU5JxlaLV5XuUt22FOLVLmlzi__U3ycUxbiNHOVk2HllRQZzixhh-i2xsODK-GUZlzoYeh8MwjVKHsX_jMUXVmtEpH9ONXiiwyeJKuvPA4ctSAqwA94sSF5XS8cvohhp86Fh1J7CTbSsEig2_f9lg1nF0q5FKxj3ayHSu8gOGZ6K3lOy8PLEUH-WxysNl8H",
      category: "Festivals"
    },
    {
      title: "Culinary Heritage",
      description: "Pangasinan is a culinary haven known for its Puto Calasiao, Alaminos longganisa, and the freshest seafood harvest from the Lingayen Gulf.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj4el8jon-AFPLumMpyTQg-PNI8vQQf-AB81KjxTSJHjXAz_3hPwcHBW2lCG_5G6xTnp-7ukL4CaXUncynyOCJihWgZB6u2X22QYfvt2frGon9mUZwEE3Eam-oR_hYwQJnzKfsW8aQS8WZtazfEvoB29JHzbLF3t3uYSAv9T5IFiyDZfFLwxJjaORSrmhLESIqTdeXq2g5pDML9Osn46b0ytNaDjNJXWqdVKmXeM1TQaEWNmbFkHs6",
      category: "Cuisine"
    },
    {
      title: "Traditional Crafts",
      description: "Discover the meticulous artistry of bamboo weaving in San Carlos City and the traditional salt-making process in Dasol that gives the province its name ('place of salt').",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcSOXRIaqAJY8BoteBKm7lwzgTdxtUuEkJAKaKlr2i4QxFB2rkydR7kriC0QuwaYwx1t_TFMuj-XIxLAqr-zaXo3SI0-ZrVgGQgYZJhTpFcBWsKcvA1WQXlOceFiXLhsHio8ZxhISxVP6H_t5fGM-DYqF2on2pdlPXJB7Dm6jXbXlS9dqpVZNWatxhlmyUwtR2y4ZqcHO7YuFzTeOfzG04oKaCzCCSWVXZwU-3BaTBX9RxYdP0yQWW",
      category: "Crafts"
    }
  ];

  return (
    <main className="w-full px-container-margin-mobile md:px-container-margin-desktop py-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center flex flex-col items-center">
        <Typography variant="h2" className="text-primary mb-4">Vibrant Culture</Typography>
        <Typography variant="body-lg" className="text-on-surface-variant max-w-2xl">
          Experience the heart and soul of Pangasinan through its colorful festivals, mouth-watering delicacies, and deeply rooted traditional crafts.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cultureItems.map((item, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-64">
              <Image src={item.imageUrl} alt={item.title} />
              <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {item.category}
              </div>
            </div>
            <div className="p-8">
              <Typography variant="h3" className="text-primary mb-3">{item.title}</Typography>
              <Typography variant="body-md" className="text-on-surface-variant leading-relaxed">
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
