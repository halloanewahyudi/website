<script setup>
import VideoBackground from 'vue-responsive-video-background-player'
</script>
<template>
    <section>
        <div class="grid grid-cols-1 lg:grid-cols-6 min-h-screen w-full">
            <div class="lg:col-span-4 relative">
                <video-background src="mayekawa-cover.mp4"
                    class="h-full w-full min-h-screen flex flex-col justify-center items-center p-6 lg:p-10">
                    <div class="layer"></div>
                    <div class="flex flex-col justify-end p-6 lg:p-10 h-full w-full">
                        <div class="max-w-[800px] flex flex-col gap-4 p-6 relative">
                            <!-- <img src="https://www.mayekawa.com/with/images/logo_main_red.svg" alt="" class="w-40"> -->
                            <div class="flex items-end gap-4 text-primary">
                               <span class="text-4xl lg:text-5xl font-bold">Mayekawa</span>
                                <span class="italic  font-semibold text-2xl"> Indonesia</span>
                            </div>
                            <p class="text-3xl lg:text-6-xl font-semibold text-white leading-normal">
                                Mayekawa Manufacturing Company has expanded its business by focusing on
                                freezing and compression technologies ever since its establishment in 1924.
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
                <div
                    class="item bg-secondary text-white h-full w-full grid grid-cols-2  items-center divide-y divide-slate-200">
                    <div class="p-6 flex flex-col gap-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, atque.
                        </p>
                        <a href="" class="text-tertiary hover:opacity-75 duration-200">Learn More</a>
                    </div>
                    <div class="h-[calc(100vh/3)] overflow-hidden">
                        <img src="/ice-cream.jpg" alt=""
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="item bg-secondary text-white h-full w-full grid grid-cols-2 items-center divide-y">
                    <div class="p-6 flex flex-col gap-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, blanditiis.
                        </p>
                        <a href="" class="text-tertiary hover:opacity-75 duration-200">Learn More</a>
                    </div>
                    <div class="h-[calc(100vh/3)] overflow-hidden">
                        <img src="/case2.jpg" alt=""
                            class="w-full h-full object-cover scale-110">
                    </div>


                </div>
                <div class="item bg-secondary text-white h-full w-full grid grid-cols-2 items-center divide-y">
                    <div class="p-6 flex flex-col gap-4">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, explicabo?
                        </p>
                        <a href="" class="text-tertiary hover:opacity-75 duration-200">Learn More</a>
                    </div>
                    <div class="h-[calc(100vh/3)] ">
                        <img src="/case3.jpg" alt=""
                            class="w-full h-full object-fill">
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.layer {
    @apply absolute top-0 left-0 w-full h-full;
    background: rgb(2, 0, 36);
    background: linear-gradient(6deg, rgba(2, 0, 36, 0.8239670868347339) 0%, rgba(0, 212, 255, 0) 75%);
}
</style>