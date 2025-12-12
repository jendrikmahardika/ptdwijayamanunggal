import { NextRequest, NextResponse } from 'next/server'

// Mock data for properties
const properties = [
  {
    id: 1,
    title: "Green Valley Residence",
    type: "Residential",
    location: "West Surabaya",
    price: "Rp 1.2M - 2.5M",
    description: "Modern residential complex with green spaces and premium amenities",
    features: ["24/7 Security", "Swimming Pool", "Fitness Center", "Children's Playground"],
    bedrooms: "2-4",
    bathrooms: "2-3",
    landArea: "120-200 m²",
    buildingArea: "90-180 m²",
    status: "Available",
    images: ["/api/placeholder/400/300"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Business Center Plaza",
    type: "Commercial",
    location: "Central Surabaya",
    price: "Rp 8M - 15M",
    description: "Prime commercial space in the heart of Surabaya's business district",
    features: ["Strategic Location", "Modern Facilities", "Parking Space", "High-Speed Internet"],
    bedrooms: "N/A",
    bathrooms: "N/A",
    landArea: "500-1000 m²",
    buildingArea: "400-800 m²",
    status: "Available",
    images: ["/api/placeholder/400/300"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Coastal Living Apartments",
    type: "Apartment",
    location: "East Surabaya",
    price: "Rp 800K - 1.8M",
    description: "Luxury apartments with ocean views and resort-style amenities",
    features: ["Ocean View", "Rooftop Garden", "Clubhouse", "Beach Access"],
    bedrooms: "1-3",
    bathrooms: "1-2",
    landArea: "N/A",
    buildingArea: "45-120 m²",
    status: "Limited",
    images: ["/api/placeholder/400/300"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 4,
    title: "Surya Heights Villas",
    type: "Residential",
    location: "South Surabaya",
    price: "Rp 3M - 5M",
    description: "Exclusive villa community with private gardens and premium facilities",
    features: ["Private Garden", "Smart Home", "Private Pool", "Gated Community"],
    bedrooms: "3-5",
    bathrooms: "3-4",
    landArea: "200-400 m²",
    buildingArea: "150-350 m²",
    status: "Available",
    images: ["/api/placeholder/400/300"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 5,
    title: "Downtown Office Tower",
    type: "Commercial",
    location: "Central Business District",
    price: "Rp 10M - 25M",
    description: "Grade A office space with panoramic city views",
    features: ["Grade A Building", "Panoramic Views", "Advanced Security", "Premium Facilities"],
    bedrooms: "N/A",
    bathrooms: "N/A",
    landArea: "1000-2000 m²",
    buildingArea: "800-1500 m²",
    status: "Available",
    images: ["/api/placeholder/400/300"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const location = searchParams.get('location')
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    
    let filteredProperties = [...properties]
    
    // Apply filters
    if (type) {
      filteredProperties = filteredProperties.filter(p => 
        p.type.toLowerCase() === type.toLowerCase()
      )
    }
    
    if (location) {
      filteredProperties = filteredProperties.filter(p => 
        p.location.toLowerCase().includes(location.toLowerCase())
      )
    }
    
    if (status) {
      filteredProperties = filteredProperties.filter(p => 
        p.status.toLowerCase() === status.toLowerCase()
      )
    }
    
    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex)
    
    return NextResponse.json({
      success: true,
      data: paginatedProperties,
      pagination: {
        page,
        limit,
        total: filteredProperties.length,
        totalPages: Math.ceil(filteredProperties.length / limit)
      },
      filters: {
        type,
        location,
        status
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch properties' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'type', 'location', 'price', 'description']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    // Create new property
    const newProperty = {
      id: properties.length + 1,
      ...body,
      status: body.status || 'Available',
      images: body.images || ["/api/placeholder/400/300"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    properties.push(newProperty)
    
    return NextResponse.json({
      success: true,
      data: newProperty,
      message: 'Property created successfully'
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create property' },
      { status: 500 }
    )
  }
}