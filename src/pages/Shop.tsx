
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: 1,
      name: "Kenyan AA Single Origin",
      description: "Bright acidity with notes of blackcurrant and wine. Grown at 1,800m elevation in Bungoma County.",
      roast: "Medium",
      origin: "Bungoma County",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop",
      tastingNotes: ["Blackcurrant", "Wine", "Bright Acidity"],
      inStock: true
    },
    {
      id: 2,
      name: "Western Kenya Micro-lot",
      description: "Complex flavor profile with chocolate and citrus notes. Limited harvest from our partner farmers.",
      roast: "Medium-Dark",
      origin: "Trans Nzoia County",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
      tastingNotes: ["Chocolate", "Orange", "Honey"],
      inStock: true
    },
    {
      id: 3,
      name: "Farmers Choice Blend",
      description: "A balanced blend celebrating our farming community. Perfect for everyday brewing.",
      roast: "Medium",
      origin: "Blend",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop",
      tastingNotes: ["Balanced", "Smooth", "Caramel"],
      inStock: true
    },
    {
      id: 4,
      name: "Highland Reserve",
      description: "Premium high-altitude coffee with exceptional clarity and complexity.",
      roast: "Light",
      origin: "Mount Elgon",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=400&fit=crop",
      tastingNotes: ["Floral", "Tea-like", "Bergamot"],
      inStock: false
    },
    {
      id: 5,
      name: "Community Co-op Special",
      description: "Collaborative harvest from our Farmer Field School graduates.",
      roast: "Medium-Dark",
      origin: "Various",
      price: 26.99,
      image: "https://images.unsplash.com/photo-1485808191679-5760e38de311?w=400&h=400&fit=crop",
      tastingNotes: ["Nutty", "Cocoa", "Vanilla"],
      inStock: true
    },
    {
      id: 6,
      name: "Seasonal Harvest",
      description: "Limited edition seasonal offering showcasing the best of our current harvest.",
      roast: "Medium",
      origin: "Western Kenya",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c46a?w=400&h=400&fit=crop",
      tastingNotes: ["Seasonal", "Complex", "Unique"],
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'light') return product.roast === 'Light';
    if (filter === 'medium') return product.roast === 'Medium';
    if (filter === 'dark') return product.roast.includes('Dark');
    if (filter === 'in-stock') return product.inStock;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-light/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-brand-coffee mb-4">
            Our Coffee
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exceptional specialty coffee sourced directly from smallholder farmers in Western Kenya. 
            Each purchase supports our community development programs.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by roast" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roasts</SelectItem>
                  <SelectItem value="light">Light Roast</SelectItem>
                  <SelectItem value="medium">Medium Roast</SelectItem>
                  <SelectItem value="dark">Dark Roast</SelectItem>
                  <SelectItem value="in-stock">In Stock Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive" className="text-white">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  <Badge 
                    className="absolute top-4 left-4 bg-brand-primary"
                  >
                    {product.roast} Roast
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 text-brand-coffee">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">
                      <strong>Origin:</strong> {product.origin}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {product.tastingNotes.map((note, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs border-brand-light text-brand-coffee"
                        >
                          {note}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-primary">
                      ${product.price}
                    </span>
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                        disabled={!product.inStock}
                      >
                        Subscribe
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-brand-coffee hover:bg-brand-coffee/90"
                        disabled={!product.inStock}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Education */}
      <section className="py-16 bg-brand-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-coffee mb-6">
            Coffee Brewing Guide
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the most out of your Sacred Hands Coffee with our brewing recommendations. 
            Each bag includes detailed brewing instructions for optimal extraction.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1:15</span>
              </div>
              <h3 className="font-semibold text-brand-coffee mb-2">Ratio</h3>
              <p className="text-gray-600 text-sm">Coffee to water ratio for best extraction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">93°C</span>
              </div>
              <h3 className="font-semibold text-brand-coffee mb-2">Temperature</h3>
              <p className="text-gray-600 text-sm">Optimal water temperature for brewing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4min</span>
              </div>
              <h3 className="font-semibold text-brand-coffee mb-2">Brew Time</h3>
              <p className="text-gray-600 text-sm">Recommended brewing duration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
