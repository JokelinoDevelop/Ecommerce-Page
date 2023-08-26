<template>
    <body class="bg-orange lg:rounded-xl pb-4 rounded-[0] px-5 relative z-20">
        <section class="py-8 px-4 lg:text-left text-center">
            <div class="flex flex-col gap-2 ">
                <div>
                    <h1 class="text-3xl text-white font-semibold mb-4">Contact Us</h1>
                    <p class="text-lg text-white leading-relaxed mb-6">
                        We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate
                        to get in touch with us using the contact form below.
                    </p>
                </div>
                <div>
                    <form class="bg-orange rounded-lg shadow-md p-6 border-2">
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-medium text-white">Name</label>
                            <input type="text" id="name" name="name"
                                class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring "
                                required>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium text-white">Email</label>
                            <input type="email" id="email" name="email"
                                class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring "
                                required>
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-sm font-medium text-white">Message</label>
                            <textarea id="message" name="message" rows="4"
                                class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring "
                                required></textarea>
                        </div>
                        <button type="submit"
                            class="bg-white text-orange font-[700] py-3 px-7 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <footer class="bg-white lg:mx-12 mx-4 mt-5 py-8 px-2 rounded-full drop-shadow-xl">
            <div class="text-center">
                <p class="lg:text-xl text-sm text-orange font-[700]">&copy; 2023 SneakPeak. All rights reserved.</p>
            </div>
        </footer>
    </body>
</template>

<script setup>

</script>

