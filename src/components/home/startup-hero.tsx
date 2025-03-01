
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const HeroSection = () => {
    return (
        <>
            <div className=''>
                <section className='relative min-h-[600px] w-full overflow-hidden bg-gradient-to-tl from-blue-950 via-slate-700 to-blue-950'>

                    {/* Gradient overlay */}
                    <div className='absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:bg-gradient-to-r before:from-blue-950/20 before:to-slate-800 before:blur-3xl'>

                        <div className=" constainer relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32 ">
                            <div className=" flex-1 space-y-8 text-center md:text-left">
                                <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>Explore the world through
                                    <span className='bg-gradient-to-l from-blue-400 to-white  bg-clip-text text-transparent'>{" "}words</span>
                                </h1>

                                <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
                                    Discover insightful articles, thought-provoking stories, and expert
                                    perspectives on technology, lifestyle, and innovation.
                                </p>

                                <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                                    <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-200">
                                        Start Reading
                                    </Button>
                                    <Button
                                        // variant="outline"
                                        size="lg"
                                        className="rounded-full px-8 py-6 text-lg dark:text-white bg-gradient-to-r from-blue-950 via-blue-900 to-blue-200"
                                    >
                                        Explore Topics
                                    </Button>
                                </div>

                                 {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 text-white md:max-w-md">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">1K+</div>
              <div className="text-sm text-gray-400">Published Articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-400">Expert Writers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">10M+</div>
              <div className="text-sm text-gray-400">Monthly Readers</div>
            </div>
          </div>
        </div>




 <div className="mt-12 flex-1 md:mt-0">
          <div
            className={cn(
              "relative mx-auto h-64 w-64 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-white/5 to-transparent",
              "border border-primary/20 backdrop-blur-lg",
              "shadow-2xl shadow-indigo-500/10"
            )}
          >
           <img 
           className=' object-contain' src="https://m.media-amazon.com/images/I/41sSfLLJ85L.jpg" alt="" />
          </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </>
    )
}

export default HeroSection
