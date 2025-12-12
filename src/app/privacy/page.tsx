import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, UserCheck } from 'lucide-react'
import Image from 'next/image'

export default function PrivacyPolicy() {
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
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-slate-600">
            Your privacy is important to <span className="text-blue-600 font-semibold">PT DWIJAYA MANUNGGAL</span>
          </p>
          <p className="text-slate-500 mt-2">Last updated: December 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                PT DWIJAYA MANUNGGAL ("we," "us," or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website, use our services, or interact with our company.
              </p>
              <p className="text-slate-600">
                By using PT DWIJAYA MANUNGGAL's website and services, you consent to the practices 
                described in this policy.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Name, email address, phone number</li>
                  <li>Home and business addresses</li>
                  <li>Financial information for property transactions</li>
                  <li>Government identification numbers (where required by law)</li>
                  <li>Preferences and interests in real estate</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Property-Related Information</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Property ownership details</li>
                  <li>Property viewing history</li>
                  <li>Property preferences and requirements</li>
                  <li>Investment capacity and budget ranges</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Pages visited and time spent on our website</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Service Provision:</strong> To provide real estate consulting, property showings, and transaction services</li>
                <li><strong>Communication:</strong> To respond to inquiries, send property updates, and provide customer support</li>
                <li><strong>Marketing:</strong> To send information about properties, services, and promotional offers (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations, including anti-money laundering regulations</li>
                <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website and services</li>
                <li><strong>Security:</strong> To protect against fraud and ensure the security of our systems</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Authorized Partners:</strong> Real estate agents, lawyers, notaries, and financial institutions involved in property transactions</li>
                <li><strong>Service Providers:</strong> Third-party services that help us operate our business (e.g., CRM systems, payment processors)</li>
                <li><strong>Legal Authorities:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sales of business assets</li>
              </ul>
              <p className="text-slate-600 font-semibold">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                PT DWIJAYA MANUNGGAL implements appropriate security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers with restricted access</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
                <li>Compliance with Indonesian data protection laws</li>
              </ul>
              <p className="text-slate-600">
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-600" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Objection:</strong> Object to processing of your information for direct marketing</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="text-slate-600">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We use cookies and similar technologies to enhance your experience on our website:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
              </ul>
              <p className="text-slate-600">
                You can control cookie settings through your browser preferences.
              </p>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card>
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Your information is primarily stored and processed in Indonesia. If we transfer your data 
                to other countries, we ensure appropriate safeguards are in place to protect your information 
                in accordance with applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Our services are not intended for individuals under 18 years of age. We do not knowingly 
                collect personal information from children. If we become aware of collecting information 
                from a child, we will take steps to delete such information immediately.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on our website and updating the "Last updated" date. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy or want to exercise your rights, 
                please contact us:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="font-semibold text-slate-900 mb-2">PT DWIJAYA MANUNGGAL</p>
                <p className="text-slate-600">
                  JL. AHMAD YANI NO 16-18<br />
                  Kel. Monokromo, Kec. , Kota Surabaya<br />
                  Prov. Jawa Timur, Kode Pos: 60231<br />
                  <br />
                  Phone: 082312044118<br />
                  Email: privacy@dwijayamanunggal.com
                </p>
              </div>
              <p className="text-slate-600">
                We will respond to your inquiry within 30 days of receipt.
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