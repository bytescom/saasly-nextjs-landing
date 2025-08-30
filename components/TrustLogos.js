import React from "react"
import Image from "next/image"

export default function TrustLogos(){
    return(
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4 md:px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Your trusted solution</p>
              <div className="flex items-center justify-center gap-8 md:gap-10 lg:gap-16 overflow-hidden">
                <div className="flex items-center gap-8 md:gap-10 lg:gap-16 animate-scroll">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Image
                      key={i}
                      src="/logo-eg.svg"
                      alt={`Saasly logo ${i}`}
                      width={80}
                      height={40}
                      className="h-12 w-auto opacity-90 transition-all hover:opacity-100 flex-shrink-0"
                    />
                  ))}
                  {/* Duplicate logos for seamless loop */}
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Image
                      key={`duplicate-${i}`}
                      src="/logo-eg.svg"
                      alt={`Saasly logo ${i}`}
                      width={80}
                      height={40}
                      className="h-12 w-auto opacity-90 transition-all hover:opacity-100 flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </section>
    )
}

