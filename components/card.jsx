import Image from "next/image"

export function Card(){
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        <div className="border border-gray-300 rounded-lg">
          <Image src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww" alt="placeholder" width={560} height={370} className="border-b-2xl border"/>
          <div className="p-6 border-t border-gray-300">
            <p className="text-black text-2xl font-bold">Finance App</p>
            <p className="text-gray-300 text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className="flex justify-center items-center bg-blue-500 rounded-md px-6 py-1 self-stretch w-full text-white text-base font-normal mt-4">View project</button>
          </div>
        </div>
        <div>
        <div className="border border-gray-300 rounded-lg">
          <Image src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww" alt="placeholder" width={560} height={370} className="border-b-2xl border"/>
          <div className="p-6 border-t border-gray-300">
            <p className="text-black text-2xl font-bold">Finance App</p>
            <p className="text-gray-300 text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className="flex justify-center items-center bg-blue-500 rounded-md px-6 py-1 self-stretch w-full text-white text-base font-normal mt-4">View project</button>
          </div>
        </div>
        </div>
        <div>
        <div className="border border-gray-300 rounded-lg">
          <Image src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww" alt="placeholder" width={560} height={370} className="border-b-2xl border"/>
          <div className="p-6 border-t border-gray-300">
            <p className="text-black text-2xl font-bold">Finance App</p>
            <p className="text-gray-300 text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className="flex justify-center items-center bg-blue-500 rounded-md px-6 py-1 self-stretch w-full text-white text-base font-normal mt-4">View project</button>
          </div>
        </div>
        </div>
      </div>
    )
}