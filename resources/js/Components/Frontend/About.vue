<template>
    <section id="about" class="section bg-light-secondary dark:bg-dark-secondary">
        <div class="container mx-auto" v-motion :initial="{
            opacity: 0,
            y: 100,
        }" :visible="{
    opacity: 1,
    y: 0,
}">
            <div class="flex flex-col xl:flex-row gap-24">
                <img class="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
                    src="http://127.0.0.1:8000/img/About.jpg" alt="about" />
                <div class="flex flex-col
                items-center
                text-center
                lg:items-start
                lg:text-letf">
                    <div class="flex flex-col">
                        <h2 class="text-3xl
                    lg:text-4xl
                    font-medium
                    lg:font-extrabold
                    mb-3">
                            About Me
                        </h2>
                        <p class="mb-4
                    text-accent">BackEnd Developer</p>
                        <hr class="mb-8 opacity-90 dark:opacity-5">
                        <p class="mb-8">
                            Hello, my name is Rodrigo, since 2017 I've been looking to improve myself in the field of
                            programming. Currently I have been working as a freelancer, graduated in Computer Technician and
                            student of Systems Analysis and Development, the search for being more and more qualified is
                            unstoppable.
                            <br><br>
                            On this portfolio site you can check out some of my projects developed throughout my career.
                        </p>

                    </div>
                    <!--<button class="btn 
                    btn-md 
                    bg-accent 
                    text-white
                    hover:bg-light-primary 
                    hover:text-light-tail-500 
                    dark:hover:bg-dark-secondary 
                    dark:hover:text-dark-navy-100
                    md:btn-lg 
                    transition-all">
                        Contact-Me
                    </button>-->
                </div>
            </div>
        </div>
    </section>
</template>