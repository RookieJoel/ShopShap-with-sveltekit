

<section class="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-600 p-8 shadow-lg">
    <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Get <span class="text-blue-950 font-extrabold">Stronger</span> Every Day
        </h1>
        <p class="text-lg md:text-xl text-blue-100 mb-6">
            Start your fitness journey today. Consistency and dedication are the keys to a healthier, happier you. Let's move together!
        </p>
        <button class=" text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition" onclick ={() => window.location.href = '/workouts'}>
            Start Workout
        </button>
        <button class="!bg-white !text-blue-500 font-semibold px-10 py-3 rounded-full shadow hover:bg-blue-100 transition ml-4 " onclick={() => window.location.href = '/contact'}>
            Contact Us
        </button>
    </div>
    <div class="flex-1 flex justify-center mt-8 md:mt-0">
        <img
            src="https://placehold.co/800x400"
            alt="Motivational workout"
            class="object-cover rounded-2xl shadow-lg w-full md:w-3/4 lg:w-2/3 max-w-full h-auto md:h-96 self-end"  />
    </div>
</section>