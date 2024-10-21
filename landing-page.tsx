import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Camera, Download, Upload, Edit } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">SEO Screenshot</div>
          <Button variant="outline">Contact</Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Optimize Your SEO with Perfect Screenshots
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatically capture, compress, and save WebP images under 100KB for superior SEO performance.
          </p>
          <Button size="lg" className="text-lg">
            Add to Chrome <ArrowRight className="ml-2" />
          </Button>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="mr-2" /> One-Click Capture
                </CardTitle>
              </CardHeader>
              <CardContent>
                Easily capture screenshots of any webpage with a single click.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="mr-2" /> Auto-Compression
                </CardTitle>
              </CardHeader>
              <CardContent>
                Automatically compress images to under 100KB without losing quality.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2" /> WebP Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                Save screenshots in the SEO-friendly WebP format for faster loading times.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Edit className="mr-2" /> Custom File Names
                </CardTitle>
              </CardHeader>
              <CardContent>
                Rename your screenshots before downloading, saving you time and keeping your files organized.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Install Extension</h3>
              <p className="text-muted-foreground">Add SEO Screenshot to your Chrome browser.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Capture Screenshot</h3>
              <p className="text-muted-foreground">Click the extension icon to capture the current page.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Rename File</h3>
              <p className="text-muted-foreground">Choose a custom name for your screenshot before saving.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Save Optimized Image</h3>
              <p className="text-muted-foreground">Your WebP image is saved automatically, ready for upload.</p>
            </div>
          </div>
        </section>

        {/* Benefits for SEO Professionals */}
        <section className="bg-muted py-12 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits for SEO Professionals</h2>
            <ul className="space-y-4 max-w-2xl mx-auto">
              <li className="flex items-start">
                <ArrowRight className="mr-2 mt-1 text-primary" />
                <span>Improve page load times with lightweight images</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="mr-2 mt-1 text-primary" />
                <span>Enhance user experience with faster-loading visuals</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="mr-2 mt-1 text-primary" />
                <span>Save time with automatic compression, formatting, and custom naming</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="mr-2 mt-1 text-primary" />
                <span>Boost search engine rankings with optimized images</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="mr-2 mt-1 text-primary" />
                <span>Streamline your workflow with organized, pre-named files</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Optimize Your SEO?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start capturing SEO-friendly screenshots today and see the difference in your website's performance.
          </p>
          <Button size="lg" className="text-lg">
            Install SEO Screenshot Now
          </Button>
        </section>
      </main>

      <footer className="bg-muted py-6 mt-24">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 SEO Screenshot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}