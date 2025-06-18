<script setup>
    definePageMeta({
    layout: "home",
})
    const products = ref([
  {
    id: 1,
    name: "Papaya",
    category: "Fruits",
    price: "9",
    stock: "123",
    totalSales: "$199.99",
    status: "Inactive"
  },
])
</script>

<template>
            <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-800 hover:text-green-800 dark:text-gray-400 dark:hover:text-white">
                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Home
                </a>
                </li>
                <li>
                <div class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <a href="#" class="ms-1 text-sm font-medium text-gray-800 hover:text-green-800 md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</a>
                </div>
                </li>
            </ol>
            </nav>
            <h1 class="text-2xl font-semibold text-black-900 dark:text-white-900 mt-3">All Products</h1>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <a href="#" class="p-5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <span class="inline-flex items-center px-2 py-0.5 mb-2 text-xs font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-200">↑ 8%</span>
                <h5 class="mt-0.8 text-3xl font-bold text-gray-900 dark:text-white">345,768</h5>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Total stocks</p></a>

                <a href="#" class="p-5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <span class="inline-flex items-center px-2 py-0.5 mb-2 text-xs font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-200">↑ 12,4</span>
                <h5 class="mt-0.8 text-3xl font-bold text-gray-900 dark:text-white">31,385</h5>
                <p class="mt-2 text-gray-500 dark:text-gray-400">New Products</p></a>

                <a href="#" class="p-5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <span class="inline-flex items-center px-2 py-0.5 mb-2 text-xs font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-200">↑ 3,7</span>
                <h5 class="mt-0.8 text-3xl font-bold text-gray-900 dark:text-white">27,274</h5>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Sold Products</p></a>

                <a href="#" class="p-5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <span class="inline-flex items-center px-2 py-0.5 mb-2 text-xs font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-200">↑ 12,4</span>
                <h5 class="mt-0.8 text-3xl font-bold text-gray-900 dark:text-white">3,506</h5>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Returned Products</p></a>
            </div>
            <div class="flex items-center justify-between mt-4 mb-4">
                <div class="flex items-center space-x-2">
                    <span class="font-semibold text-black text-xl">FreshBytes Products</span>
                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2" fill="none"/>
                    <text x="10" y="15" text-anchor="middle" font-size="12" fill="currentColor">i</text>
                    </svg>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                    <span class="mr-2">+</span> Add new product
                    </button>
                    <div class="relative">
                    <button class="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100 transition flex items-center">
                        Table settings
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <!-- Dropdown can go here if needed -->
                    </div>
                </div>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div class="flex gap-2 flex-wrap">
                        <input type="text" placeholder="Search" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Category</option>
                        <option>Fruits</option>
                        <option>Vegetables</option>
                        </select>
                        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Sub - Category</option>
                        <option>Root Vegetables</option>
                        <option>Leafy Greens</option>
                        <option>Cruciferous Vegetables</option>
                        <option>Nightshades</option>
                        </select>
                        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Price</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                        </select>
                        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Status</option>
                        <option>Inactive</option>
                        <option>Active</option>
                        <option>Sale</option>
                        <option>Discounted</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto">
                        <div class="inline-block min-w-full align-middle">
                            <div class="overflow-hidden shadow">
                                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                    <thead class="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                                    <label for="checkbox-all" class="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Product Name
                                            </th>
                                            <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Product ID
                                            </th>

                                            <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Category
                                            </th>
                                            <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Price
                                            </th>
                                            <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Stock
                                            </th>
                                            <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Total Sales
                                            </th>
                                            <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                Status
                                            </th>
                                            <th scope="col" class="p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        <tr v-for="product in products" :key="product.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input
                                                :id="`checkbox-${product.id}`"
                                                type="checkbox"
                                                class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label :for="`checkbox-${product.id}`" class="sr-only">checkbox</label>
                                            </div>
                                            </td>
                                            <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ product.name }}
                                            </td>
                                            <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ product.id }}
                                            </td>
                                            <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ product.category }}
                                            </td>
                                            <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ product.price }}
                                            </td>
                                            <td class="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">
                                            {{ product.stock }}
                                            </td>
                                            <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ product.totalSales }}
                                            </td>
                                            <td class="p-4 text-base font-medium whitespace-nowrap">
                                            <span
                                                :class="product.status === 'Inactive'
                                                ? 'text-red-600 font-semibold'
                                                : 'text-green-600 font-semibold'"
                                            >
                                                {{ product.status }}
                                            </span>
                                            </td>
                                            <td class="p-4 space-x-2 whitespace-nowrap">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#29000] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            >
                                                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                                                </svg>
                                                Update
                                            </button>

                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                                            >
                                                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clip-rule="evenodd"
                                                ></path>
                                                </svg>
                                                Delete item
                                            </button>
                                            </td>
                                        </tr>
                                        </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
</template>
