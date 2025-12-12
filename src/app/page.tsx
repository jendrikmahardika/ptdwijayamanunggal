'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Home, 
  Building2, 
  TrendingUp,
  Award,
  Users,
  Shield,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Loader2
} from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    fetchProperties()
  }, [])

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties?limit=3')
      const data = await response.json()
      if (data.success) {
        setProperties(data.data)
      }
    } catch (error) {
      console.error('Failed to fetch properties:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      if (data.success) {
        setFormSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Failed to submit form:', error)
    } finally {
      setFormSubmitting(false)
    }
  }

  const features = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Premium Properties",
      description: "High-quality real estate developments in strategic locations"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Legal Assurance",
      description: "Complete documentation and legal compliance for all properties"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description: "Professional consultants with years of real estate experience"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "High ROI",
      description: "Promising investment returns with strong market potential"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="PT DWIJAYA MANUNGGAL" width={40} height={40} />
              <div>
                <h1 className="text-xl font-bold text-slate-900">PT DWIJAYA MANUNGGAL</h1>
                <p className="text-xs text-slate-600">Real Estate Excellence</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="#properties" className="text-slate-700 hover:text-blue-600 transition-colors">Properties</Link>
              <Link href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-slate-700 hover:text-blue-600 transition-colors">Terms</Link>
            </div>

            <Button 
              variant="outline" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Home</Link>
              <Link href="#about" className="block px-3 py-2 text-slate-700 hover:text-blue-600">About</Link>
              <Link href="#properties" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Properties</Link>
              <Link href="#contact" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Contact</Link>
              <Link href="/privacy" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-800 text-blue-100">Trusted Real Estate Developer</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building Dreams, Creating Value with <span className="text-yellow-400">PT DWIJAYA MANUNGGAL</span>
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Your trusted partner in premium real estate development. We transform visions into reality with quality properties across Surabaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Explore Properties
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">50+</div>
                    <div className="text-sm text-blue-100">Properties Developed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">15+</div>
                    <div className="text-sm text-blue-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">1000+</div>
                    <div className="text-sm text-blue-100">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">98%</div>
                    <div className="text-sm text-blue-100">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Choose <span className="text-blue-600">PT DWIJAYA MANUNGGAL</span></h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and commitment to deliver exceptional real estate solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Featured Properties</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our premium selection of residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <>
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-48 bg-slate-200 animate-pulse"></div>
                    <CardHeader>
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-6 bg-slate-200 rounded animate-pulse"></div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : (
              properties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-blue-600" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="secondary" className="mb-2">{property.type}</Badge>
                        <CardTitle className="text-xl">{property.title}</CardTitle>
                      </div>
                      <Badge className={property.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {property.status}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-slate-600">Starting from</p>
                        <p className="text-2xl font-bold text-blue-600">{property.price}</p>
                      </div>
                      <Button variant="outline">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Properties
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                About <span className="text-blue-600">PT DWIJAYA MANUNGGAL</span>
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                PT DWIJAYA MANUNGGAL is a leading real estate development company based in Surabaya, 
                specializing in creating premium residential and commercial properties that combine 
                modern design with functional living spaces.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                With over 15 years of experience in the industry, we have successfully developed 
                more than 50 properties across Surabaya, earning the trust of over 1000 satisfied clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold">Award Winning</p>
                    <p className="text-sm text-slate-600">Excellence in Real Estate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">Fully Licensed</p>
                    <p className="text-sm text-slate-600">Legal & Certified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-slate-600">
                    To deliver exceptional real estate solutions that exceed client expectations 
                    while maintaining the highest standards of quality and integrity.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-slate-600">
                    To become the most trusted real estate developer in Surabaya, known for 
                    innovation, quality, and customer satisfaction.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Core Values</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Integrity & Transparency</li>
                    <li>• Quality Excellence</li>
                    <li>• Customer Focus</li>
                    <li>• Innovation & Sustainability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to find your dream property? Contact our team today for personalized consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h4>
                      <p className="text-slate-600">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                          <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                          <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        ></textarea>
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={formSubmitting}
                      >
                        {formSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    Office Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    JL. AHMAD YANI NO 16-18<br />
                    Kel. Monokromo, Kec. , Kota Surabaya<br />
                    Prov. Jawa Timur<br />
                    Kode Pos: 60231
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-600" />
                    <span className="text-slate-600">082312044118</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-600" />
                    <span className="text-slate-600">info@dwijayamanunggal.com</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="PT DWIJAYA MANUNGGAL" width={32} height={32} />
                <h4 className="text-lg font-bold">PT DWIJAYA MANUNGGAL</h4>
              </div>
              <p className="text-slate-400">
                Your trusted partner in premium real estate development in Surabaya.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#properties" className="hover:text-white transition-colors">Properties</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-slate-400">
                <li>Residential Development</li>
                <li>Commercial Properties</li>
                <li>Property Management</li>
                <li>Investment Consulting</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PT DWIJAYA MANUNGGAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}