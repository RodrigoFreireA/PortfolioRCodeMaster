<script setup>
import Projects from './Projects.vue';
defineProps({
    skills: Object,
    projects: Object
});
</script>
<template>
    <section id="portfolio" class="section bg-light-primary dark:bg-dark-primary min-h-[1400px]">
        <div class="container mx-auto" v-motion :initial="{
            opacity: 0,
            y: 100,
        }" :visible="{
    opacity: 1,
    y: 0,
}">
            <div class="flex flex-col items-center text-center">
                <h2 class="section-title">My latest Work</h2>
                <p class="subtitle">
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Voluptas atque fugiat voluptate vitae aperiam,
                    itaque consectetur. Ab iste neque veniam natus
                    consequuntur dignissimos veritatis velit cupiditate,
                    quo recusandae delectus ipsam laudantium nulla
                    explicabo eos animi. Accusamus ea repellat animi ut.
                </p>
            </div>
        </div>
        <Projects :skills="skills" :projects="projects" />
    </section>
</template>