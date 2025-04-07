import { YCLayout } from "@/components/yc-layout"

export default function YCDemoPage() {
  return (
    <YCLayout>
      <div>
        <div className="mb-12">
          <h1 className="yc-heading text-4xl mb-4">Apply to Startup House</h1>
          <h2 className="text-yc-neutral-700 text-xl mb-8">Summer 2025 Batch</h2>
          
          <div className="flex gap-4 mb-10">
            <a href="#" className="yc-button">Apply to Summer 2025</a>
            <div className="text-yc-neutral-600 mt-2">
              Not ready to apply this batch?
              <a href="#" className="yc-link ml-1">Sign up for reminders</a>
            </div>
          </div>
          
          <div className="border-t border-b border-yc-neutral-200 py-8 my-8">
            <p className="mb-4 text-yc-neutral-800">
              Startup House is accepting applications for the <strong>Summer 2025 Batch</strong>.
              Funding cycle. The batch will take place from <strong>June to September in San Francisco</strong>.
            </p>
            
            <p className="mb-4 text-yc-neutral-800">
              The deadline to apply on-time is <strong>May 13 at 8pm PT</strong> and you will get a
              decision by <strong>June 11</strong>. If you apply after the deadline, we will still consider
              the application but can't promise exactly when we'll get back to you.
            </p>
          </div>
          
          <h2 className="yc-heading text-2xl mb-6">About applying to Startup House</h2>
          
          <ol className="list-decimal pl-6 space-y-6 text-yc-neutral-800">
            <li>
              If you want to apply, please submit your application online.
            </li>
            <li>
              People who applied before the regular deadline will hear back by <strong>June 12</strong>. 
              If you apply after the deadline, we'll still consider the application
              but can't promise exactly when we'll get back to you.
            </li>
            <li>
              We encourage you to submit your application as soon as you're ready
              to apply.
            </li>
            <li>
              If your application is promising, we will invite you to interview with us.
              Most interviews will be held by video conference in <strong>May and June</strong>. We
              typically make decisions the same day as your interview, and we give
              everyone who interviews detailed feedback.
            </li>
          </ol>
        </div>
        
        <div className="yc-card p-6 rounded-lg mb-8">
          <h3 className="yc-heading text-lg mb-4">Related</h3>
          <ul className="space-y-2">
            <li><a href="#" className="yc-link">About Startup House</a></li>
            <li><a href="#" className="yc-link">Founder Ethics</a></li>
            <li><a href="#" className="yc-link">Frequently Asked Questions</a></li>
            <li><a href="#" className="yc-link">Requests for Startups</a></li>
          </ul>
        </div>
      </div>
    </YCLayout>
  )
} 