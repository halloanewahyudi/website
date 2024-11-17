<script setup>
import VideoBackground from 'vue-responsive-video-background-player'
</script>
<template>
    <section>
        <div class="grid grid-cols-1 lg:grid-cols-6 min-h-screen w-full">
            <div class="lg:col-span-4 relative">
                <video-background src="robot.mp4"
                    class="h-full w-full min-h-screen flex flex-col justify-center items-center p-6 lg:p-10">
                    <div class="layer"></div>
                    <div class="flex flex-col justify-center p-6 lg:p-10 h-full w-full">
                        <div class="max-w-[800px] flex flex-col gap-4 p-6 relative">
                            <img src="https://www.mayekawa.com/with/images/logo_main_red.svg" alt="" class="w-40">
                            <p class="text-3xl lg:text-6-xl font-semibold text-white leading-normal">
                                Our technology is helping to create a society in which all people can live safely,
                                securely,
                                and comfortably by providing solutions for the global challenges related to the
                                environment
                                and food.
                                What could you do with Mayekawa?
                            </p>
                            <button
                                class="text-tertiary bg-secondary py-4 px-6 hover:bg-slate-700  duration-200 max-w-max inline-block">
                                Learn More
                            </button>
                        </div>

                    </div>
                </video-background>
            </div>
            <div class="lg:col-span-2 h-screen w-full  bg-green-200 grid grid-cols-1  justify-between">
                <div class="item bg-secondary text-white h-full w-full grid grid-cols-2  items-center divide-y divide-slate-200">
                    <div class="p-6 flex flex-col gap-4">
                        <p>
                            Case study "Clean district heating made possible with heat pumps"
                        </p>
                        <a href="" class="text-tertiary hover:opacity-75 duration-200">Learn More</a>
                    </div>
                    <div class="h-[calc(100vh/3)] ">
                    <img src="https://www.mayekawa.com/images/topnews/building_and_factory.png" alt=""
                        class="w-full h-full object-cover">
                        </div>

                </div>
                <div class="item bg-secondary text-white h-full w-full grid grid-cols-2 items-center divide-y">
                    <div class="p-6 flex flex-col gap-4">
                        <p>
                            Case study "Clean district heating made possible with heat pumps"
                        </p>
                        <a href="" class="text-tertiary hover:opacity-75 duration-200">Learn More</a>
                    </div>
                    <div class="h-[calc(100vh/3)] ">
                        <img src="https://www.mayekawa.com/images/topnews/img_article_casestudy.jpg" alt=""
                        class="w-full h-full object-cover">
                    </div>


                </div>
                <div class="item bg-slate-900 text-white h-full w-full grid grid-cols-2 items-center divide-y">
                    <div class="p-6 flex flex-col gap-4">
                        <p>
                            Case study "Clean district heating made possible with heat pumps"
                        </p>
                        <a href="" class="text-tertiary hover:opacity-75 duration-200">Learn More</a>
                    </div>
                    <div class="h-[calc(100vh/3)] ">
                    <img src="https://www.mayekawa.com/images/img_worldmap.svg" alt=""
                        class="w-full h-full object-fill">
                        </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.layer{
    @apply absolute top-0 left-0 w-full h-full;
    background: rgb(2,0,36);
    background: linear-gradient(6deg, rgba(2,0,36,0.7231267507002801) 0%, rgba(0,212,255,0) 100%);
}
</style>