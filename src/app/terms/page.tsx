import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react'
import Image from 'next/image'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="PT DWIJAYA MANUNGGAL" width={40} height={40} />
              <div>
                <h1 className="text-xl font-bold text-slate-900">PT DWIJAYA MANUNGGAL</h1>
                <p className="text-xs text-slate-600">Real Estate Excellence</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
          <p className="text-xl text-slate-600">
            Legal terms for using <span className="text-blue-600 font-semibold">PT DWIJAYA MANUNGGAL</span> services
          </p>
          <p className="text-slate-500 mt-2">Last updated: December 2024</p>
        </div>

        <div className="space-y-8">
          {/* Agreement to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Welcome to PT DWIJAYA MANUNGGAL. These Terms and Conditions ("Terms") govern your use of 
                our website, services, and any property transactions conducted through our company.
              </p>
              <p className="text-slate-600">
                By accessing our website, using our services, or engaging in business with us, you agree 
                to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> These Terms are legally binding. Please read them carefully 
                  before proceeding with any property transactions or services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardHeader>
              <CardTitle>Services Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                PT DWIJAYA MANUNGGAL provides the following real estate services:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Property Sales:</strong> Facilitating the sale and purchase of residential and commercial properties</li>
                <li><strong>Property Rentals:</strong> Assisting with rental agreements and property management</li>
                <li><strong>Real Estate Consulting:</strong> Providing expert advice on property investments and market trends</li>
                <li><strong>Property Development:</strong> Developing new real estate projects in Surabaya and surrounding areas</li>
                <li><strong>Legal Documentation:</strong> Assisting with property documentation and legal compliance</li>
                <li><strong>Market Analysis:</strong> Providing property valuation and market analysis services</li>
              </ul>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Client Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                As a client of PT DWIJAYA MANUNGGAL, you agree to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Provide accurate and complete information for property transactions</li>
                <li>Respond promptly to communication regarding your property inquiries</li>
                <li>Conduct due diligence on properties before making purchase decisions</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Make timely payments as agreed in transaction contracts</li>
                <li>Respect the confidentiality of business transactions</li>
                <li>Provide valid identification and financial documentation when required</li>
              </ul>
            </CardContent>
          </Card>

          {/* Property Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Property Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Offer and Acceptance</h3>
                <p className="text-slate-600">
                  All property offers must be made in writing and are subject to acceptance by the property owner. 
                  PT DWIJAYA MANUNGGAL acts as an intermediary and facilitates communication between parties.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Payment Terms</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Down payments are typically required to secure property reservations</li>
                  <li>Payment schedules must be strictly followed as outlined in agreements</li>
                  <li>All payments are non-refundable unless specified in writing</li>
                  <li>Payment methods include bank transfer, cashier's check, or other approved methods</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Property Inspection</h3>
                <p className="text-slate-600">
                  Clients are encouraged to conduct thorough property inspections before finalizing any purchase. 
                  PT DWIJAYA MANUNGGAL can arrange professional inspection services upon request.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fees and Commissions */}
          <Card>
            <CardHeader>
              <CardTitle>Fees and Commissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Commission Structure</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li><strong>For Sellers:</strong> Typically 2-3% of the final sale price</li>
                  <li><strong>For Buyers:</strong> Usually no commission, but service fees may apply</li>
                  <li><strong>For Rentals:</strong> One month's rent for long-term leases</li>
                  <li><strong>Consulting Services:</strong> Hourly rates or fixed project fees</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Additional Costs</h3>
                <p className="text-slate-600">
                  Clients are responsible for additional costs including:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Legal fees and notary costs</li>
                  <li>Property taxes and transfer duties</li>
                  <li>Building permits and inspection fees</li>
                  <li>Bank processing fees for financing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Legal Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-600" />
                Legal Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                All property transactions must comply with Indonesian laws and regulations, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Property Law:</strong> Indonesian Property Act and related regulations</li>
                <li><strong>Foreign Ownership:</strong> Restrictions on foreign property ownership</li>
                <li><strong>Tax Regulations:</strong> Property tax laws and reporting requirements</li>
                <li><strong>Anti-Money Laundering:</strong> AML compliance for all transactions</li>
                <li><strong>Building Codes:</strong> Local building and zoning regulations</li>
                <li><strong>Environmental Laws:</strong> Environmental impact assessments when required</li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Disclaimer:</strong> PT DWIJAYA MANUNGGAL is not a law firm. We recommend consulting 
                  with qualified legal professionals for complex property transactions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Your privacy is important to us. Our use of your personal information is governed by our 
                Privacy Policy, which forms part of these Terms. Key points include:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>We collect only necessary information for property transactions</li>
                <li>Your information is shared only with authorized parties</li>
                <li>We implement appropriate security measures to protect your data</li>
                <li>You have rights regarding your personal information</li>
              </ul>
              <p className="text-slate-600">
                For detailed information, please refer to our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Our Liability</h3>
                <p className="text-slate-600">
                  PT DWIJAYA MANUNGGAL's liability is limited to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>The commission or fees paid for our services</li>
                  <li>Damages directly caused by our negligence or willful misconduct</li>
                  <li>Breach of our contractual obligations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Exclusions</h3>
                <p className="text-slate-600">
                  We are not liable for:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Property defects not disclosed by sellers</li>
                  <li>Market fluctuations affecting property values</li>
                  <li>Delays caused by third parties or government agencies</li>
                  <li>Loss of opportunity or consequential damages</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle>Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Negotiation</h3>
                <p className="text-slate-600">
                  In the event of a dispute, we first attempt to resolve the matter through good faith 
                  negotiation between the parties involved.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Mediation</h3>
                <p className="text-slate-600">
                  If negotiation fails, disputes may be resolved through mediation with a neutral 
                  third-party mediator agreed upon by both parties.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Legal Action</h3>
                <p className="text-slate-600">
                  As a last resort, disputes may be resolved through legal proceedings in the 
                  appropriate courts in Surabaya, Indonesia.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                These Terms may be terminated:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>By You:</strong> At any time by providing written notice to PT DWIJAYA MANUNGGAL</li>
                <li><strong>By Us:</strong> If you breach these Terms or violate applicable laws</li>
                <li><strong>Mutually:</strong> By agreement of both parties</li>
              </ul>
              
              <p className="text-slate-600">
                Upon termination, you remain obligated to pay for services rendered and comply with 
                any ongoing contractual obligations.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                All content on our website, including text, images, logos, and property listings, 
                is the intellectual property of PT DWIJAYA MANUNGGAL or our partners. You may not 
                use, reproduce, or distribute our content without prior written permission.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services after 
                such changes constitutes acceptance of the modified Terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="font-semibold text-slate-900 mb-2">PT DWIJAYA MANUNGGAL</p>
                <p className="text-slate-600">
                  JL. AHMAD YANI NO 16-18<br />
                  Kel. Monokromo, Kec. , Kota Surabaya<br />
                  Prov. Jawa Timur, Kode Pos: 60231<br />
                  <br />
                  Phone: 082312044118<br />
                  Email: legal@dwijayamanunggal.com
                </p>
              </div>
              <p className="text-slate-600">
                For legal matters, please mark your correspondence as "Legal - Terms and Conditions" 
                to ensure proper handling.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 PT DWIJAYA MANUNGGAL. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}