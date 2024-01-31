import '../assets/css/eventdesc.css'
function EventDesc() {
    return (
        <>
      <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src=""alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.webp?b=1&s=170667a&w=0&k=20&c=a_Apo8EzfGxr84iO1IhLjus2PuHGpgZSdfP5B1sBgAI=" alt="" className='w-24 h-24 rounded-md cursor-pointer' />
                    <img src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.webp?b=1&s=170667a&w=0&k=20&c=a_Apo8EzfGxr84iO1IhLjus2PuHGpgZSdfP5B1sBgAI=" alt="" className='w-24 h-24 rounded-md cursor-pointer' />
                    <img src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.webp?b=1&s=170667a&w=0&k=20&c=a_Apo8EzfGxr84iO1IhLjus2PuHGpgZSdfP5B1sBgAI=" alt="" className='w-24 h-24 rounded-md cursor-pointer' />
                    <img src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.webp?b=1&s=170667a&w=0&k=20&c=a_Apo8EzfGxr84iO1IhLjus2PuHGpgZSdfP5B1sBgAI=" alt="" className='w-24 h-24 rounded-md cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
                    <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl'>-</button>
                        <span className='py-4 px-6 rounded-lg'></span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl'>+</button>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
     );
}

export default EventDesc;